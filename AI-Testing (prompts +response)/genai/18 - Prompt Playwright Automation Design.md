# Prompt — Playwright Automation Design

À partir des documents suivants :

- Requirements-Baseline-V1.0.md
- User-Stories-Baseline-V1.0.md
- test-strategy.md
- test-plan.md
- test-design.md
- test-cases.md
- test-data.md
- test-execution simulation.md
- defect-management simulation.md
- retest-regression-testing.md
- automation-cicd-strategy.md

Génère le document :

**`playwright-automation-design.md`**

## Objectif

Définir la conception de l'automatisation avec **Playwright** avant l'implémentation des scripts.

Playwright est le framework choisi pour ce projet comme décision de conception du projet. Ne pas prétendre que ce choix provient des Requirements ou de l'Automation Strategy si ces documents indiquent encore le framework comme TBC.

## Règles importantes

1. Utiliser uniquement les exigences, User Stories, Acceptance Criteria, Test Cases, Test Data et décisions présentes dans les documents sources.
2. Ne pas inventer :
   - pages UI ;
   - composants ;
   - sélecteurs ;
   - URLs ;
   - API ;
   - architecture ;
   - mécanisme d'authentification ;
   - données techniques ;
   - comportement non défini.
3. Lorsque l'information n'est pas disponible, utiliser **TBC** ou **TBD**.
4. Respecter les éléments bloqués :
   - FR-008 / Q8 ;
   - US-003.
5. Ne pas automatiser TC-032 et TC-033 tant que le comportement individuel des filtres n'est pas défini.
6. Ne pas transformer les observations TBC en exigences.
7. L'automatisation doit rester traçable :
   **FR → US → AC → Test Case → Playwright Test → Execution → Result → Defect**
8. L'automatisation ne remplace pas la validation humaine.
9. Ne pas générer de code Playwright dans ce document.

## Structure attendue

### 1. Document Information
- Version
- Status : Draft — To Be Validated
- AI Assistance
- Human QA Validation Required
- Framework selected: Playwright

### 2. Objective
Expliquer le rôle du Playwright Automation Design dans le cycle QA.

### 3. Automation Scope
Identifier :
- les fonctionnalités automatisables ;
- les fonctionnalités restant manuelles ;
- les fonctionnalités bloquées ;
- les Test Cases candidats à l'automatisation.

### 4. Automation Principles
Définir les principes :
- tests déterministes ;
- répétabilité ;
- maintenabilité ;
- isolation des tests ;
- assertions explicites ;
- absence de dépendance inutile entre tests ;
- gestion contrôlée des données ;
- diagnostic des échecs.

### 5. Test Organization
Proposer une organisation logique des tests Playwright par domaine fonctionnel / User Story.

Ne pas inventer de structure applicative réelle.

### 6. Test Case → Playwright Mapping
Créer une matrice permettant de mapper :

| Test Case | US | AC | Automation Candidate | Playwright Test | Status |
|---|---|---|---|---|---|

Les noms des futurs tests peuvent être proposés comme conventions, mais ne doivent pas être présentés comme des tests déjà implémentés.

### 7. Test Data Strategy
Décrire comment les données de `test-data.md` seront utilisées avec Playwright.

Respecter :
- données positives ;
- données négatives ;
- boundary values ;
- transitions de statut ;
- recherche ;
- combinaisons définies.

Ne pas inventer les données manquantes.

### 8. Authentication & Test Isolation
Décrire les principes d'isolation et d'authentification.

Si le mécanisme réel n'est pas défini : **TBC**.

### 9. Locators Strategy
Définir une stratégie générale de sélection des éléments Playwright.

Ne pas inventer de sélecteurs ou d'attributs qui n'existent pas encore.

### 10. Assertions Strategy
Définir les principes d'assertion à appliquer à partir des Acceptance Criteria.

Les assertions doivent vérifier le comportement attendu et non simplement la présence d'un élément UI.

### 11. Fixtures & Reusable Components
Identifier les besoins potentiels en :
- fixtures ;
- setup/teardown ;
- helpers ;
- fonctions réutilisables.

Tout élément dépendant de l'application réelle doit être marqué TBC/TBD.

### 12. Page Object Model / Test Architecture
Évaluer l'utilisation éventuelle du Page Object Model ou d'une architecture équivalente.

Ne pas créer de Pages ou de composants fictifs.

### 13. Error Handling & Diagnostics
Définir les principes concernant :
- screenshots ;
- traces ;
- logs ;
- vidéos si pertinentes ;
- informations nécessaires au diagnostic.

Ne pas prétendre que ces éléments sont déjà configurés.

### 14. Test Execution
Définir :
- exécution locale ;
- exécution ciblée ;
- exécution de regression ;
- catégorisation éventuelle des tests.

Les commandes et configurations concrètes sont TBC si non définies.

### 15. Regression Automation
Expliquer comment les tests Playwright candidats contribueront à la regression testing, conformément à `automation-cicd-strategy.md`.

### 16. CI/CD Readiness
Décrire les prérequis pour intégrer les tests Playwright dans un pipeline CI/CD.

La plateforme CI/CD reste TBC si elle n'est pas définie.

### 17. Traceability
Créer la chaîne :

**FR → US → AC → TC → Playwright Test → CI/CD Execution → Result → Defect**

Identifier les éléments encore TBC.

### 18. AI-Assisted Automation
Décrire comment l'IA peut être utilisée pour :
- proposer du code Playwright ;
- expliquer une erreur ;
- analyser un échec ;
- proposer une amélioration ;
- aider à maintenir les tests.

Préciser systématiquement que le code et les conclusions générés par l'IA doivent être revus et validés par le QA.

### 19. Limitations / TBC
Lister explicitement les éléments encore inconnus :
- application réelle ;
- UI ;
- pages ;
- locators ;
- architecture ;
- API ;
- authentication ;
- environment ;
- test accounts ;
- CI/CD platform ;
- etc.

### 20. AI Self-Review
Vérifier :
- aucune exigence inventée ;
- aucun comportement non défini transformé en règle ;
- Q8 correctement bloqué ;
- US-003 non automatisée ;
- TC-032/033 exclus ;
- traçabilité conservée ;
- TBC correctement identifiés ;
- Playwright présenté comme choix de projet et non comme fait provenant des exigences.

### 21. Document Status
Terminer par :

**Status: Draft — To Be Validated**

avec rappel que la conception doit être validée par un QA humain avant implémentation.

## Important

Le document doit être un **Automation Design**, pas un tutoriel Playwright.

Ne pas expliquer longuement comment fonctionne Playwright.

Le but est de répondre à :

> **"Comment allons-nous concevoir et organiser l'automatisation de SmartTodo avec Playwright à partir de nos Test Cases validés ?"**