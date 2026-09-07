# Prompt — Générer les Test Cases

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`
- `test-plan.md`
- `test-design.md`

génère les **Test Cases fonctionnels détaillés** en Markdown.

## Règles

1. Utilise uniquement les informations présentes dans les documents.
2. N'invente aucune règle métier, comportement UI/API, message d'erreur ou donnée technique.
3. Si une information nécessaire est absente, indique **TBC**.
4. Ne génère aucun Test Case pour `FR-008 / Q8` car il est **OPEN / BLOCKED**.
5. Ne définis pas le comportement individuel des filtres statut/priorité.
6. Respecte les statuts :
   - US-003 → BLOCKED
   - US-009 → READY WITH OBSERVATION
   - US-010 → READY WITH OBSERVATION
7. Chaque Test Case doit être traçable jusqu'à :
   **FR → US → AC → Test Condition / Scenario → Test Case**
8. Utilise les techniques de conception identifiées dans `test-design.md`.
9. Privilégie une couverture équilibrée :
   - tests positifs ;
   - tests négatifs ;
   - valeurs limites ;
   - transitions d'état ;
   - combinaisons lorsque définies.
10. Le LLM est un assistant QA. Une validation humaine est obligatoire.

## Format des Test Cases

Pour chaque Test Case, utiliser :

### TC-XXX — Titre

| Champ | Valeur |
|---|---|
| Test Case ID | TC-XXX |
| Requirement | FR-XXX |
| User Story | US-XXX |
| Acceptance Criteria | AC-XX |
| Test Condition | TCND-XXX |
| Test Scenario | TS-XXX |
| Technique | ... |
| Type | Positive / Negative / Boundary / ... |
| Priority | High / Medium / Low / TBC |
| Preconditions | ... |
| Test Data | ... |
| Steps | ... |
| Expected Result | ... |

Ne mets pas plusieurs scénarios différents dans un même Test Case.

## Organisation

Organise les Test Cases par User Story :

- US-001
- US-002
- US-003 → BLOCKED, aucun TC
- US-004
- US-005
- US-006
- US-007
- US-008
- US-009
- US-010

À la fin, ajoute :

### Traceability Matrix

**FR → US → AC → Test Case**

Identifie les exigences :

- entièrement couvertes ;
- partiellement couvertes ;
- bloquées ;
- nécessitant une clarification.

### AI Self-Review

Vérifie :

- hallucinations ;
- règles inventées ;
- exigences oubliées ;
- mauvaise interprétation ;
- tests manquants ;
- duplication inutile ;
- erreurs de traçabilité ;
- règles inventées pour Q8 ;
- comportement inventé des filtres.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Test Cases

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas les Test Cases avant la QA Review humaine.