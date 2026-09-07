# SmartTodo — Defect Management (SIMULATION — EXEMPLE FICTIF)

> ⚠️ **AVERTISSEMENT :** Ce document est construit à partir de `SmartTodo-Test-Execution-SIMULATION.md`, qui est lui-même une **simulation à but pédagogique** (aucune application SmartTodo réelle n'a été testée). Les 3 défauts listés ci-dessous (DEF-FICTIF-001/002/003) sont **entièrement fictifs**. **Ce document ne doit jamais être utilisé, partagé ou baseliné comme un suivi de défauts réel.** Il n'existe à ce jour aucun défaut réel pour SmartTodo, puisque le vrai Test Execution (`SmartTodo-Test-Execution-V1.0.md`) est encore à l'état NOT RUN.

**Version:** SIMULATION
**Status:** FICTIF — NE PAS UTILISER COMME BASELINE
**AI Assistance:** Yes
**Human QA Validation:** Sans objet (données fictives)

---

## 1. Objectif

Le Defect Management documente le suivi des anomalies détectées lors de l'exécution des Test Cases, depuis leur identification jusqu'à leur clôture, en assurant la traçabilité vers l'exigence, la User Story et le Test Case d'origine.

Dans le cas présent, ce document illustre — à partir des 3 FAIL de la simulation d'exécution — la forme que prendrait un Defect Log réel, sans qu'aucun de ces défauts ne corresponde à un comportement réellement observé sur une application.

---

## 2. Defect Lifecycle

Aucun workflow de gestion des anomalies spécifique n'est défini dans les Requirements Baseline, User Stories Baseline, Test Strategy ou Test Plan au-delà du cycle générique déjà mentionné dans la Test Strategy V1.0 (§11) et le Test Plan V1.0 (§13) :

**Identify → Document → Triage → Fix → Retest → Regression → Close**

Pour ce document, ce cycle est repris tel quel, complété par les étapes usuelles de suivi (fictives dans leur application ici) :

**Open → Assigned → In Progress → Fixed → Retest → Closed / Reopened**

Les règles précises de sévérité, de priorité et de SLA de correction restent **TBC** (non définies dans les artefacts sources, cf. Test Strategy §11, G-009 ; Test Plan §13, §17 G-010).

---

## 3. Defect Log (fictif)

| Defect ID | Test Case | Requirement | User Story | Summary | Severity | Priority | Status | Evidence | Date |
|---|---|---|---|---|---|---|---|---|---|
| DEF-FICTIF-001 | TC-009 | FR-007 | US-002 | Un titre de 101 caractères est accepté à la création alors qu'il devrait être rejeté | Medium (fictif) | TBC | Open (fictif) | Résultat d'exécution simulé (TC-009, Actual Result) | 2026-09-03 |
| DEF-FICTIF-002 | TC-019 | FR-014 | US-005 | Une date d'échéance antérieure à la date du jour est acceptée alors qu'elle devrait être rejetée | High (fictif) | TBC | Open (fictif) | Résultat d'exécution simulé (TC-019, Actual Result) | 2026-09-03 |
| DEF-FICTIF-003 | TC-031 | FR-020 | US-008 | La recherche est sensible à la casse alors qu'elle devrait être insensible à la casse | Medium (fictif) | TBC | Open (fictif) | Résultat d'exécution simulé (TC-031, Actual Result) | 2026-09-03 |

**Aucun autre défaut n'est enregistré.** Les 29 autres Test Cases de la simulation sont marqués PASS et TC-032/TC-033 sont partiels (READY WITH OBSERVATION) sans FAIL associé — conformément à la règle interdisant d'enregistrer un défaut sans FAIL réellement observé (ici, simulé).

---

## 4. Defect Description

### DEF-FICTIF-001

| Champ | Valeur |
|---|---|
| Summary | Un titre de 101 caractères est accepté à la création, alors que FR-007 limite le titre à 100 caractères maximum |
| Preconditions | Un utilisateur authentifié existe |
| Test Data | DATA-TITLE-004 (titre de 101 caractères, contenu exact TBC) |
| Steps to Reproduce | 1. Créer une tâche avec un titre de 101 caractères (cf. TC-009) |
| Expected Result | La création est rejetée (FR-007) |
| Actual Result | La tâche est créée avec succès (résultat simulé) |
| Severity | Medium (fictif — non basé sur une échelle de sévérité définie dans les documents sources) |
| Priority | TBC — aucune règle de priorisation des anomalies n'est définie dans les artefacts sources |
| Environment | TBC (cf. Test Execution SIMULATION §2, environnement fictif) |
| Evidence | Ligne TC-009 du Test Execution SIMULATION |
| Traceability | FR-007 → US-002 → AC-02 → TC-009 → DEF-FICTIF-001 |
| Status | Open (fictif) |

### DEF-FICTIF-002

| Champ | Valeur |
|---|---|
| Summary | Une date d'échéance antérieure à la date du jour est acceptée, alors que FR-014 l'interdit |
| Preconditions | Un utilisateur authentifié existe |
| Test Data | DATA-DATE-003 (date d'échéance = veille de la date du jour) |
| Steps to Reproduce | 1. Créer une tâche avec une date d'échéance antérieure à aujourd'hui (cf. TC-019) |
| Expected Result | La création est rejetée (FR-014) |
| Actual Result | La tâche est créée avec succès (résultat simulé) |
| Severity | High (fictif) |
| Priority | TBC |
| Environment | TBC (fuseau horaire de référence également TBC, cf. Test Design G-009) |
| Evidence | Ligne TC-019 du Test Execution SIMULATION |
| Traceability | FR-014 → US-005 → AC-02 → TC-019 → DEF-FICTIF-002 |
| Status | Open (fictif) |

### DEF-FICTIF-003

| Champ | Valeur |
|---|---|
| Summary | La recherche ne retourne pas de résultat lorsque la casse du terme diffère de celle du contenu de la tâche, alors que FR-020 impose l'insensibilité à la casse |
| Preconditions | Une tâche existe avec un terme connu dans le titre ou la description |
| Test Data | DATA-SEARCH-003 (terme saisi dans une casse différente) |
| Steps to Reproduce | 1. Effectuer une recherche avec un terme dans une casse différente de celle enregistrée (cf. TC-031) |
| Expected Result | La tâche correspondante est retournée malgré la différence de casse (FR-020) |
| Actual Result | Aucun résultat retourné (résultat simulé) |
| Severity | Medium (fictif) |
| Priority | TBC |
| Environment | TBC |
| Evidence | Ligne TC-031 du Test Execution SIMULATION |
| Traceability | FR-020 → US-008 → AC-02 → TC-031 → DEF-FICTIF-003 |
| Status | Open (fictif) |

---

## 5. Defect Classification

| Élément | Classification | Justification |
|---|---|---|
| DEF-FICTIF-001 (TC-009) | Functional defect | Écart direct entre le comportement simulé et la règle normative de FR-007 |
| DEF-FICTIF-002 (TC-019) | Functional defect | Écart direct entre le comportement simulé et la règle normative de FR-014 |
| DEF-FICTIF-003 (TC-031) | Functional defect | Écart direct entre le comportement simulé et la règle normative de FR-020 |
| US-003 / FR-008 | Requirement gap (pas un défaut) | Q8 non validée — il ne s'agit pas d'un défaut applicatif mais d'une exigence bloquée en amont |
| US-009 / US-010 (FR-021, FR-022) | Ambiguity / clarification nécessaire (pas un défaut) | Comportement individuel des filtres non défini — TC-032/TC-033 ne peuvent pas être classés en PASS/FAIL complet, seulement en résultat partiel |
| Environnement de test (architecture, API/UI, authentification) | Environment issue / gap (pas un défaut) | Éléments non définis, empêchant de confirmer certains aspects de l'exécution (cf. Test Plan §6.2) |

Aucun des trois défauts fictifs n'est classé comme *Data issue* ou *Test blocked* : les données utilisées (Test Data V1.0) sont conformes à ce qui était attendu pour chaque Test Case, et les tests concernés n'étaient pas bloqués — ils ont simplement (dans la simulation) échoué.

---

## 6. Retest & Regression

Cycle applicable à chacun des 3 défauts fictifs, une fois une correction hypothétiquement livrée :

**Fixed → Retest → PASS/FAIL → Closed/Reopened**

- **DEF-FICTIF-001** : retest de TC-009 (titre 101 caractères) attendu après correction ; si PASS, clôture du défaut ; si FAIL, réouverture.
- **DEF-FICTIF-002** : retest de TC-019 (date passée) attendu après correction ; même logique PASS → Closed / FAIL → Reopened.
- **DEF-FICTIF-003** : retest de TC-031 (recherche insensible à la casse) attendu après correction ; même logique.

**Impact sur la régression (hérité de la Test Strategy V1.0 §12 et du Test Plan V1.0 §14) :**
- La correction de DEF-FICTIF-001 (FR-007) justifierait une régression ciblée sur l'ensemble des Test Cases de création de tâche (US-002 : TC-005 à TC-013), pour s'assurer qu'aucune autre règle de validation du titre n'a été affectée.
- La correction de DEF-FICTIF-002 (FR-014) justifierait une régression ciblée sur US-005 (TC-017 à TC-020).
- La correction de DEF-FICTIF-003 (FR-020) justifierait une régression ciblée sur US-008 (TC-029 à TC-031), et potentiellement sur US-009/US-010 si la recherche combinée aux filtres est également concernée.

Ces recommandations de régression sont fictives dans leur déclenchement (puisque les défauts eux-mêmes le sont), mais la logique de sélection reprend fidèlement la stratégie de régression définie dans les documents sources.

---

## 7. Traceability

**FR → US → AC → Test Case → Execution → Defect → Retest**

| FR | US | AC | Test Case | Execution (simulée) | Defect | Retest attendu |
|---|---|---|---|---|---|---|
| FR-007 | US-002 | AC-02 | TC-009 | FAIL | DEF-FICTIF-001 | TC-009 |
| FR-014 | US-005 | AC-02 | TC-019 | FAIL | DEF-FICTIF-002 | TC-019 |
| FR-020 | US-008 | AC-02 | TC-031 | FAIL | DEF-FICTIF-003 | TC-031 |
| FR-008 | US-003 | BLOCKED | — | BLOCKED (aucun TC) | Aucun (Requirement gap, pas un defect) | Sans objet tant que Q8 non validée |
| FR-021 | US-009 | AC-01 | TC-032 | N/A (partiel) | Aucun (Ambiguity, pas un defect) | Sans objet tant que le comportement des filtres n'est pas clarifié |
| FR-022 | US-010 | AC-01 | TC-033 | PASS (partiel) | Aucun (Ambiguity, pas un defect) | Sans objet tant que le comportement des filtres n'est pas clarifié |

Toutes les autres FR (FR-001–FR-006, FR-009–FR-013, FR-015–FR-019) correspondent à des Test Cases marqués PASS dans la simulation — **aucun défaut associé**.

---

## 8. AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Bugs inventés | Assumé et explicitement documenté — les 3 défauts proviennent intégralement de `Test-Execution-SIMULATION.md`, lui-même fictif ; aucun défaut supplémentaire n'a été ajouté au-delà des FAIL simulés |
| Bug IDs inventés | Repris à l'identique de la simulation (DEF-FICTIF-001/002/003) ; aucun nouvel ID fictif n'a été créé dans ce document |
| Résultats inventés | Aucun résultat supplémentaire n'a été inventé au-delà de ce que contenait déjà la simulation ; aucun défaut n'a été ajouté pour les 29 PASS et les 2 cas partiels (TC-032/TC-033) |
| Mauvaise classification | Aucune détectée — US-003/FR-008 et US-009/US-010 sont explicitement classées comme *Requirement gap* / *Ambiguity*, et non comme des défauts, conformément à la règle 9 du prompt |
| Confusion entre gap et defect | Évitée — §5 sépare clairement les 3 defects fonctionnels des gaps (FR-008) et ambiguïtés (FR-021/FR-022) |
| Erreurs de sévérité/priorité | Sévérité reprise telle qu'indiquée dans la simulation (fictive) ; Priorité marquée TBC partout car aucune règle de priorisation n'est définie dans les documents sources |
| Erreurs de traçabilité | Aucune détectée — le mapping FR → US → AC → TC → Defect (§7) est cohérent avec le Test Cases V1.0 et le Test Execution SIMULATION |
| Q8 / FR-008 | Traité exclusivement comme Requirement gap bloqué (§5, §7), sans aucun défaut ni règle de caractères inventée |
| Filtres (US-009/US-010) | Traités comme Ambiguity nécessitant clarification (§5, §7), sans qu'aucun comportement individuel de filtrage n'ait été inventé ou déduit |
| Incohérences avec Test Execution | Aucune détectée — les 3 FAIL, les Test Data et les TC ID correspondent exactement à ceux de `Test-Execution-SIMULATION.md` |

### Problèmes identifiés

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | L'intégralité de ce document repose sur une exécution simulée et non réelle | Aucun des 3 défauts ne peut être transmis à une équipe de développement en l'état | Ne jamais transmettre ce document tel quel ; l'utiliser uniquement comme gabarit pédagogique |
| 2 | Aucune règle de sévérité/priorité définie dans les documents sources | Les valeurs Severity/Priority restent partiellement TBC ou fictives, sans base normative | Le QA Lead humain doit définir une échelle de sévérité/priorité avant tout usage réel de ce gabarit |
| 3 | Aucun outil de suivi des anomalies défini | Le format de ce Defect Log ne peut pas être automatiquement importé dans un outil réel | Confirmer l'outil de suivi (Jira, Azure DevOps, etc.) avant la mise en place d'un vrai processus |

### Statut final

**FICTIF — SIMULATION.** Ce document ne doit pas être baseliné ni utilisé comme suivi réel. Le suivi réel des défauts ne pourra commencer qu'après une exécution effective des Test Cases sur une application SmartTodo réelle, à partir de `SmartTodo-Test-Execution-V1.0.md`.

**Next QA activity (réelle) :** Confirmation de l'environnement, exécution réelle des Test Cases, puis création d'un Defect Management basé exclusivement sur des FAIL réellement observés.
