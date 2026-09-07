# Prompt — Générer le Test Execution

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`
- `test-plan.md`
- `test-design.md`
- `test-cases.md`
- `test-data.md`

génère un document professionnel **Test Execution** en Markdown.

## Règles

1. Utilise uniquement les informations présentes dans les documents.
2. N'invente aucun résultat d'exécution.
3. Les résultats réels doivent être indiqués **TBC / NOT RUN** si aucune exécution réelle n'a encore été effectuée.
4. Respecte les statuts :
   - `US-003` → BLOCKED
   - `US-009` et `US-010` → READY WITH OBSERVATION
5. Aucun Test Case ne doit être créé pour `FR-008 / Q8`.
6. Ne crée aucune règle concernant les caractères autorisés du titre.
7. Ne définis pas de comportement individuel des filtres statut/priorité.
8. Chaque résultat doit être traçable :
   **Test Case → Test Data → Expected Result → Actual Result → Status → Defect**
9. Utilise les statuts :
   **PASS / FAIL / BLOCKED / NOT RUN / N/A**.
10. Le LLM est un assistant QA : **validation humaine obligatoire**.

## Contenu attendu

### 1. Objectif
Décrire l'objectif et le rôle du Test Execution.

### 2. Environnement d'exécution
Présenter les informations disponibles et indiquer **TBC** pour les éléments non définis.

### 3. Execution Summary
Présenter :
- Total Test Cases
- PASS
- FAIL
- BLOCKED
- NOT RUN
- N/A

Ne calculer aucun résultat si les tests n'ont pas réellement été exécutés.

### 4. Test Execution Results

| TC ID | Test Data | Expected Result | Actual Result | Status | Defect ID | Execution Date |
|---|---|---|---|---|---|---|

Si aucune exécution réelle n'est disponible, utiliser **NOT RUN / TBC**.

### 5. Blocked Tests
Lister les tests bloqués et leur raison.

### 6. Defects
Lister uniquement les défauts réellement observés pendant l'exécution.
Ne jamais inventer de Bug ID.

### 7. Traceability

**FR → US → AC → Test Case → Test Data → Execution Result → Defect**

### 8. AI Self-Review

Vérifier :
- résultats inventés ;
- données inventées ;
- Test Cases oubliés ;
- erreurs de traçabilité ;
- mauvaise interprétation ;
- Q8 / FR-008 ;
- filtres ;
- incohérences avec Test Plan, Test Design et Test Cases.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Test Execution

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas le Test Execution avant la QA Review humaine.