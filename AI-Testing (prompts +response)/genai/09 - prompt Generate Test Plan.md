# Prompt — Génération du Test Plan

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

En utilisant **UNIQUEMENT** les documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`

génère un **Test Plan professionnel et cohérent avec la Test Strategy**.

## Rules

1. N'invente aucune information. Si une information nécessaire n'est pas définie, indique clairement **To Be Confirmed (TBC)**.
2. Respecte le statut des exigences et User Stories, notamment :
   - `FR-008 / Q8` → OPEN / BLOCKED
   - `US-003` → BLOCKED
   - `US-009` et `US-010` → READY WITH OBSERVATION
3. **N'invente aucune règle concernant Q8 / FR-008.**
4. Ne définis pas silencieusement le comportement individuel des filtres de statut et de priorité.
5. Identifie explicitement les dépendances, gaps et informations manquantes qui peuvent empêcher l'exécution des tests.
6. Maintiens la traçabilité :
   **FR → US → AC → Test Plan**
7. Le Test Plan doit être cohérent avec la `Test Strategy` et ne doit pas introduire de nouvelle stratégie non validée.
8. Distingue clairement :
   - informations confirmées ;
   - hypothèses ;
   - informations manquantes / TBC.
9. Le LLM est un **assistant QA**, pas la source de vérité. Une validation humaine par le QA est obligatoire.
10. Ne génère pas encore les Test Cases détaillés. Le Test Plan doit définir **quoi, quand, où, par qui et dans quelles conditions tester**, pas les cas de test détaillés.

## Sections à générer

1. **Objectif du Test Plan**
2. **Références**
3. **Périmètre des tests**
   - In Scope
   - Out of Scope
4. **Items à tester**
5. **Approche de test**
   - cohérente avec la Test Strategy
   - niveaux de test
   - types de tests
6. **Fonctionnalités à couvrir**
   - mapping FR → US
   - priorité/risque lorsque défini
7. **Environnement de test**
   - éléments confirmés
   - éléments TBC
8. **Données de test**
9. **Rôles et responsabilités**
10. **Planning et activités de test**
11. **Critères d'entrée**
12. **Critères de suspension / reprise**
13. **Critères de sortie**
14. **Gestion des anomalies**
15. **Stratégie de régression**
16. **Automatisation**
17. **Risques, hypothèses et dépendances**
18. **Gaps / Questions ouvertes**
19. **Traçabilité**
20. **AI Self-Review**

## AI Self-Review

Avant de finaliser le Test Plan, vérifie explicitement :

- hallucinations ;
- informations inventées ;
- hypothèses non justifiées ;
- exigences oubliées ;
- mauvaise interprétation des exigences ;
- propagation des ambiguïtés ;
- erreurs de traçabilité ;
- règles inventées pour `Q8 / FR-008` ;
- comportement inventé des filtres individuels ;
- incohérences avec la Test Strategy ;
- couverture des User Stories `READY`, `READY WITH OBSERVATION` et `BLOCKED`.

Pour chaque problème détecté, indique :
**Issue → Impact → Action recommandée.**

## Output

Génère le document au format **Markdown** avec :

**Title:** SmartTodo — Test Plan  
**Version:** 1.0  
**Status:** Draft — To Be Validated  
**Based on:** Requirements Baseline V1.0 + User Stories Baseline V1.0 + Test Strategy V1.0

**Important:** Ne baseline pas le Test Plan. Il doit d'abord être soumis à une **QA Review humaine**.