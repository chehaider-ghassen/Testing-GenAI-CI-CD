"""
SmartTodo — Backend API (Flask)

Implémente les Functional Requirements baselinées FR-001 à FR-022,
à l'exception de FR-008 (Caractères autorisés dans le titre), qui reste
OPEN / BLOCKED tant que la décision métier Q8 n'est pas validée.
Aucune validation de caractères n'est donc appliquée au-delà de la
longueur du titre (FR-007).

Décisions d'implémentation prises en tant que développeur (au-delà de
ce que la QA avait figé, puisque ces points étaient explicitement TBC
dans les artefacts QA) :

  - Authentification : simplifiée à l'extrême (nom d'utilisateur seul,
    sans mot de passe) à des fins d'apprentissage. Ce n'est PAS un
    mécanisme d'authentification représentatif d'une application réelle.
  - FR-014 (date du jour) : la date de référence est celle du serveur,
    en UTC. Ceci résout le TBC "fuseau horaire" identifié dans le Test
    Design, en fixant un choix concret pour cette implémentation.
  - FR-021 / FR-022 (filtres) : le comportement individuel des filtres
    statut et priorité (pris séparément) était explicitement non défini
    dans les Requirements. En tant que développeur, j'implémente ici le
    comportement naturel qui résout ce gap : chaque filtre peut être
    appliqué seul ou en combinaison avec l'autre et/ou la recherche.
"""
from flask import Flask, request, jsonify, g
from datetime import date, datetime
from functools import wraps
import database

app = Flask(__name__)

VALID_PRIORITIES = {"Basse", "Moyenne", "Haute"}
VALID_STATUSES = {"À faire", "Terminée"}
ALLOWED_TRANSITIONS = {
    ("À faire", "Terminée"),
    ("Terminée", "À faire"),
}


