# SmartTodo — Requirements Baseline V1.0

**Document ID:** RB-SMARTTODO-V1.0  
**Version:** 1.0  
**Status:** APPROVED WITH EXCLUSION  
**Baseline Date:** 2026-09-01  
**Artifact Type:** Requirements Baseline

## 1. Purpose

This document establishes the approved baseline of functional requirements for SmartTodo.

It is the reference for subsequent activities:
- User Stories
- Acceptance Criteria
- Test Strategy
- Test Plan
- Test Case Design
- Test Execution
- Defect Management
- Automation
- CI/CD

Any modification to a baselined requirement must follow change control and impact analysis.

## 2. Baseline Scope

**21 requirements are baselined.**

| Scope | Requirements |
|---|---|
| Included | FR-001 to FR-007 |
| Excluded | FR-008 |
| Included | FR-009 to FR-022 |

**Status:** 21 READY / BASELINED, 1 BLOCKED / EXCLUDED.

## 3. Exclusion — FR-008

**FR-008 — Caractères autorisés dans le titre**

**Status:** EXCLUDED / BLOCKED  
**Source:** Q8 — Caractères du titre

Q8 has not been validated by the business. Therefore, no normative requirement can safely be formulated for FR-008.

No test case, acceptance criterion, implementation rule, or technical assumption shall be derived from FR-008 until Q8 is validated.

FR-008 will be added through a future baseline version after Q8 is resolved.

# 4. Baselined Requirements

## FR-001 — Propriété exclusive d'une tâche

Une tâche créée par un utilisateur authentifié est associée exclusivement à l'identifiant unique de cet utilisateur.

**Source Decision:** Q1  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-002 — Accès aux tâches du propriétaire

Un utilisateur authentifié ne peut consulter, modifier ou supprimer que les tâches associées à son propre identifiant.

**Source Decision:** Q2  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-003 — Statuts disponibles

Une tâche peut avoir uniquement l'un des deux statuts suivants :
- À faire
- Terminée

**Source Decision:** Q3  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-004 — Statut par défaut

Lors de sa création, une tâche possède automatiquement le statut « À faire ».

**Source Decision:** Q4  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-005 — Réversibilité du statut

Une tâche au statut « Terminée » peut être modifiée pour repasser au statut « À faire ».

Les transitions autorisées sont :
- À faire → Terminée
- Terminée → À faire

Aucune autre transition de statut n'est autorisée.

**Source Decision:** Q5  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-006 — Titre obligatoire

Le titre d'une tâche est obligatoire.

**Source Decision:** Q6  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-007 — Longueur du titre

Le titre d'une tâche doit comporter entre **1 et 100 caractères inclus**.

**Source Decision:** Q7  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-009 — Description facultative

La description d'une tâche est facultative.

**Source Decision:** Q9  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-010 — Longueur maximale de la description

La description d'une tâche ne doit pas dépasser **500 caractères**.

**Source Decision:** Q10  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-011 — Valeurs de priorité

Une tâche peut avoir uniquement l'une des trois priorités suivantes :
- Basse
- Moyenne
- Haute

**Source Decision:** Q11  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-012 — Priorité obligatoire

La priorité d'une tâche est obligatoire.

**Source Decision:** Q12  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-013 — Date d'échéance facultative

La date d'échéance d'une tâche est facultative.

**Source Decision:** Q13  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-014 — Date d'échéance passée interdite

La date d'échéance d'une tâche ne peut pas être antérieure à la date du jour.

La date du jour est déterminée selon le fuseau horaire configuré pour l'application.

**Source Decision:** Q14  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-015 — Date d'échéance sans heure

La date d'échéance est enregistrée sans composante horaire.

**Source Decision:** Q15  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-016 — Suppression définitive

Lorsqu'une tâche est supprimée, elle est retirée définitivement.

**Source Decision:** Q16  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-017 — Confirmation avant suppression

Lorsqu'une suppression de tâche est demandée, une confirmation est affichée à l'utilisateur.

Si l'utilisateur confirme, la tâche est supprimée définitivement.

Si l'utilisateur annule, la tâche n'est pas supprimée.

**Source Decision:** Q17  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-018 — Absence de restauration

Une tâche supprimée définitivement ne peut pas être restaurée.

**Source Decision:** Q18  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-019 — Périmètre de recherche

La recherche de tâches porte sur :
- le titre ;
- la description.

**Source Decision:** Q19  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-020 — Recherche insensible à la casse

La recherche de tâches est insensible à la casse.

**Source Decision:** Q20  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-021 — Combinaison des filtres

Les filtres « statut » et « priorité » peuvent être appliqués simultanément.

**Source Decision:** Q21  
**Traceability:** FULL  
**Baseline Status:** BASELINED

## FR-022 — Combinaison recherche + filtres

La recherche peut être utilisée simultanément avec les filtres « statut » et « priorité ».

**Source Decision:** Q22  
**Traceability:** FULL  
**Baseline Status:** BASELINED

# 5. Traceability Summary

| Business Decision | Requirement | Status |
|---|---|---|
| Q1 | FR-001 | FULL |
| Q2 | FR-002 | FULL |
| Q3 | FR-003 | FULL |
| Q4 | FR-004 | FULL |
| Q5 | FR-005 | FULL |
| Q6 | FR-006 | FULL |
| Q7 | FR-007 | FULL |
| Q8 | FR-008 | OPEN / BLOCKED |
| Q9 | FR-009 | FULL |
| Q10 | FR-010 | FULL |
| Q11 | FR-011 | FULL |
| Q12 | FR-012 | FULL |
| Q13 | FR-013 | FULL |
| Q14 | FR-014 | FULL |
| Q15 | FR-015 | FULL |
| Q16 | FR-016 | FULL |
| Q17 | FR-017 | FULL |
| Q18 | FR-018 | FULL |
| Q19 | FR-019 | FULL |
| Q20 | FR-020 | FULL |
| Q21 | FR-021 | FULL |
| Q22 | FR-022 | FULL |

# 6. Baseline Rules

Once this baseline is approved:

1. Baselined requirements must not be modified directly.
2. Any change must be identified as a Change Request.
3. The impact of the change must be assessed.
4. Traceability must be updated.
5. A new baseline version may be created when the change is approved.

Example:

```text
RB V1.0
   ↓
Change Request
   ↓
Impact Analysis
   ↓
Business Approval
   ↓
Requirement Update
   ↓
RB V1.1
```

# 7. Quality Gate

| Criterion | Result |
|---|---|
| Requirements clarity | PASS |
| Testability | PASS for baselined requirements |
| Traceability | PASS |
| Business validation | PASS except Q8 |
| Blocking ambiguity | NONE except Q8 |
| Open decision | Q8 |
| Baseline readiness | APPROVED WITH EXCLUSION |

# 8. Baseline Approval

**Decision: APPROVED WITH EXCLUSION**

Requirements Baseline V1.0 contains 21 approved functional requirements.

FR-008 is explicitly excluded because its source business decision Q8 remains open.

This exclusion does not authorize the development or testing team to invent a rule for the missing requirement.

# 9. Next Artifact

The next artifact is:

**User Stories**

Expected traceability chain:

```text
Business Decision
       ↓
Requirement
       ↓
User Story
       ↓
Acceptance Criteria
       ↓
Test Case
       ↓
Test Execution
       ↓
Defect
```

The next GenAI activity will generate candidate User Stories from the baselined requirements while preserving traceability and preventing unsupported business rules.
