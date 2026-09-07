# SmartTodo — User Stories Baseline V1.0

**Version:** 1.0  
**Status:** BASELINED  
**Baseline Date:** 2026-09-02  
**Source:** Requirements Baseline V1.0  
**QA Review:** Corrections issues from the User Story Quality Review have been incorporated before baselining.

## 1. Baseline Purpose

Cette baseline constitue la version de référence des User Stories et Acceptance Criteria dérivés des exigences fonctionnelles baselinées de SmartTodo.

Elle sert de référence pour :
- Test Strategy
- Test Plan
- Test Design
- Test Cases
- Traceability
- Functional/API/UI testing

Toute modification ultérieure doit être identifiée comme un changement de version ou faire l'objet d'une nouvelle baseline.

## 2. Baseline Scope

Cette baseline couvre les User Stories US-001 à US-010.

| User Story | Sujet | FR couvertes | Statut |
|---|---|---|---|
| US-001 | Propriété et confidentialité | FR-001, FR-002 | READY |
| US-002 | Création d'une tâche | FR-004, FR-006, FR-007, FR-009, FR-010 | READY |
| US-003 | Caractères du titre | FR-008 | BLOCKED |
| US-004 | Priorité | FR-011, FR-012 | READY |
| US-005 | Date d'échéance | FR-013, FR-014, FR-015 | READY |
| US-006 | Évolution du statut | FR-003, FR-005 | READY |
| US-007 | Suppression | FR-016, FR-017, FR-018 | READY |
| US-008 | Recherche | FR-019, FR-020 | READY |
| US-009 | Combinaison statut + priorité | FR-021 | READY WITH OBSERVATION |
| US-010 | Recherche + filtres | FR-022 | READY WITH OBSERVATION |

## 3. Corrections intégrées

- **US-005:** précision du fuseau horaire configuré par l'application.
- **US-006:** couverture explicite des deux transitions autorisées et rejet de toute autre transition.
- **US-007:** couverture explicite de l'annulation de la confirmation.
- **US-003:** reste BLOCKED tant que Q8 n'est pas validée.
- **US-009 et US-010:** aucune règle sur les filtres individuels n'est inventée.

## 4. Points toujours ouverts

1. **Q8 / FR-008:** caractères autorisés et interdits dans le titre.
2. **Filtres individuels:** le comportement détaillé du filtre de statut et du filtre de priorité pris séparément n'est pas défini dans les FR actuelles.
3. Les éventuelles interfaces API/UI, l'architecture technique et les contraintes d'environnement ne sont pas définies par les exigences actuelles.

## 5. Traceability Baseline

| FR | User Story | AC Coverage |
|---|---|---|
| FR-001 | US-001 | AC-01 |
| FR-002 | US-001 | AC-02 |
| FR-003 | US-006 | AC-01 |
| FR-004 | US-002 | AC-05 |
| FR-005 | US-006 | AC-02, AC-03, AC-04 |
| FR-006 | US-002 | AC-01 |
| FR-007 | US-002 | AC-02 |
| FR-008 | US-003 | BLOCKED |
| FR-009 | US-002 | AC-03 |
| FR-010 | US-002 | AC-04 |
| FR-011 | US-004 | AC-02 |
| FR-012 | US-004 | AC-01 |
| FR-013 | US-005 | AC-01 |
| FR-014 | US-005 | AC-02 |
| FR-015 | US-005 | AC-03 |
| FR-016 | US-007 | AC-02 |
| FR-017 | US-007 | AC-01, AC-02, AC-03 |
| FR-018 | US-007 | AC-04 |
| FR-019 | US-008 | AC-01 |
| FR-020 | US-008 | AC-02 |
| FR-021 | US-009 | AC-01 |
| FR-022 | US-010 | AC-01 |

## 6. Baseline Integrity

- Aucun comportement non défini dans les Requirements Baseline V1.0 n'a été ajouté.
- Les omissions identifiées lors de la revue qualité ont été corrigées au niveau des Acceptance Criteria.
- Les ambiguïtés liées aux filtres individuels restent explicitement signalées.
- US-003 reste bloquée tant que Q8 n'est pas validée.

## 7. Change Control

Toute modification après cette baseline doit :
1. identifier la User Story et/ou l'AC concerné ;
2. identifier la source du changement ;
3. analyser l'impact sur la traçabilité et les tests ;
4. mettre à jour la version de la baseline si nécessaire.

## 8. Baseline Status

**BASELINED — V1.0**

**Next QA activity:** Test Strategy.
