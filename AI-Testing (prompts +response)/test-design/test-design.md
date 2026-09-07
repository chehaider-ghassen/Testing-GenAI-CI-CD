# SmartTodo — Test Design

**Version:** 1.0
**Statut:** Draft — To Be Validated
**AI Assistance:** Yes
**Human QA Validation:** Required

---

## 1. Objectif du Test Design

Le Test Design est l'activité qui traduit les User Stories baselinées et leurs Acceptance Criteria (User Stories Baseline V1.0), encadrées par la Test Strategy V1.0 et planifiées par le Test Plan V1.0, en **conditions de test** et **scénarios de test de haut niveau**.

Relation avec les autres artefacts :

- **Test Strategy V1.0** définit *pourquoi* et *comment* on teste (objectifs, niveaux, types, techniques, risques) — ce document ne redéfinit aucune de ces décisions, il les applique.
- **Test Plan V1.0** définit *quoi*, *quand*, *où* et *par qui* — ce document reprend le périmètre déjà établi (in scope / out of scope / partiellement testable) sans le modifier.
- **Test Design** (ce document) identifie les conditions de test et les scénarios candidats, en s'appuyant sur les FR et AC baselinées.
- **Test Cases** (activité suivante, non couverte ici) détailleront les étapes d'exécution, les données précises et les résultats attendus pas à pas.

Conformément à la règle projet, le LLM agit ici comme **assistant QA**. Aucune information absente des documents sources n'est ajoutée ; toute lacune est marquée **TBC**. Ce document ne peut pas être baseliné avant validation humaine par un QA senior.

---

## 2. Techniques de conception

| Technique | Application à SmartTodo | Justification |
|---|---|---|
| Equivalence Partitioning | Priorité (Basse/Moyenne/Haute), statuts (À faire/Terminée), présence/absence de description, présence/absence de date d'échéance | Les FR définissent des catégories de valeurs valides/invalides explicites (FR-003, FR-009, FR-011, FR-013) |
| Boundary Value Analysis | Titre (1 et 100 caractères), description (500 caractères), date d'échéance (jour courant) | Limites numériques/temporelles explicitement définies (FR-007, FR-010, FR-014) |
| State Transition Testing | Statut de la tâche | Deux transitions explicitement autorisées et toute autre transition explicitement interdite (FR-005 / US-006) |
| Decision Table Testing | Combinaison filtre statut + filtre priorité (FR-021) ; combinaison recherche + filtres (FR-022) | Pertinent pour les combinaisons de conditions, **mais limité** car le comportement individuel de chaque filtre n'est pas défini (voir §8, Gaps) |
| Negative Testing | Champs obligatoires (titre, priorité), limites dépassées (titre, description), date passée, transitions non autorisées, accès inter-utilisateurs | Applicable partout où une règle de validation ou de rejet est explicitement définie |

Techniques héritées de la Test Strategy mais non détaillées ici faute d'objet applicable dans ce document : Exploratory Testing, Error Guessing (voir Test Strategy §5).

---

## 3. Conditions de test

