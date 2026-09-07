# SmartTodo — Test Cases

**Version:** 1.0
**Status:** Draft — To Be Validated
**AI Assistance:** Yes
**Human QA Validation:** Required

---

## US-001 — Propriété et confidentialité (FR-001, FR-002)

### TC-001 — Association exclusive d'une tâche créée à son auteur

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-001                               |
| Requirement         | FR-001                               |
| User Story          | US-001                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-001                             |
| Test Scenario       | TS-001                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | High (R-001)                          |
| Preconditions       | Un utilisateur authentifié (Utilisateur A) existe. |
| Test Data           | Utilisateur A ; données de tâche valides (TBC pour le contenu exact — hors caractères du titre, cf. FR-008 exclu) |
| Steps               | 1. S'authentifier en tant qu'Utilisateur A. 2. Créer une tâche. |
| Expected Result     | La tâche créée est associée exclusivement à l'identifiant unique de l'Utilisateur A. |

### TC-002 — Impossibilité de consulter une tâche d'un autre utilisateur

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-002                               |
| Requirement         | FR-002                               |
| User Story          | US-001                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-002                             |
| Test Scenario       | TS-001                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative / Security-related Functional |
| Priority            | High (R-001)                          |
| Preconditions       | Utilisateur A a créé une tâche (T1). Utilisateur B est authentifié. |
| Test Data           | Tâche T1 appartenant à l'Utilisateur A. |
| Steps               | 1. S'authentifier en tant qu'Utilisateur B. 2. Tenter de consulter la tâche T1. |
| Expected Result     | L'Utilisateur B ne peut pas consulter la tâche T1 (comportement exact de refus — message, code retour — non défini dans les FR : TBC). |

### TC-003 — Impossibilité de modifier une tâche d'un autre utilisateur

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-003                               |
| Requirement         | FR-002                               |
| User Story          | US-001                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-003                             |
| Test Scenario       | TS-001                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative / Security-related Functional |
| Priority            | High (R-001)                          |
| Preconditions       | Utilisateur A a créé une tâche (T1). Utilisateur B est authentifié. |
| Test Data           | Tâche T1 appartenant à l'Utilisateur A. |
| Steps               | 1. S'authentifier en tant qu'Utilisateur B. 2. Tenter de modifier la tâche T1. |
| Expected Result     | L'Utilisateur B ne peut pas modifier la tâche T1 (comportement exact de refus non défini dans les FR : TBC). |

### TC-004 — Impossibilité de supprimer une tâche d'un autre utilisateur

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-004                               |
| Requirement         | FR-002                               |
| User Story          | US-001                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-004                             |
| Test Scenario       | TS-001                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative / Security-related Functional |
| Priority            | High (R-001)                          |
| Preconditions       | Utilisateur A a créé une tâche (T1). Utilisateur B est authentifié. |
| Test Data           | Tâche T1 appartenant à l'Utilisateur A. |
| Steps               | 1. S'authentifier en tant qu'Utilisateur B. 2. Tenter de supprimer la tâche T1. |
| Expected Result     | L'Utilisateur B ne peut pas supprimer la tâche T1 (comportement exact de refus non défini dans les FR : TBC). |

---

## US-002 — Création d'une tâche (FR-004, FR-006, FR-007, FR-009, FR-010)

