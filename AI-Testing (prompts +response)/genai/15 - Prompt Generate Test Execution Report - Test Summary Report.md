# Prompt — Générer le Test Execution Report / Test Summary Report

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`
- `test-plan.md`
- `test-design.md`
- `test-cases.md`
- `test-data.md`
- `test-execution.md`
- `defect-management.md`

génère un document professionnel **Test Execution Report / Test Summary Report** en Markdown.

## Règles

1. Utilise uniquement les informations présentes dans les documents.
2. **N'invente aucun résultat, défaut, métrique ou conclusion.**
3. Si les tests n'ont pas été réellement exécutés, indique **TBC / NOT RUN**.
4. Les statistiques doivent être calculées uniquement à partir des résultats réellement disponibles.
5. Respecte :
   - `FR-008 / Q8` → OPEN / BLOCKED
   - `US-003` → BLOCKED
   - `US-009` et `US-010` → READY WITH OBSERVATION
6. Ne crée aucune règle concernant les caractères autorisés du titre.
7. Ne définis pas de comportement individuel des filtres statut/priorité.
8. Maintiens la traçabilité :
   **FR → US → AC → Test Case → Execution → Defect**
9. Distingue clairement :
   - résultats réels ;
   - tests non exécutés ;
   - tests bloqués ;
   - défauts réels ;
   - gaps / risques / TBC.
10. La conclusion QA doit être basée uniquement sur les données disponibles.
11. Le LLM est un assistant QA : **validation humaine obligatoire**.

## Contenu attendu

### 1. Executive Summary
Résumé de la campagne de test, de son objectif et de son état.

### 2. Scope
Présenter les fonctionnalités couvertes et les éléments exclus ou bloqués.

### 3. Test Execution Summary

| Metric | Result |
|---|---|
| Total Test Cases | ... |
| PASS | ... |
| FAIL | ... |
| BLOCKED | ... |
| NOT RUN | ... |
| N/A | ... |
| Execution Progress | ... |

Ne calculer les métriques que si les données réelles sont disponibles.

### 4. Test Results Analysis
Analyser :
- taux de réussite ;
- échecs ;
- tests bloqués ;
- tendances ou observations importantes.

Ne tirer aucune conclusion sans données suffisantes.

### 5. Defect Summary

| Severity | Number | Status |
|---|---:|---|
| Critical | ... | ... |
| High | ... | ... |
| Medium | ... | ... |
| Low | ... | ... |

Utiliser uniquement les défauts réellement enregistrés.

### 6. Requirements & Test Coverage
Présenter la couverture :

**FR → US → AC → Test Case → Result**

Identifier :
- exigences couvertes ;
- exigences partiellement couvertes ;
- exigences bloquées ;
- exigences nécessitant clarification.

### 7. Risks & Open Issues
Présenter les risques résiduels, gaps et informations TBC.

Inclure notamment :
- Q8 / FR-008 ;
- comportement individuel des filtres ;
- environnement si encore TBC ;
- tout autre gap réellement identifié.

### 8. Exit Criteria Assessment
Évaluer les critères de sortie définis dans `test-strategy.md` / `test-plan.md`.

Pour chaque critère :

**Criterion → Status → Evidence**

Ne pas déclarer un critère atteint sans preuve.

### 9. QA Conclusion
Fournir une conclusion basée uniquement sur les résultats disponibles.

Si les données sont insuffisantes :
**QA Conclusion: TBC — additional execution required.**

Ne pas inventer de décision Go / No-Go.

### 10. Recommendations
Proposer uniquement des actions justifiées par les résultats ou gaps identifiés.

### 11. Traceability

**FR → US → AC → Test Case → Test Data → Execution → Defect → Conclusion**

### 12. AI Self-Review

Vérifier :

- résultats inventés ;
- statistiques inventées ;
- défauts inventés ;
- conclusion non justifiée ;
- mauvaise interprétation ;
- exigences oubliées ;
- erreurs de traçabilité ;
- Q8 / FR-008 ;
- filtres ;
- incohérences avec Test Strategy et Test Plan.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Test Execution Report / Test Summary Report

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas le rapport avant la QA Review humaine.