| ID | US | AC | Condition de test | Type | Technique |
|---|---|---|---|---|---|
| TC-COND-001 | US-001 | AC-01 | Vérifier qu'une tâche créée par un utilisateur authentifié est associée exclusivement à l'identifiant de cet utilisateur | Functional / Positive | Equivalence Partitioning |
| TC-COND-002 | US-001 | AC-02 | Vérifier qu'un utilisateur authentifié ne peut pas **consulter** une tâche associée à un autre identifiant | Negative / Security-related Functional | Equivalence Partitioning |
| TC-COND-003 | US-001 | AC-02 | Vérifier qu'un utilisateur authentifié ne peut pas **modifier** une tâche associée à un autre identifiant | Negative / Security-related Functional | Equivalence Partitioning |
| TC-COND-004 | US-001 | AC-02 | Vérifier qu'un utilisateur authentifié ne peut pas **supprimer** une tâche associée à un autre identifiant | Negative / Security-related Functional | Equivalence Partitioning |
| TC-COND-005 | US-002 | AC-01 | Vérifier qu'une tâche ne peut pas être créée sans titre | Negative | Equivalence Partitioning |
| TC-COND-006 | US-002 | AC-02 | Vérifier qu'un titre de 1 caractère est accepté | Positive / Boundary | Boundary Value Analysis |
| TC-COND-007 | US-002 | AC-02 | Vérifier qu'un titre de 100 caractères est accepté | Positive / Boundary | Boundary Value Analysis |
| TC-COND-008 | US-002 | AC-02 | Vérifier qu'un titre de 0 caractère est rejeté | Negative / Boundary | Boundary Value Analysis |
| TC-COND-009 | US-002 | AC-02 | Vérifier qu'un titre de 101 caractères est rejeté | Negative / Boundary | Boundary Value Analysis |
| TC-COND-010 | US-002 | AC-03 | Vérifier qu'une tâche peut être créée sans description | Positive | Equivalence Partitioning |
| TC-COND-011 | US-002 | AC-04 | Vérifier qu'une description de 500 caractères est acceptée | Positive / Boundary | Boundary Value Analysis |
| TC-COND-012 | US-002 | AC-04 | Vérifier qu'une description de 501 caractères est rejetée | Negative / Boundary | Boundary Value Analysis |
| TC-COND-013 | US-002 | AC-05 | Vérifier qu'une tâche nouvellement créée a automatiquement le statut « À faire » | Positive | Equivalence Partitioning |
| — | US-003 | BLOCKED | **Aucune condition de test définie** — Q8 (caractères autorisés dans le titre) non validée | N/A | N/A |
| TC-COND-014 | US-004 | AC-01 | Vérifier qu'une tâche ne peut pas être créée sans priorité | Negative | Equivalence Partitioning |
| TC-COND-015 | US-004 | AC-02 | Vérifier que les valeurs « Basse », « Moyenne », « Haute » sont acceptées comme priorité | Positive | Equivalence Partitioning |
| TC-COND-016 | US-004 | AC-02 | Vérifier qu'une valeur de priorité hors « Basse / Moyenne / Haute » est rejetée | Negative | Equivalence Partitioning |
| TC-COND-017 | US-005 | AC-01 | Vérifier qu'une tâche peut être créée sans date d'échéance | Positive | Equivalence Partitioning |
| TC-COND-018 | US-005 | AC-02 | Vérifier qu'une date d'échéance égale à la date du jour (selon le fuseau horaire configuré) est acceptée | Positive / Boundary | Boundary Value Analysis |
| TC-COND-019 | US-005 | AC-02 | Vérifier qu'une date d'échéance antérieure à la date du jour est rejetée | Negative / Boundary | Boundary Value Analysis |
| TC-COND-020 | US-005 | AC-03 | Vérifier que la date d'échéance enregistrée ne comporte pas de composante horaire | Positive | Equivalence Partitioning |
| TC-COND-021 | US-006 | AC-01 | Vérifier qu'une tâche ne peut avoir que le statut « À faire » ou « Terminée » | Positive | Equivalence Partitioning |
| TC-COND-022 | US-006 | AC-02 | Vérifier la transition « À faire » → « Terminée » | Positive | State Transition Testing |
| TC-COND-023 | US-006 | AC-03 | Vérifier la transition « Terminée » → « À faire » | Positive | State Transition Testing |
| TC-COND-024 | US-006 | AC-04 | Vérifier qu'aucune transition de statut autre que les deux transitions autorisées n'est acceptée | Negative | State Transition Testing |
| TC-COND-025 | US-007 | AC-01 | Vérifier qu'une confirmation est affichée lorsqu'une suppression de tâche est demandée | Positive | Equivalence Partitioning |
| TC-COND-026 | US-007 | AC-02 | Vérifier que la tâche est supprimée définitivement après confirmation | Positive | Equivalence Partitioning |
| TC-COND-027 | US-007 | AC-03 | Vérifier que la tâche n'est pas supprimée si l'utilisateur annule la confirmation | Negative | Equivalence Partitioning |
| TC-COND-028 | US-007 | AC-04 | Vérifier qu'une tâche supprimée définitivement ne peut pas être restaurée | Negative | Equivalence Partitioning |
| TC-COND-029 | US-008 | AC-01 | Vérifier que la recherche porte sur le titre de la tâche | Positive | Equivalence Partitioning |
| TC-COND-030 | US-008 | AC-01 | Vérifier que la recherche porte sur la description de la tâche | Positive | Equivalence Partitioning |
| TC-COND-031 | US-008 | AC-02 | Vérifier que la recherche est insensible à la casse | Positive | Equivalence Partitioning |
| TC-COND-032 | US-009 | AC-01 | Vérifier que les filtres « statut » et « priorité » peuvent être appliqués simultanément — **comportement de combinaison uniquement**, le comportement individuel de chaque filtre n'étant pas défini (TBC, voir §8) | Positive / Decision Table — READY WITH OBSERVATION | Decision Table Testing |
| TC-COND-033 | US-010 | AC-01 | Vérifier que la recherche peut être utilisée simultanément avec les filtres « statut » et « priorité » — **comportement de combinaison uniquement**, dépend également du gap sur les filtres individuels (TBC, voir §8) | Positive / Decision Table — READY WITH OBSERVATION | Decision Table Testing |

