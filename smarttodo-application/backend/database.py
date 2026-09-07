"""
SmartTodo — Database layer
Uses Python's built-in sqlite3 module. Zero external dependency.

Schema implements Requirements Baseline V1.0:
- users: minimal identity for FR-001/FR-002 (ownership & isolation)
- tasks: FR-003 to FR-022 (except FR-008, which is OPEN/BLOCKED — see app.py)
"""
import sqlite3
import os

DB_PATH = os.path.join(os.path.dirname(__file__), "smarttodo.db")

SCHEMA = """
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE
);

CREATE TABLE IF NOT EXISTS tasks (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTEGER NOT NULL,
    title TEXT NOT NULL,
    description TEXT,
    priority TEXT NOT NULL CHECK (priority IN ('Basse', 'Moyenne', 'Haute')),
    status TEXT NOT NULL DEFAULT 'À faire' CHECK (status IN ('À faire', 'Terminée')),
    due_date TEXT,  -- ISO date string YYYY-MM-DD, no time component (FR-015)
    created_at TEXT NOT NULL DEFAULT (datetime('now')),
    updated_at TEXT NOT NULL DEFAULT (datetime('now')),
    FOREIGN KEY (user_id) REFERENCES users(id)
);
"""


def get_connection():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    return conn


def init_db():
    conn = get_connection()
    conn.executescript(SCHEMA)
    conn.commit()
    conn.close()


if __name__ == "__main__":
    init_db()
    print(f"Database initialized at {DB_PATH}")