# ---------------------------------------------------------------------------
# CORS (minimal, hand-written — no external dependency available)
# ---------------------------------------------------------------------------
@app.after_request
def add_cors_headers(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, X-User-Id"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PATCH, DELETE, OPTIONS"
    return response


@app.route("/api/<path:_any>", methods=["OPTIONS"])
def cors_preflight(_any):
    return "", 204


# ---------------------------------------------------------------------------
# Auth (FR-001 / FR-002 support) — intentionally minimal, see module docstring
# ---------------------------------------------------------------------------
def require_user(f):
    """Reads X-User-Id header, loads the user, enforces it exists.
    This is how FR-001/FR-002 (ownership & isolation) are enforced on
    every task route below: every query is scoped to g.user_id."""
    @wraps(f)
    def wrapper(*args, **kwargs):
        user_id = request.headers.get("X-User-Id")
        if not user_id:
            return jsonify({"error": "Authentification requise (X-User-Id manquant)."}), 401
        conn = database.get_connection()
        user = conn.execute("SELECT * FROM users WHERE id = ?", (user_id,)).fetchone()
        conn.close()
        if not user:
            return jsonify({"error": "Utilisateur inconnu."}), 401
        g.user_id = user["id"]
        g.username = user["username"]
        return f(*args, **kwargs)
    return wrapper


@app.route("/api/auth/login", methods=["POST"])
def login():
    """Simplified login: get-or-create a user by username. No password.
    NOT representative of real authentication — for learning purposes only."""
    data = request.get_json(silent=True) or {}
    username = (data.get("username") or "").strip()
    if not username:
        return jsonify({"error": "Nom d'utilisateur requis."}), 400
    if len(username) > 50:
        return jsonify({"error": "Nom d'utilisateur trop long (50 caractères max)."}), 400

    conn = database.get_connection()
    user = conn.execute("SELECT * FROM users WHERE username = ?", (username,)).fetchone()
    if user is None:
        cur = conn.execute("INSERT INTO users (username) VALUES (?)", (username,))
        conn.commit()
        user_id = cur.lastrowid
    else:
        user_id = user["id"]
    conn.close()
    return jsonify({"user_id": user_id, "username": username}), 200


# ---------------------------------------------------------------------------
# Validation helpers — each one maps directly to a baselined FR
# ---------------------------------------------------------------------------
def validate_task_payload(data, partial=False):
    """Returns (errors: list[str]). `partial=True` skips required-field
    checks for fields not present (used for status-only updates)."""
    errors = []

    # FR-006 / FR-007 — title required, 1 to 100 characters inclusive
    if "title" in data or not partial:
        title = data.get("title")
        if title is None or not str(title).strip():
            errors.append("Le titre est obligatoire. (FR-006)")
        elif not (1 <= len(str(title)) <= 100):
            errors.append("Le titre doit contenir entre 1 et 100 caractères. (FR-007)")
        # FR-008 is OPEN/BLOCKED: no character-level rule is applied here,
        # by design. Do not add any character validation to this block.

    # FR-009 / FR-010 — description optional, max 500 characters
    if "description" in data:
        description = data.get("description") or ""
        if len(str(description)) > 500:
            errors.append("La description ne doit pas dépasser 500 caractères. (FR-010)")

    # FR-011 / FR-012 — priority required, must be one of the 3 values
    if "priority" in data or not partial:
        priority = data.get("priority")
        if not priority:
            errors.append("La priorité est obligatoire. (FR-012)")
        elif priority not in VALID_PRIORITIES:
            errors.append(f"Priorité invalide. Valeurs autorisées : {', '.join(sorted(VALID_PRIORITIES))}. (FR-011)")

    # FR-013 / FR-014 / FR-015 — due date optional, not in the past, date-only
    if "due_date" in data:
        due_date = data.get("due_date")
        if due_date:  # FR-013: absence is valid, only validate if provided
            try:
                parsed = datetime.strptime(due_date, "%Y-%m-%d").date()
            except (ValueError, TypeError):
                errors.append("La date d'échéance doit être au format AAAA-MM-JJ, sans heure. (FR-015)")
            else:
                # FR-014: reference "today" = server date (UTC), documented decision above
                if parsed < date.today():
                    errors.append("La date d'échéance ne peut pas être antérieure à aujourd'hui. (FR-014)")

    return errors


def task_to_dict(row):
    return {
        "id": row["id"],
        "title": row["title"],
        "description": row["description"],
        "priority": row["priority"],
        "status": row["status"],
        "due_date": row["due_date"],
        "created_at": row["created_at"],
        "updated_at": row["updated_at"],
    }


# ---------------------------------------------------------------------------
# Task routes — FR-001/FR-002 ownership enforced via require_user + user_id scoping
# ---------------------------------------------------------------------------
@app.route("/api/tasks", methods=["GET"])
@require_user
def list_tasks():
    """
    Supports, individually or in any combination (resolves the FR-021/FR-022
    'individual filter behavior' gap as a development decision):
      - search:   FR-019 (title + description), FR-020 (case-insensitive)
      - status:   filter by status alone
      - priority: filter by priority alone
      - status + priority together: FR-021
      - search + status/priority: FR-022
    """
    search = request.args.get("search", "").strip()
    status = request.args.get("status", "").strip()
    priority = request.args.get("priority", "").strip()

    query = "SELECT * FROM tasks WHERE user_id = ?"
    params = [g.user_id]

    if search:
        # FR-019 + FR-020: search on title OR description, case-insensitive
        query += " AND (LOWER(title) LIKE ? OR LOWER(description) LIKE ?)"
        like = f"%{search.lower()}%"
        params.extend([like, like])

    if status:
        if status not in VALID_STATUSES:
            return jsonify({"error": f"Statut de filtre invalide. Valeurs autorisées : {', '.join(sorted(VALID_STATUSES))}."}), 400
        query += " AND status = ?"
        params.append(status)

    if priority:
        if priority not in VALID_PRIORITIES:
            return jsonify({"error": f"Priorité de filtre invalide. Valeurs autorisées : {', '.join(sorted(VALID_PRIORITIES))}."}), 400
        query += " AND priority = ?"
        params.append(priority)

    query += " ORDER BY created_at DESC"

    conn = database.get_connection()
    rows = conn.execute(query, params).fetchall()
    conn.close()
    return jsonify([task_to_dict(r) for r in rows]), 200


@app.route("/api/tasks", methods=["POST"])
@require_user
def create_task():
    data = request.get_json(silent=True) or {}
    errors = validate_task_payload(data, partial=False)
    if errors:
        return jsonify({"errors": errors}), 400

    conn = database.get_connection()
    cur = conn.execute(
        """INSERT INTO tasks (user_id, title, description, priority, status, due_date)
           VALUES (?, ?, ?, ?, ?, ?)""",
        (
            g.user_id,
            str(data["title"]).strip(),
            (data.get("description") or "").strip() or None,
            data["priority"],
            "À faire",  # FR-004: default status is always "À faire" at creation
            data.get("due_date") or None,
        ),
    )
    conn.commit()
    new_id = cur.lastrowid
    row = conn.execute("SELECT * FROM tasks WHERE id = ?", (new_id,)).fetchone()
    conn.close()
    return jsonify(task_to_dict(row)), 201


def _get_owned_task(conn, task_id, user_id):
    """FR-001/FR-002: a task is only ever returned if it belongs to the
    requesting user. Returns None otherwise (caller returns 404, not 403,
    to avoid revealing whether the task exists for another user)."""
    return conn.execute(
        "SELECT * FROM tasks WHERE id = ? AND user_id = ?", (task_id, user_id)
    ).fetchone()


@app.route("/api/tasks/<int:task_id>", methods=["GET"])
@require_user
def get_task(task_id):
    conn = database.get_connection()
    row = _get_owned_task(conn, task_id, g.user_id)
    conn.close()
    if not row:
        return jsonify({"error": "Tâche introuvable."}), 404
    return jsonify(task_to_dict(row)), 200


@app.route("/api/tasks/<int:task_id>/status", methods=["PATCH"])
@require_user
def update_status(task_id):
    """FR-003 / FR-005: only the two defined transitions are allowed.
    Any other target status is rejected."""
    data = request.get_json(silent=True) or {}
    new_status = data.get("status")

    conn = database.get_connection()
    row = _get_owned_task(conn, task_id, g.user_id)
    if not row:
        conn.close()
        return jsonify({"error": "Tâche introuvable."}), 404

    if new_status not in VALID_STATUSES:
        conn.close()
        return jsonify({"error": f"Statut invalide. Valeurs autorisées : {', '.join(sorted(VALID_STATUSES))}. (FR-003)"}), 400

    current_status = row["status"]
    if new_status != current_status and (current_status, new_status) not in ALLOWED_TRANSITIONS:
        conn.close()
        return jsonify({"error": "Transition de statut non autorisée. (FR-005)"}), 400

    conn.execute(
        "UPDATE tasks SET status = ?, updated_at = datetime('now') WHERE id = ?",
        (new_status, task_id),
    )
    conn.commit()
    row = conn.execute("SELECT * FROM tasks WHERE id = ?", (task_id,)).fetchone()
    conn.close()
    return jsonify(task_to_dict(row)), 200


@app.route("/api/tasks/<int:task_id>", methods=["DELETE"])
@require_user
def delete_task(task_id):
    """FR-016: permanent deletion. FR-018: no restore mechanism exists —
    there is deliberately no soft-delete / trash table in this schema.
    FR-017 (confirmation before deletion) is a UX concern, enforced by
    the frontend confirmation dialog before this endpoint is ever called."""
    conn = database.get_connection()
    row = _get_owned_task(conn, task_id, g.user_id)
    if not row:
        conn.close()
        return jsonify({"error": "Tâche introuvable."}), 404

    conn.execute("DELETE FROM tasks WHERE id = ?", (task_id,))
    conn.commit()
    conn.close()
    return "", 204


@app.route("/api/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200


if __name__ == "__main__":
    database.init_db()
    app.run(host="0.0.0.0", port=5001, debug=False)