---

## 4. Scénarios de test

Scénarios de haut niveau, sans détail d'étapes d'exécution (celles-ci relèvent du Test Case Design) :

- **TS-001 — Isolation des tâches entre utilisateurs** (US-001) : couvre la création d'une tâche par un utilisateur et la vérification que seul cet utilisateur peut la consulter, la modifier ou la supprimer.
- **TS-002 — Création d'une tâche avec des données valides** (US-002) : couvre la création avec titre valide, description facultative renseignée ou non, et vérification du statut par défaut.
- **TS-003 — Création d'une tâche avec des données invalides** (US-002) : couvre l'absence de titre, un titre hors bornes (0, 101 caractères) et une description dépassant 500 caractères.
- **TS-004 — Gestion de la priorité** (US-004) : couvre l'obligation de la priorité et l'acceptation/rejet des valeurs de priorité.
- **TS-005 — Gestion de la date d'échéance** (US-005) : couvre l'absence de date, une date égale à aujourd'hui, une date passée, et l'absence de composante horaire.
- **TS-006 — Cycle de vie du statut d'une tâche** (US-006) : couvre les deux statuts possibles et les deux transitions autorisées, ainsi que le rejet de toute autre transition.
- **TS-007 — Suppression d'une tâche** (US-007) : couvre la demande de suppression avec confirmation, l'annulation de la confirmation, et la non-restauration après suppression définitive.
- **TS-008 — Recherche de tâches** (US-008) : couvre la recherche sur le titre, sur la description, et l'insensibilité à la casse.
- **TS-009 — Combinaison des filtres statut + priorité** (US-009) : couvre uniquement le fait que les deux filtres peuvent être appliqués ensemble — **READY WITH OBSERVATION**, sans couvrir le comportement individuel de chaque filtre (TBC).
- **TS-010 — Combinaison recherche + filtres** (US-010) : couvre uniquement le fait que la recherche et les filtres peuvent être utilisés ensemble — **READY WITH OBSERVATION**, sous les mêmes réserves que TS-009.
- **TS-011 — Caractères du titre (US-003 / FR-008)** : **NON DÉFINI — OPEN / BLOCKED.** Aucun scénario ne doit être conçu tant que Q8 n'est pas validée par le métier.

---

## 5. Analyse des limites

Limites explicitement définies dans les Requirements Baseline V1.0 :

| Champ | Limite | Valeurs à couvrir |
|---|---|---|
| Titre | 1 à 100 caractères inclus (FR-007) | 0 (invalide), 1 (valide, borne basse), 100 (valide, borne haute), 101 (invalide) |
| Description | Maximum 500 caractères (FR-010) ; facultative (FR-009) | Absente (valide), 500 (valide, borne haute), 501 (invalide) |
| Date d'échéance | Ne peut pas être antérieure à la date du jour, selon le fuseau horaire configuré pour l'application (FR-014) ; facultative (FR-013) ; sans heure (FR-015) | Absente (valide), date du jour (valide, borne), date passée — ex. veille (invalide) |

Aucune autre limite numérique ou temporelle n'est définie dans les documents sources.

---

## 6. Transitions d'état

Applicable à **US-006** (FR-003, FR-005) :