### TC-005 — Rejet de la création sans titre

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-005                               |
| Requirement         | FR-006                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-005                             |
| Test Scenario       | TS-003                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative                              |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre absent / vide.                  |
| Steps               | 1. Tenter de créer une tâche sans renseigner le titre. |
| Expected Result     | La création est rejetée (message d'erreur exact non défini dans les FR : TBC). |

### TC-006 — Acceptation d'un titre de 1 caractère (borne basse)

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-006                               |
| Requirement         | FR-007                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-006                             |
| Test Scenario       | TS-002                               |
| Technique           | Boundary Value Analysis               |
| Type                | Positive / Boundary                   |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre de 1 caractère (contenu exact TBC — hors caractères autorisés, cf. FR-008 exclu). |
| Steps               | 1. Créer une tâche avec un titre de 1 caractère. |
| Expected Result     | La tâche est créée avec succès. |

### TC-007 — Acceptation d'un titre de 100 caractères (borne haute)

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-007                               |
| Requirement         | FR-007                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-007                             |
| Test Scenario       | TS-002                               |
| Technique           | Boundary Value Analysis               |
| Type                | Positive / Boundary                   |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre de 100 caractères (contenu exact TBC). |
| Steps               | 1. Créer une tâche avec un titre de 100 caractères. |
| Expected Result     | La tâche est créée avec succès. |

### TC-008 — Rejet d'un titre de 0 caractère

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-008                               |
| Requirement         | FR-007                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-008                             |
| Test Scenario       | TS-003                               |
| Technique           | Boundary Value Analysis               |
| Type                | Negative / Boundary                   |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre de 0 caractère (chaîne vide).   |
| Steps               | 1. Tenter de créer une tâche avec un titre de 0 caractère. |
| Expected Result     | La création est rejetée (message exact TBC). |

### TC-009 — Rejet d'un titre de 101 caractères

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-009                               |
| Requirement         | FR-007                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-009                             |
| Test Scenario       | TS-003                               |
| Technique           | Boundary Value Analysis               |
| Type                | Negative / Boundary                   |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre de 101 caractères (contenu exact TBC). |
| Steps               | 1. Tenter de créer une tâche avec un titre de 101 caractères. |
| Expected Result     | La création est rejetée (message exact TBC). |

### TC-010 — Création d'une tâche sans description

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-010                               |
| Requirement         | FR-009                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-03                                |
| Test Condition      | TCND-010                             |
| Test Scenario       | TS-002                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | TBC (non repris dans R-001 à R-008)   |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; description absente.   |
| Steps               | 1. Créer une tâche avec un titre valide, sans renseigner de description. |
| Expected Result     | La tâche est créée avec succès. |

### TC-011 — Acceptation d'une description de 500 caractères (borne haute)

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-011                               |
| Requirement         | FR-010                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-04                                |
| Test Condition      | TCND-011                             |
| Test Scenario       | TS-002                               |
| Technique           | Boundary Value Analysis               |
| Type                | Positive / Boundary                   |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; description de 500 caractères (contenu exact TBC). |
| Steps               | 1. Créer une tâche avec une description de 500 caractères. |
| Expected Result     | La tâche est créée avec succès. |

### TC-012 — Rejet d'une description de 501 caractères

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-012                               |
| Requirement         | FR-010                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-04                                |
| Test Condition      | TCND-012                             |
| Test Scenario       | TS-003                               |
| Technique           | Boundary Value Analysis               |
| Type                | Negative / Boundary                   |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; description de 501 caractères (contenu exact TBC). |
| Steps               | 1. Tenter de créer une tâche avec une description de 501 caractères. |
| Expected Result     | La création est rejetée (message exact TBC). |

### TC-013 — Statut par défaut à la création

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-013                               |
| Requirement         | FR-004                               |
| User Story          | US-002                               |
| Acceptance Criteria | AC-05                                |
| Test Condition      | TCND-013                             |
| Test Scenario       | TS-002                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; autres champs valides (TBC pour contenu exact). |
| Steps               | 1. Créer une tâche avec des données valides. 2. Consulter le statut de la tâche créée. |
| Expected Result     | Le statut de la tâche est automatiquement « À faire ». |

---

## US-003 — Caractères du titre (FR-008)

**BLOCKED — aucun Test Case généré.**

Conformément à la règle projet et au statut OPEN/BLOCKED de Q8, aucun Test Case ne doit être conçu ni exécuté pour FR-008 / US-003 tant que la décision métier Q8 n'est pas validée.

---

## US-004 — Priorité (FR-011, FR-012)

### TC-014 — Rejet de la création sans priorité

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-014                               |
| Requirement         | FR-012                               |
| User Story          | US-004                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-014                             |
| Test Scenario       | TS-004                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative                              |
| Priority            | Medium (R-003)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; priorité absente.      |
| Steps               | 1. Tenter de créer une tâche sans renseigner de priorité. |
| Expected Result     | La création est rejetée (message exact TBC). |

### TC-015 — Acceptation des valeurs de priorité valides

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-015                               |
| Requirement         | FR-011                               |
| User Story          | US-004                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-015                             |
| Test Scenario       | TS-004                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | TBC (non repris dans R-001 à R-008)   |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; priorité = « Basse », puis « Moyenne », puis « Haute » (3 exécutions). |
| Steps               | 1. Créer une tâche avec la priorité « Basse ». 2. Répéter avec « Moyenne ». 3. Répéter avec « Haute ». |
| Expected Result     | La tâche est créée avec succès pour chacune des trois valeurs. |

### TC-016 — Rejet d'une valeur de priorité non définie

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-016                               |
| Requirement         | FR-011                               |
| User Story          | US-004                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-016                             |
| Test Scenario       | TS-004                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative                              |
| Priority            | TBC (non repris dans R-001 à R-008)   |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; priorité = valeur hors « Basse/Moyenne/Haute » (valeur exacte TBC — non définie dans les FR). |
| Steps               | 1. Tenter de créer une tâche avec une valeur de priorité non listée. |
| Expected Result     | La création est rejetée (message exact TBC). |

---

## US-005 — Date d'échéance (FR-013, FR-014, FR-015)

### TC-017 — Création d'une tâche sans date d'échéance

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-017                               |
| Requirement         | FR-013                               |
| User Story          | US-005                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-017                             |
| Test Scenario       | TS-005                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | TBC (non repris dans R-001 à R-008)   |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; date d'échéance absente. |
| Steps               | 1. Créer une tâche sans renseigner de date d'échéance. |
| Expected Result     | La tâche est créée avec succès. |

### TC-018 — Acceptation d'une date d'échéance égale à la date du jour

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-018                               |
| Requirement         | FR-014                               |
| User Story          | US-005                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-018                             |
| Test Scenario       | TS-005                               |
| Technique           | Boundary Value Analysis               |
| Type                | Positive / Boundary                   |
| Priority            | Medium (R-004)                        |
| Preconditions       | Un utilisateur authentifié existe. Fuseau horaire de référence de l'application (valeur exacte TBC). |
| Test Data           | Titre valide ; date d'échéance = date du jour selon le fuseau horaire configuré (TBC pour la valeur/config réelle). |
| Steps               | 1. Créer une tâche avec une date d'échéance égale à la date du jour. |
| Expected Result     | La tâche est créée avec succès. |

### TC-019 — Rejet d'une date d'échéance antérieure à la date du jour

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-019                               |
| Requirement         | FR-014                               |
| User Story          | US-005                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-019                             |
| Test Scenario       | TS-005                               |
| Technique           | Boundary Value Analysis               |
| Type                | Negative / Boundary                   |
| Priority            | Medium (R-004)                        |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; date d'échéance = veille de la date du jour. |
| Steps               | 1. Tenter de créer une tâche avec une date d'échéance antérieure à la date du jour. |
| Expected Result     | La création est rejetée (message exact TBC). |

### TC-020 — Absence de composante horaire sur la date d'échéance

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-020                               |
| Requirement         | FR-015                               |
| User Story          | US-005                               |
| Acceptance Criteria | AC-03                                |
| Test Condition      | TCND-020                             |
| Test Scenario       | TS-005                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | TBC (non repris dans R-001 à R-008)   |
| Preconditions       | Un utilisateur authentifié existe.    |
| Test Data           | Titre valide ; date d'échéance valide. |
| Steps               | 1. Créer une tâche avec une date d'échéance. 2. Consulter la date d'échéance enregistrée. |
| Expected Result     | La date d'échéance enregistrée ne comporte aucune composante horaire. |

---

## US-006 — Évolution du statut (FR-003, FR-005)

### TC-021 — Vérification des deux seuls statuts possibles

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-021                               |
| Requirement         | FR-003                               |
| User Story          | US-006                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-021                             |
| Test Scenario       | TS-006                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | Medium (R-002)                        |
| Preconditions       | Une tâche existe.                     |
| Test Data           | Tâche existante.                      |
| Steps               | 1. Consulter les statuts disponibles pour la tâche. |
| Expected Result     | Seuls les statuts « À faire » et « Terminée » sont proposés/valides. |

### TC-022 — Transition « À faire » → « Terminée »

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-022                               |
| Requirement         | FR-005                               |
| User Story          | US-006                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-022                             |
| Test Scenario       | TS-006                               |
| Technique           | State Transition Testing              |
| Type                | Positive                              |
| Priority            | Medium (R-002)                        |
| Preconditions       | Une tâche existe avec le statut « À faire ». |
| Test Data           | Tâche au statut « À faire ».          |
| Steps               | 1. Modifier le statut de la tâche vers « Terminée ». |
| Expected Result     | Le statut de la tâche passe à « Terminée ». |

### TC-023 — Transition « Terminée » → « À faire »

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-023                               |
| Requirement         | FR-005                               |
| User Story          | US-006                               |
| Acceptance Criteria | AC-03                                |
| Test Condition      | TCND-023                             |
| Test Scenario       | TS-006                               |
| Technique           | State Transition Testing              |
| Type                | Positive                              |
| Priority            | Medium (R-002)                        |
| Preconditions       | Une tâche existe avec le statut « Terminée ». |
| Test Data           | Tâche au statut « Terminée ».         |
| Steps               | 1. Modifier le statut de la tâche vers « À faire ». |
| Expected Result     | Le statut de la tâche repasse à « À faire ». |

### TC-024 — Rejet de toute autre transition de statut

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-024                               |
| Requirement         | FR-005                               |
| User Story          | US-006                               |
| Acceptance Criteria | AC-04                                |
| Test Condition      | TCND-024                             |
| Test Scenario       | TS-006                               |
| Technique           | State Transition Testing              |
| Type                | Negative                              |
| Priority            | Medium (R-002)                        |
| Preconditions       | Une tâche existe dans un statut donné. |
| Test Data           | Tâche existante ; tentative de transition autre que À faire→Terminée ou Terminée→À faire (valeur exacte TBC, puisque seuls deux statuts existent — cf. Test Design §6). |
| Steps               | 1. Tenter d'appliquer une transition de statut non autorisée. |
| Expected Result     | La transition est rejetée (message exact TBC). |

---

## US-007 — Suppression (FR-016, FR-017, FR-018)

### TC-025 — Affichage d'une confirmation avant suppression

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-025                               |
| Requirement         | FR-017                               |
| User Story          | US-007                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-025                             |
| Test Scenario       | TS-007                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | High (R-005)                          |
| Preconditions       | Une tâche existe.                     |
| Test Data           | Tâche existante.                      |
| Steps               | 1. Demander la suppression de la tâche. |
| Expected Result     | Une confirmation est affichée à l'utilisateur avant toute suppression effective. |

### TC-026 — Suppression définitive après confirmation

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-026                               |
| Requirement         | FR-016, FR-017                       |
| User Story          | US-007                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-026                             |
| Test Scenario       | TS-007                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | High (R-005)                          |
| Preconditions       | Une tâche existe.                     |
| Test Data           | Tâche existante.                      |
| Steps               | 1. Demander la suppression de la tâche. 2. Confirmer la suppression. |
| Expected Result     | La tâche est retirée définitivement. |

### TC-027 — Annulation de la confirmation de suppression

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-027                               |
| Requirement         | FR-017                               |
| User Story          | US-007                               |
| Acceptance Criteria | AC-03                                |
| Test Condition      | TCND-027                             |
| Test Scenario       | TS-007                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative                              |
| Priority            | High (R-005)                          |
| Preconditions       | Une tâche existe.                     |
| Test Data           | Tâche existante.                      |
| Steps               | 1. Demander la suppression de la tâche. 2. Annuler la confirmation. |
| Expected Result     | La tâche n'est pas supprimée. |

### TC-028 — Impossibilité de restaurer une tâche supprimée

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-028                               |
| Requirement         | FR-018                               |
| User Story          | US-007                               |
| Acceptance Criteria | AC-04                                |
| Test Condition      | TCND-028                             |
| Test Scenario       | TS-007                               |
| Technique           | Equivalence Partitioning              |
| Type                | Negative                              |
| Priority            | Medium (R-006)                        |
| Preconditions       | Une tâche a été supprimée définitivement (cf. TC-026). |
| Test Data           | Tâche supprimée définitivement.       |
| Steps               | 1. Tenter de restaurer la tâche supprimée. |
| Expected Result     | La tâche ne peut pas être restaurée (mécanisme exact de restauration, s'il existe une tentative possible, non défini : TBC). |

---

## US-008 — Recherche (FR-019, FR-020)

### TC-029 — Recherche sur le titre

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-029                               |
| Requirement         | FR-019                               |
| User Story          | US-008                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-029                             |
| Test Scenario       | TS-008                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | Medium (R-007)                        |
| Preconditions       | Une tâche existe avec un terme connu dans le titre. |
| Test Data           | Terme de recherche présent dans le titre d'une tâche. |
| Steps               | 1. Effectuer une recherche avec ce terme. |
| Expected Result     | La tâche dont le titre contient le terme est retournée par la recherche. |

### TC-030 — Recherche sur la description

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-030                               |
| Requirement         | FR-019                               |
| User Story          | US-008                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-030                             |
| Test Scenario       | TS-008                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | Medium (R-007)                        |
| Preconditions       | Une tâche existe avec un terme connu dans la description. |
| Test Data           | Terme de recherche présent dans la description d'une tâche. |
| Steps               | 1. Effectuer une recherche avec ce terme. |
| Expected Result     | La tâche dont la description contient le terme est retournée par la recherche. |

### TC-031 — Recherche insensible à la casse

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-031                               |
| Requirement         | FR-020                               |
| User Story          | US-008                               |
| Acceptance Criteria | AC-02                                |
| Test Condition      | TCND-031                             |
| Test Scenario       | TS-008                               |
| Technique           | Equivalence Partitioning              |
| Type                | Positive                              |
| Priority            | Medium (R-007)                        |
| Preconditions       | Une tâche existe avec un terme connu dans le titre ou la description. |
| Test Data           | Terme de recherche saisi dans une casse différente de celle du contenu de la tâche (ex. majuscules vs minuscules). |
| Steps               | 1. Effectuer une recherche avec le terme dans une casse différente de celle enregistrée. |
| Expected Result     | La tâche correspondante est retournée malgré la différence de casse. |

---

## US-009 — Combinaison statut + priorité (FR-021) — READY WITH OBSERVATION

### TC-032 — Application simultanée des filtres statut et priorité

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-032                               |
| Requirement         | FR-021                               |
| User Story          | US-009                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-032                             |
| Test Scenario       | TS-009                               |
| Technique           | Decision Table Testing                |
| Type                | Positive — READY WITH OBSERVATION     |
| Priority            | Medium (R-008)                        |
| Preconditions       | Des tâches existent avec des statuts et priorités variés. |
| Test Data           | Une valeur de statut et une valeur de priorité (valeurs exactes des filtres individuels TBC — non définies dans les FR). |
| Steps               | 1. Appliquer simultanément un filtre de statut et un filtre de priorité. |
| Expected Result     | Les deux filtres peuvent être appliqués simultanément. **Le résultat détaillé attendu du filtrage combiné ne peut pas être précisé** tant que le comportement individuel de chaque filtre n'est pas défini (TBC — voir Test Design §8, G-002/G-003). |

---

## US-010 — Recherche + filtres (FR-022) — READY WITH OBSERVATION

### TC-033 — Utilisation simultanée de la recherche et des filtres

| Champ               | Valeur                               |
| ------------------- | ------------------------------------ |
| Test Case ID        | TC-033                               |
| Requirement         | FR-022                               |
| User Story          | US-010                               |
| Acceptance Criteria | AC-01                                |
| Test Condition      | TCND-033                             |
| Test Scenario       | TS-010                               |
| Technique           | Decision Table Testing                |
| Type                | Positive — READY WITH OBSERVATION     |
| Priority            | Medium (R-008)                        |
| Preconditions       | Des tâches existent avec des statuts, priorités et contenus de recherche variés. |
| Test Data           | Un terme de recherche, une valeur de statut et une valeur de priorité (valeurs exactes des filtres individuels TBC). |
| Steps               | 1. Effectuer une recherche avec un terme. 2. Appliquer simultanément un filtre de statut et un filtre de priorité. |
| Expected Result     | La recherche peut être utilisée simultanément avec les filtres statut et priorité. **Le résultat détaillé attendu ne peut pas être précisé** tant que le comportement individuel des filtres n'est pas défini (TBC — voir Test Design §8, G-002/G-003/G-004). |

---

## Traceability Matrix

**FR → US → AC → Test Case**

| FR | US | AC | Test Case(s) | Statut de couverture |
|---|---|---|---|---|
| FR-001 | US-001 | AC-01 | TC-001 | Entièrement couverte |
| FR-002 | US-001 | AC-02 | TC-002, TC-003, TC-004 | Entièrement couverte |
| FR-003 | US-006 | AC-01 | TC-021 | Entièrement couverte |
| FR-004 | US-002 | AC-05 | TC-013 | Entièrement couverte |
| FR-005 | US-006 | AC-02, AC-03, AC-04 | TC-022, TC-023, TC-024 | Entièrement couverte |
| FR-006 | US-002 | AC-01 | TC-005 | Entièrement couverte |
| FR-007 | US-002 | AC-02 | TC-006, TC-007, TC-008, TC-009 | Entièrement couverte |
| FR-008 | US-003 | BLOCKED | — | **Bloquée (OPEN/BLOCKED — Q8)** |
| FR-009 | US-002 | AC-03 | TC-010 | Entièrement couverte |
| FR-010 | US-002 | AC-04 | TC-011, TC-012 | Entièrement couverte |
| FR-011 | US-004 | AC-02 | TC-015, TC-016 | Entièrement couverte |
| FR-012 | US-004 | AC-01 | TC-014 | Entièrement couverte |
| FR-013 | US-005 | AC-01 | TC-017 | Entièrement couverte |
| FR-014 | US-005 | AC-02 | TC-018, TC-019 | Entièrement couverte (valeur réelle du fuseau horaire : **nécessite clarification**, cf. G-009 Test Design) |
| FR-015 | US-005 | AC-03 | TC-020 | Entièrement couverte |
| FR-016 | US-007 | AC-02 | TC-026 | Entièrement couverte |
| FR-017 | US-007 | AC-01, AC-02, AC-03 | TC-025, TC-026, TC-027 | Entièrement couverte |
| FR-018 | US-007 | AC-04 | TC-028 | Entièrement couverte |
| FR-019 | US-008 | AC-01 | TC-029, TC-030 | Entièrement couverte |
| FR-020 | US-008 | AC-02 | TC-031 | Entièrement couverte |
| FR-021 | US-009 | AC-01 | TC-032 | **Partiellement couverte** (combinaison uniquement — nécessite clarification du comportement des filtres individuels) |
| FR-022 | US-010 | AC-01 | TC-033 | **Partiellement couverte** (combinaison uniquement — nécessite clarification du comportement des filtres individuels et de leur interaction avec la recherche) |

**Synthèse :** 18 FR entièrement couvertes (FR-001–FR-007, FR-009–FR-020) ; 2 FR partiellement couvertes (FR-021, FR-022) ; 1 FR bloquée (FR-008).

---

## AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Hallucinations | Aucune détectée — chaque Test Case dérive directement d'une Test Condition et d'un Test Scenario du Test Design V1.0, elle-même dérivée des FR/AC baselinées |
| Règles inventées | Aucune — messages d'erreur, comportements UI/API et valeurs de données non précisées dans les FR sont systématiquement marqués TBC (ex. TC-002, TC-005, TC-008, TC-009, TC-012, TC-016, TC-019, TC-024, TC-028) |
| Exigences oubliées | Aucune — les 21 FR baselinées sont toutes couvertes par au moins un Test Case (sauf FR-008, explicitement exclue) |
| Mauvaise interprétation | Aucune détectée — le contenu normatif de chaque FR (obligation, bornes, transitions, confidentialité) est repris tel quel dans les Expected Results |
| Tests manquants | Aucun manque identifié par rapport aux Test Conditions du Test Design V1.0 (TCND-001 à TCND-033, hors FR-008) — chacune dispose d'au moins un Test Case |
| Duplication inutile | Aucune détectée — TC-015 regroupe les trois valeurs valides de priorité au sein d'un seul Test Case car elles relèvent de la même condition d'équivalence, évitant une duplication artificielle en trois Test Cases identiques |
| Erreurs de traçabilité | Aucune détectée — la chaîne FR → US → AC → Test Condition/Scenario → Test Case reprend à l'identique le mapping du Test Design V1.0 et de la User Stories Baseline V1.0 |
| Règles inventées pour Q8 | Aucune — US-003/FR-008 ne comportent aucun Test Case, conformément à la règle 4 du prompt et au statut OPEN/BLOCKED |
| Comportement inventé des filtres | Aucun — TC-032 et TC-033 se limitent explicitement au fait que les filtres/la recherche peuvent être combinés, sans préciser de résultat de filtrage individuel, et renvoient explicitement au TBC |

### Problèmes identifiés

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | Messages d'erreur, codes de retour et comportements UI/API exacts non définis dans les FR | De nombreux Expected Results de tests négatifs (TC-002 à TC-004, TC-005, TC-008, TC-009, TC-012, TC-014, TC-016, TC-019, TC-024) restent partiels (rejet confirmé, mais forme exacte TBC) | Compléter les Expected Results avec l'équipe technique/produit avant l'exécution |
| 2 | Comportement individuel des filtres statut et priorité non défini | TC-032 et TC-033 ne peuvent pas vérifier de résultat de filtrage détaillé | Escalade vers le Product Owner ; compléter ces Test Cases une fois le comportement clarifié |
| 3 | Valeur réelle du fuseau horaire de référence (FR-014) non communiquée | TC-018 et TC-019 dépendent d'une configuration non confirmée | Confirmer la configuration réelle auprès de l'équipe technique avant exécution |
| 4 | Aucune donnée technique (contenu exact de titres/descriptions) fournie dans les documents sources | Les Test Data de plusieurs Test Cases (TC-001, TC-006, TC-007, TC-009, TC-011, TC-013, TC-016) indiquent un contenu TBC | Le QA humain devra définir un jeu de données concret respectant les longueurs/valeurs spécifiées avant l'exécution |
| 5 | Q8 (FR-008) reste non validée | Aucun Test Case ne peut être conçu pour US-003 | Attendre la validation métier de Q8 |

### Statut final

**DRAFT — TO BE VALIDATED.** Ces Test Cases ne doivent pas être considérés comme baselinés avant revue et validation humaine par un QA senior, et avant clarification des points listés ci-dessus.

**Next QA activity:** QA Review humaine des Test Cases, préparation des données de test concrètes, puis exécution une fois l'environnement de test confirmé.
