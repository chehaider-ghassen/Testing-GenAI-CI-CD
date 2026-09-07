# Prompt — Générer le Retest & Regression Testing

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`
- `test-plan.md`
- `test-cases.md`
- `test-data.md`
- `test-execution simulation.md`
- `defect-management simulation.md`
- `test-summary-report.md`

génère un document professionnel **Retest & Regression Testing** en Markdown.

## Règles

1. Utilise uniquement les informations présentes dans les documents.
2. N'invente aucun correctif, résultat de Retest, Defect ID ou résultat de Regression.
3. Si un défaut n'est pas indiqué comme corrigé, son Retest doit être **TBC / NOT RUN**.
4. Le Retest doit être réalisé uniquement sur les Test Cases liés aux défauts corrigés.
5. La Regression doit couvrir les fonctionnalités potentiellement impactées par les corrections, en cohérence avec le Test Strategy et le Test Plan.
6. Ne crée aucune règle métier ou comportement non défini.
7. Respecte :
   - `FR-008 / Q8` → OPEN / BLOCKED
   - `US-003` → BLOCKED
   - `US-009` et `US-010` → READY WITH OBSERVATION
8. Ne définis pas de comportement individuel des filtres statut/priorité.
9. Maintiens la traçabilité :
   **Defect → Test Case → Retest → Regression Test → Result**
10. Le LLM est un assistant QA : **validation humaine obligatoire**.

## Contenu attendu

### 1. Objectif

Expliquer la différence entre **Retest** et **Regression Testing**.

### 2. Retest Scope

Identifier les défauts nécessitant un Retest à partir de `defect-management simulation.md`.

| Defect ID | Original TC | Requirement | Expected Fix | Retest TC | Status |
|---|---|---|---|---|---|

Si aucun défaut corrigé n'est disponible : **No Retest available / TBC**.

### 3. Retest Results

| Retest ID | Defect ID | Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|

Utiliser uniquement :
**PASS / FAIL / BLOCKED / NOT RUN / TBC**.

### 4. Regression Scope

Identifier les Test Cases de régression en fonction :
- des fonctionnalités corrigées ;
- des fonctionnalités potentiellement impactées ;
- des risques identifiés dans Test Strategy / Test Plan.

Ne pas ajouter de tests non justifiés par les documents.

### 5. Regression Results

| Regression TC | Feature | Requirement | Expected Result | Actual Result | Status |
|---|---|---|---|---|---|

Si aucune régression n'a été réellement exécutée : **NOT RUN / TBC**.

### 6. Impact Analysis

Présenter :

**Defect → Correction → Fonctionnalité impactée → Regression Tests**

### 7. Conclusion

Indiquer séparément :
- Retest Status ;
- Regression Status ;
- Remaining Defects ;
- Remaining Risks ;
- QA Recommendation.

Ne pas déclarer **PASS**, **Closed**, **Regression Passed** ou **Go** sans preuve.

### 8. Traceability

**FR → US → AC → Test Case → Defect → Retest → Regression → Result**

### 9. AI Self-Review

Vérifier :

- défauts inventés ;
- corrections inventées ;
- résultats inventés ;
- tests de régression injustifiés ;
- tests oubliés ;
- erreurs de traçabilité ;
- confusion Retest / Regression ;
- Q8 / FR-008 ;
- filtres ;
- incohérences avec Test Execution et Defect Management.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Retest & Regression Testing

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas le document avant la QA Review humaine.