**États définis :** « À faire », « Terminée » (FR-003 — aucun autre état n'existe).

**Transitions autorisées (FR-005) :**
- À faire → Terminée
- Terminée → À faire

**Règle :** aucune autre transition n'est autorisée. Étant donné qu'il n'existe que deux états, les seules transitions concevables sont les deux ci-dessus et les deux « transitions » vers le même état (À faire → À faire, Terminée → Terminée), dont le statut n'est pas explicitement traité dans les FR — à considérer comme **TBC** plutôt que comme une transition invalide par défaut.

Conditions de test associées : TC-COND-021 à TC-COND-024 (voir §3).

---

## 7. Tests négatifs

Conditions invalides explicitement définies par les exigences baselinées :

- Création d'une tâche sans titre (FR-006).
- Titre de 0 caractère ou de 101 caractères et plus (FR-007).
- Description de 501 caractères et plus (FR-010).
- Création d'une tâche sans priorité (FR-012).
- Valeur de priorité non listée (hors Basse/Moyenne/Haute) (FR-011).
- Date d'échéance antérieure à la date du jour (FR-014).
- Toute transition de statut autre que À faire → Terminée ou Terminée → À faire (FR-005).
- Consultation, modification ou suppression d'une tâche appartenant à un autre utilisateur (FR-002).
- Annulation d'une suppression (le résultat attendu est l'absence de suppression) (FR-017).
- Tentative de restauration d'une tâche supprimée définitivement (FR-018).

Aucun test négatif relatif aux caractères du titre (FR-008) n'est défini, conformément à l'exclusion de Q8.

---

## 8. Gaps et ambiguïtés

| ID | Gap / Ambiguïté | Impact sur le Test Design | Statut |
|---|---|---|---|
| G-001 | Q8 — caractères autorisés/interdits dans le titre (FR-008 / US-003) | Aucune condition de test, aucun scénario, aucune donnée de test ne peut être conçue pour cette exigence | OPEN / BLOCKED |
| G-002 | Comportement individuel du filtre « statut » | US-009 ne peut être conçue que pour le comportement de combinaison ; le filtre seul n'est pas testable | To Be Confirmed |
| G-003 | Comportement individuel du filtre « priorité » | Idem G-002, impacte également US-009 et US-010 | To Be Confirmed |
| G-004 | Comportement de la recherche seule combinée à des filtres non définis individuellement | US-010 limitée au comportement de combinaison explicitement décrit | To Be Confirmed |
| G-005 | Interfaces API/UI non définies | Impossible de concevoir des scénarios techniques spécifiques à un niveau API ou UI | To Be Confirmed |
| G-006 | Architecture technique non définie | Impossible de préciser le niveau de test (unitaire, intégration, système) pour chaque condition | To Be Confirmed |
| G-007 | Environnement de test non défini | Impossible de préciser les conditions d'exécution des scénarios | To Be Confirmed |
| G-008 | Mécanisme d'authentification non défini | Impacte la conception détaillée de TC-COND-001 à TC-COND-004 (US-001) | To Be Confirmed |
| G-009 | Valeur/configuration réelle du fuseau horaire de l'application (FR-014) | Le principe de la borne « date du jour » est confirmé, mais sa valeur concrète ne l'est pas | To Be Confirmed |

Aucun de ces gaps n'a été comblé par une hypothèse, une règle inventée ou un comportement supposé.

---

## 9. Traçabilité

**FR → US → AC → Test Condition → Test Scenario**

