# SmartTodo — Test Execution (SIMULATION — EXEMPLE FICTIF)

> ⚠️ **AVERTISSEMENT :** Ce document est une **simulation à but pédagogique**. Aucune application SmartTodo réelle n'a été exécutée. Tous les Actual Results, Statuts et Defect ID ci-dessous sont **fictifs**, générés pour illustrer à quoi ressemblerait un Test Execution une fois une vraie campagne de test menée. **Ce document ne doit jamais être utilisé, partagé ou baseliné comme un résultat de test réel.** Le véritable Test Execution du projet (à l'état NOT RUN, honnête et non inventé) reste `SmartTodo-Test-Execution-V1.0.md`.

**Version:** SIMULATION
**Status:** FICTIF — NE PAS UTILISER COMME BASELINE
**AI Assistance:** Yes
**Human QA Validation:** Sans objet (données fictives)

---

## 1. Objectif

Illustrer, à des fins pédagogiques, la forme que prendrait un Test Execution rempli après une campagne de test réelle sur une application SmartTodo fonctionnelle (hypothétique).

---

## 2. Environnement d'exécution (fictif)

| Élément | Valeur (fictive) |
|---|---|
| Application testée | SmartTodo (hypothétique) |
| Environnement | Staging (fictif) |
| Exécutant(s) | QA Engineer (fictif) |
| Date d'exécution | 2026-09-03 (fictive) |
| Outil de suivi des anomalies | Fictif — non réel |

---

## 3. Execution Summary (fictif)

| Statut | Nombre |
|---|---|
| Total Test Cases | 33 |
| PASS | 29 |
| FAIL | 3 |
| BLOCKED | 0 |
| NOT RUN | 0 |
| N/A | 1 (TC-032/TC-033 limités — voir note) |

---

## 4. Test Execution Results (fictif)

