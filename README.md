# SmartTodo

SmartTodo est une application de gestion de tâches (to-do list) permettant à un utilisateur authentifié de créer, consulter, modifier et supprimer ses propres tâches, avec gestion du statut, de la priorité, d'une date d'échéance, ainsi que la recherche et le filtrage.

## Fonctionnalités

D'après les exigences fonctionnelles baselinées du projet :

- **Gestion des tâches** — création, consultation, modification, suppression.
- **Propriété et confidentialité** — chaque tâche appartient exclusivement à l'utilisateur qui l'a créée ; aucun autre utilisateur ne peut y accéder.
- **Titre** — obligatoire, entre 1 et 100 caractères.
- **Description** — facultative, jusqu'à 500 caractères.
- **Priorité** — obligatoire, une valeur parmi : Basse, Moyenne, Haute.
- **Statut** — À faire (par défaut) ou Terminée, avec transition réversible entre les deux.
- **Date d'échéance** — facultative, ne peut pas être antérieure à la date du jour, sans composante horaire.
- **Suppression** — définitive, avec demande de confirmation préalable et sans possibilité de restauration.
- **Recherche** — sur le titre et la description, insensible à la casse.
- **Filtres** — par statut et par priorité, combinables entre eux et avec la recherche.



## Architecture technique

| Composant | Détail |
|---|---|
| Backend | Python / Flask (`smarttodo-application/backend/app.py`), expose un endpoint de santé `GET /api/health`, écoute sur le port `5001` |
| Frontend | Fichiers statiques servis via `python -m http.server` (`smarttodo-application/frontend/`), sur le port `8080` |
| Tests end-to-end | Playwright (`Playwright-scripts/`) |
| CI/CD | GitHub Actions (`.github/workflows/playwright.yml`) — exécution des tests Playwright à chaque push et pull request sur `main` |

## Structure du projet

```
.
├── smarttodo-application/
│   ├── backend/
│   │   └── app.py          # API Flask (backend)
│   └── frontend/           # Fichiers statiques (frontend)
├── Playwright-scripts/
│   ├── package.json
│   └── tests/               # Scénarios de test end-to-end Playwright
└── .github/
    └── workflows/
        └── playwright.yml   # Pipeline CI (tests Playwright)
```

## Prérequis

- [Node.js 20](https://nodejs.org/) (pour Playwright)
- [Python 3](https://www.python.org/) (pour le backend Flask)

## Installation et lancement en local

### 1. Backend

```bash
cd smarttodo-application
python -m pip install --upgrade pip
pip install flask flask-cors
python backend/app.py
```

Le backend démarre sur `http://127.0.0.1:5001` (vérifiable via `GET /api/health`).

### 2. Frontend

Dans un second terminal :

```bash
cd smarttodo-application
python -m http.server 8080 --directory frontend
```

Le frontend est alors accessible sur `http://127.0.0.1:8080`.

### 3. Tests end-to-end (Playwright)

Backend et frontend démarrés, dans un troisième terminal :

```bash
cd Playwright-scripts
npm ci
npx playwright install --with-deps
npx playwright test
```

## Intégration continue

Le workflow GitHub Actions (`playwright.yml`) est déclenché à chaque `push` ou `pull request` vers `main`. Il :

1. installe les dépendances Node.js et Python ;
2. démarre le backend et le frontend en arrière-plan ;
3. vérifie leur disponibilité via `curl` ;
4. exécute la suite de tests Playwright ;
5. publie le rapport Playwright et les résultats de test en tant qu'artefacts (conservés 7 jours).

## Documentation QA

Le projet dispose d'une chaîne complète de documentation QA, produite et maintenue de manière traçable :

- Requirements Baseline
- User Stories Baseline
- Test Strategy
- Test Plan
- Test Design
- Test Cases
- Test Data
- Test Execution
- Defect Management
- Test Execution Report / Test Summary Report
- Retest & Regression Testing

Chaque exigence fonctionnelle est tracée de bout en bout : **Business Decision → Requirement → User Story → Acceptance Criteria → Test Case → Test Execution → Defect**. Certains documents restent à l'état **Draft — To Be Validated** en attendant une revue QA humaine ; se référer à chaque document pour son statut exact avant toute utilisation.
