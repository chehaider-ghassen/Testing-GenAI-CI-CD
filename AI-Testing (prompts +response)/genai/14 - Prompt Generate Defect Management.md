# Prompt — Générer le Defect Management

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-plan.md`
- `test-design.md`
- `test-cases.md`
- `test-data.md`
- `test-execution.md`

génère un document professionnel **Defect Management** en Markdown.

## Règles

1. Utilise uniquement les informations présentes dans les documents.
2. **N'invente aucun défaut, Bug ID, résultat d'exécution ou comportement attendu.**
3. Si aucun défaut réel n'est disponible, indique **No defect recorded / TBC**.
4. Un défaut doit être basé sur un **FAIL réellement observé** pendant le Test Execution.
5. Respecte `FR-008 / Q8` → OPEN / BLOCKED et `US-003` → BLOCKED.
6. Ne crée aucune règle concernant les caractères autorisés du titre.
7. Ne définis pas de comportement individuel des filtres statut/priorité.
8. Maintiens la traçabilité :
   **Defect → Test Case → AC → US → FR**
9. Distingue clairement :
   - Defect réel ;
   - Test bloqué ;
   - Requirement gap ;
   - Ambiguïté / clarification nécessaire.
10. Le LLM est un assistant QA : **validation humaine obligatoire**.

## Contenu attendu

### 1. Objectif
Décrire le rôle du Defect Management dans le cycle de test.

### 2. Defect Lifecycle
Présenter le cycle de vie applicable, sans inventer de workflow spécifique si celui-ci n'est pas défini.

Exemple :
**Open → Assigned → In Progress → Fixed → Retest → Closed**

Si le workflow réel n'est pas défini : **TBC**.

### 3. Defect Log

| Defect ID | Test Case | Requirement | User Story | Summary | Severity | Priority | Status | Evidence | Date |
|---|---|---|---|---|---|---|---|---|---|

Ne renseigner que les défauts réellement identifiés.

### 4. Defect Description

Pour chaque défaut réel :

- Summary
- Preconditions
- Test Data
- Steps to Reproduce
- Expected Result
- Actual Result
- Severity
- Priority
- Environment
- Evidence
- Traceability
- Status

Si une information n'est pas disponible : **TBC**.

### 5. Defect Classification

Classer les problèmes identifiés, lorsque justifié, comme :

- Functional defect
- Requirement gap
- Ambiguity
- Test blocked
- Data issue
- Environment issue

Ne pas inventer de classification si les informations disponibles ne permettent pas de conclure.

### 6. Retest & Regression

Décrire comment les défauts corrigés seront :

**Fixed → Retest → PASS/FAIL → Closed/Reopened**

et leur impact éventuel sur la régression.

### 7. Traceability

**FR → US → AC → Test Case → Execution → Defect → Retest**

### 8. AI Self-Review

Vérifier :

- bugs inventés ;
- Bug IDs inventés ;
- résultats inventés ;
- mauvaise classification ;
- confusion entre gap et defect ;
- erreurs de sévérité/priorité ;
- erreurs de traçabilité ;
- Q8 / FR-008 ;
- filtres ;
- incohérences avec Test Execution.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Defect Management

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas le Defect Management avant la QA Review humaine.