| TC ID | Test Data | Expected Result | Actual Result (fictif) | Status | Defect ID (fictif) | Execution Date |
|---|---|---|---|---|---|---|
| TC-001 | DATA-USR-001 | Tâche associée exclusivement à l'Utilisateur A | Tâche associée exclusivement à l'Utilisateur A | PASS | — | 2026-09-03 |
| TC-002 | DATA-USR-001/002 | Utilisateur B ne peut pas consulter la tâche | Accès refusé (403) | PASS | — | 2026-09-03 |
| TC-003 | DATA-USR-001/002 | Utilisateur B ne peut pas modifier la tâche | Accès refusé (403) | PASS | — | 2026-09-03 |
| TC-004 | DATA-USR-001/002 | Utilisateur B ne peut pas supprimer la tâche | Accès refusé (403) | PASS | — | 2026-09-03 |
| TC-005 | DATA-TITLE-003 | Création rejetée | Création rejetée, message "Titre requis" | PASS | — | 2026-09-03 |
| TC-006 | DATA-TITLE-001 | Tâche créée avec succès | Tâche créée avec succès | PASS | — | 2026-09-03 |
| TC-007 | DATA-TITLE-002 | Tâche créée avec succès | Tâche créée avec succès | PASS | — | 2026-09-03 |
| TC-008 | DATA-TITLE-003 | Création rejetée | Création rejetée | PASS | — | 2026-09-03 |
| TC-009 | DATA-TITLE-004 | Création rejetée | **Tâche créée à tort avec un titre de 101 caractères** | **FAIL** | DEF-FICTIF-001 | 2026-09-03 |
| TC-010 | DATA-TITLE-005/DATA-DESC-001 | Tâche créée avec succès | Tâche créée avec succès | PASS | — | 2026-09-03 |
| TC-011 | DATA-DESC-002 | Tâche créée avec succès | Tâche créée avec succès | PASS | — | 2026-09-03 |
| TC-012 | DATA-DESC-003 | Création rejetée | Création rejetée | PASS | — | 2026-09-03 |
| TC-013 | DATA-TITLE-005 | Statut par défaut = "À faire" | Statut par défaut = "À faire" | PASS | — | 2026-09-03 |
| TC-014 | DATA-PRIO-001 | Création rejetée | Création rejetée | PASS | — | 2026-09-03 |
| TC-015 | DATA-PRIO-002/003/004 | Tâche créée pour les 3 valeurs | Tâche créée pour les 3 valeurs | PASS | — | 2026-09-03 |
| TC-016 | DATA-PRIO-005 | Création rejetée | Création rejetée | PASS | — | 2026-09-03 |
| TC-017 | DATA-DATE-001 | Tâche créée avec succès | Tâche créée avec succès | PASS | — | 2026-09-03 |
| TC-018 | DATA-DATE-002 | Tâche créée avec succès | Tâche créée avec succès | PASS | — | 2026-09-03 |
| TC-019 | DATA-DATE-003 | Création rejetée | **Tâche créée à tort avec une date passée** | **FAIL** | DEF-FICTIF-002 | 2026-09-03 |
| TC-020 | DATA-DATE-004 | Pas de composante horaire enregistrée | Pas de composante horaire enregistrée | PASS | — | 2026-09-03 |
| TC-021 | DATA-STATUS-001/002 | Seuls 2 statuts possibles | Seuls 2 statuts possibles | PASS | — | 2026-09-03 |
| TC-022 | DATA-STATUS-001 | Transition À faire → Terminée | Transition réussie | PASS | — | 2026-09-03 |
| TC-023 | DATA-STATUS-002 | Transition Terminée → À faire | Transition réussie | PASS | — | 2026-09-03 |
| TC-024 | DATA-STATUS-003 | Transition rejetée | Transition rejetée | PASS | — | 2026-09-03 |
| TC-025 | DATA-TASK-DEL-001 | Confirmation affichée | Confirmation affichée | PASS | — | 2026-09-03 |
| TC-026 | DATA-TASK-DEL-001 | Suppression définitive | Suppression définitive | PASS | — | 2026-09-03 |
| TC-027 | DATA-TASK-DEL-001 | Annulation → pas de suppression | Annulation → pas de suppression | PASS | — | 2026-09-03 |
| TC-028 | DATA-TASK-DEL-002 | Non-restauration | Non-restauration confirmée | PASS | — | 2026-09-03 |
| TC-029 | DATA-SEARCH-001 | Résultat trouvé via titre | Résultat trouvé | PASS | — | 2026-09-03 |
| TC-030 | DATA-SEARCH-002 | Résultat trouvé via description | Résultat trouvé | PASS | — | 2026-09-03 |
| TC-031 | DATA-SEARCH-003 | Résultat trouvé malgré la casse | **Résultat non trouvé (sensible à la casse)** | **FAIL** | DEF-FICTIF-003 | 2026-09-03 |
| TC-032 | DATA-FILTER-001 | Combinaison statut+priorité applicable | Combinaison applicable ; comportement individuel non vérifiable (hors périmètre défini) | N/A (partiel — READY WITH OBSERVATION) | — | 2026-09-03 |
| TC-033 | DATA-FILTER-002 | Combinaison recherche+filtres applicable | Combinaison applicable ; comportement individuel non vérifiable | PASS (partiel — READY WITH OBSERVATION) | — | 2026-09-03 |

---

## 5. Blocked Tests

| Item | Raison |
|---|---|
| US-003 / FR-008 | Q8 non validée — toujours BLOCKED, aucun TC (inchangé par rapport à la réalité) |

---

## 6. Defects (fictifs)

| Defect ID | TC associé | Description | Sévérité (fictive) | Statut (fictif) |
|---|---|---|---|---|
| DEF-FICTIF-001 | TC-009 | Un titre de 101 caractères est accepté alors qu'il devrait être rejeté (FR-007) | Medium | Open |
| DEF-FICTIF-002 | TC-019 | Une date d'échéance passée est acceptée alors qu'elle devrait être rejetée (FR-014) | High | Open |
| DEF-FICTIF-003 | TC-031 | La recherche est sensible à la casse alors qu'elle devrait être insensible (FR-020) | Medium | Open |

---

## 7. Rappel

Ces PASS, FAIL, Actual Results et Defect ID sont **entièrement fictifs**, créés pour la démonstration. Ils ne doivent pas être confondus avec les résultats réels du projet SmartTodo, qui restent **NOT RUN** tant qu'aucune exécution effective n'a eu lieu (voir `SmartTodo-Test-Execution-V1.0.md`).