| FR | US | AC | Test Condition | Test Scenario | Statut de couverture |
|---|---|---|---|---|---|
| FR-001 | US-001 | AC-01 | TC-COND-001 | TS-001 | Couvert |
| FR-002 | US-001 | AC-02 | TC-COND-002, TC-COND-003, TC-COND-004 | TS-001 | Couvert |
| FR-003 | US-006 | AC-01 | TC-COND-021 | TS-006 | Couvert |
| FR-004 | US-002 | AC-05 | TC-COND-013 | TS-002 | Couvert |
| FR-005 | US-006 | AC-02, AC-03, AC-04 | TC-COND-022, TC-COND-023, TC-COND-024 | TS-006 | Couvert |
| FR-006 | US-002 | AC-01 | TC-COND-005 | TS-003 | Couvert |
| FR-007 | US-002 | AC-02 | TC-COND-006 à TC-COND-009 | TS-002, TS-003 | Couvert |
| FR-008 | US-003 | BLOCKED | — | TS-011 (non défini) | **Bloqué** |
| FR-009 | US-002 | AC-03 | TC-COND-010 | TS-002 | Couvert |
| FR-010 | US-002 | AC-04 | TC-COND-011, TC-COND-012 | TS-002, TS-003 | Couvert |
| FR-011 | US-004 | AC-02 | TC-COND-015, TC-COND-016 | TS-004 | Couvert |
| FR-012 | US-004 | AC-01 | TC-COND-014 | TS-004 | Couvert |
| FR-013 | US-005 | AC-01 | TC-COND-017 | TS-005 | Couvert |
| FR-014 | US-005 | AC-02 | TC-COND-018, TC-COND-019 | TS-005 | Couvert (valeur de fuseau horaire TBC — voir G-009) |
| FR-015 | US-005 | AC-03 | TC-COND-020 | TS-005 | Couvert |
| FR-016 | US-007 | AC-02 | TC-COND-026 | TS-007 | Couvert |
| FR-017 | US-007 | AC-01, AC-02, AC-03 | TC-COND-025, TC-COND-026, TC-COND-027 | TS-007 | Couvert |
| FR-018 | US-007 | AC-04 | TC-COND-028 | TS-007 | Couvert |
| FR-019 | US-008 | AC-01 | TC-COND-029, TC-COND-030 | TS-008 | Couvert |
| FR-020 | US-008 | AC-02 | TC-COND-031 | TS-008 | Couvert |
| FR-021 | US-009 | AC-01 | TC-COND-032 | TS-009 | **Partiellement couvert** (combinaison uniquement — nécessite clarification G-002/G-003) |
| FR-022 | US-010 | AC-01 | TC-COND-033 | TS-010 | **Partiellement couvert** (combinaison uniquement — nécessite clarification G-002/G-003/G-004) |

**Synthèse :**
- **Couverts :** FR-001 à FR-007, FR-009 à FR-020 (18 FR).
- **Partiellement couverts :** FR-021, FR-022 (2 FR — READY WITH OBSERVATION, combinaison seule).
- **Bloqués :** FR-008 (1 FR — OPEN / BLOCKED).
- **Nécessitant une clarification :** G-002 à G-009 (voir §8).

---

## 10. AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Hallucinations | Aucune détectée — toutes les conditions et scénarios sont dérivés directement des FR/AC/US des documents sources |
| Informations inventées | Aucune détectée |
| Hypothèses non justifiées | Aucune — les zones d'incertitude sont marquées TBC (§8, §9) |
| Exigences oubliées | Aucune — les 21 FR baselinées et FR-008 (exclue) sont toutes référencées en §9 |
| Erreurs de traçabilité | Aucune détectée — le mapping FR → US → AC reprend à l'identique celui de la User Stories Baseline V1.0 §5 |
| Règles inventées pour Q8 | Aucune — FR-008/US-003 sont traitées exclusivement comme bloquées (§3, §4, §8, §9), sans aucune règle de caractères formulée |
| Comportement inventé pour les filtres individuels | Aucun — TC-COND-032, TC-COND-033, TS-009, TS-010 et §8 signalent systématiquement l'absence de définition sans la combler |

### Problèmes identifiés

| # | Problème | Impact | Action recommandée |
|---|---|---|---|
| 1 | Q8 (FR-008) reste non validée | US-003 ne peut faire l'objet d'aucune conception de test | Attendre la validation métier de Q8 avant toute conception pour FR-008/US-003 |
| 2 | Comportement individuel des filtres statut et priorité non défini | US-009 et US-010 ne sont conçues que pour le comportement de combinaison, pas pour les filtres pris séparément | Escalade vers le Product Owner pour clarification avant le Test Case Design de US-009/US-010 |
| 3 | Architecture technique, API/UI et environnement de test non définis | Impossible de préciser le niveau de test (unitaire/intégration/API/UI/E2E) pour chaque condition de test | Obtenir ces informations auprès de l'équipe technique avant le Test Case Design |
| 4 | Valeur réelle du fuseau horaire de référence (FR-014) non communiquée | La borne « date du jour » est conceptuellement définie mais non paramétrable précisément | Confirmer la configuration réelle auprès de l'équipe technique |

### Statut final

**DRAFT — TO BE VALIDATED.** Ce Test Design ne doit pas être considéré comme baseliné avant revue et validation humaine par un QA senior, et avant résolution ou acceptation formelle des gaps listés en §8.

**Next QA activity:** Revue humaine de ce Test Design, puis Test Case Design (une fois FR-008/Q8 et le comportement des filtres individuels clarifiés, ou explicitement acceptés comme limitations documentées).
