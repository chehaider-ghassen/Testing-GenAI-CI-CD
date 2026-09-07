# SmartTodo — Application

Implémentation réelle des 21 exigences fonctionnelles baselinées de SmartTodo (FR-001 à FR-007, FR-009 à FR-022). C'est la première fois que tout le travail QA produit précédemment (Requirements Baseline, User Stories, Test Cases…) peut s'appuyer sur une application qui existe réellement.

## Stack technique

- **Backend :** Python + Flask + SQLite — aucune dépendance externe à installer, tout est déjà inclus avec Python.
- **Frontend :** HTML / CSS / JavaScript vanilla — pas de framework, pas d'étape de build. Volontairement simple pour bien voir ce qui se passe sous le capot avant d'introduire un framework (React, etc.) plus tard si tu veux.

## Lancer le projet

**1, installer Flask sur la machine
python -m pip install flask

**2. Démarrer le backend** (terminal 1) :
```bash
cd backend
python3 app.py
```
Le serveur démarre sur `http://localhost:5001`. La base de données SQLite (`smarttodo.db`) est créée automatiquement au premier lancement.

**3. Servir le frontend** (terminal 2, à la racine du dossier `frontend/`) :
```bash
cd frontend
python3 -m http.server 8080
```
Puis ouvre `http://localhost:8080` dans ton navigateur.

Aucune installation supplémentaire n'est nécessaire (`pip install` / `npm install`).

## Ce qui est implémenté

| Exigence | Comportement |
|---|---|
| FR-001, FR-002 | Chaque tâche appartient exclusivement à son créateur ; impossible de voir/modifier/supprimer une tâche d'un autre utilisateur |
| FR-003 à FR-005 | Statuts "À faire"/"Terminée", statut par défaut à la création, transitions réversibles uniquement entre ces deux valeurs |
| FR-006, FR-007 | Titre obligatoire, entre 1 et 100 caractères |
| FR-009, FR-010 | Description facultative, 500 caractères max |
| FR-011, FR-012 | Priorité obligatoire parmi Basse/Moyenne/Haute |
| FR-013 à FR-015 | Date d'échéance facultative, ne peut pas être dans le passé, sans heure |
| FR-016 à FR-018 | Suppression définitive avec confirmation, aucune restauration possible |
| FR-019, FR-020 | Recherche sur titre + description, insensible à la casse |
| FR-021, FR-022 | Filtres statut/priorité et recherche combinables librement |

**FR-008** (caractères autorisés dans le titre) reste volontairement **non implémentée** : la décision métier Q8 n'a jamais été validée dans le processus QA qui a précédé ce développement. Le titre n'est donc contraint que par sa longueur (FR-007), sans aucune règle de caractères.

## Décisions prises en tant que développeur

Deux points étaient explicitement laissés ouverts ("TBC") dans toute la documentation QA produite précédemment (Test Strategy, Test Plan, Test Design…). En tant que développeur, il fallait bien trancher pour que l'application fonctionne — voici les choix faits, à ajuster si tu n'es pas d'accord :

- **Comportement individuel des filtres (FR-021/FR-022) :** le filtre par statut seul et le filtre par priorité seuls fonctionnent maintenant indépendamment, en plus de leur combinaison. C'est le comportement le plus naturel, mais ce n'était écrit nulle part avant ce développement.
- **Fuseau horaire pour "la date du jour" (FR-014) :** la date de référence utilisée est celle du serveur (UTC). Si l'application est un jour déployée pour des utilisateurs dans des fuseaux horaires différents, ce point mériterait d'être reprécisé.
- **Authentification :** volontairement réduite à un simple nom d'utilisateur, sans mot de passe, uniquement pour permettre de démontrer l'isolation des données (FR-001/FR-002) sans construire un système d'authentification complet. **Ce n'est pas un mécanisme sécurisé** — à ne jamais utiliser tel quel dans une vraie application.

## Prochaines étapes possibles

- Ajouter un vrai système d'authentification (mots de passe, sessions).
- Introduire un framework frontend (React) une fois les fondamentaux vanilla JS bien compris.
- Écrire les tests automatisés Playwright déjà conçus dans `playwright-automation-design.md`, maintenant que l'application existe réellement pour les exécuter.
- Revalider Q8 avec le métier pour débloquer FR-008.
