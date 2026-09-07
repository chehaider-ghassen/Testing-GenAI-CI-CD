# SmartTodo — Test Plan

**Version:** 1.0
**Status:** Draft — To Be Validated
**Based on:** Requirements Baseline V1.0 + User Stories Baseline V1.0 + Test Strategy V1.0
**AI assistance:** Yes — human QA validation required before this document can be considered a baseline.

---

## 1. Objectif du Test Plan

Ce Test Plan définit **quoi**, **quand**, **où**, **par qui** et **dans quelles conditions** les tests seront réalisés pour SmartTodo, en cohérence avec la Test Strategy V1.0.

Il ne redéfinit aucune nouvelle stratégie de test et ne contient aucun cas de test détaillé — ces éléments relèvent respectivement de la Test Strategy V1.0 (déjà établie) et de l'étape ultérieure de Test Case Design.

Ce document s'appuie exclusivement sur :
- Requirements Baseline V1.0 (RB-SMARTTODO-V1.0)
- User Stories Baseline V1.0
- Test Strategy V1.0

Toute information non présente dans ces trois documents est marquée **To Be Confirmed (TBC)**.

---

## 2. Références

| Document | Version | Statut |
|---|---|---|
| Requirements Baseline V1.0 | 1.0 | APPROVED WITH EXCLUSION |
| User Stories Baseline V1.0 | 1.0 | BASELINED |
| Test Strategy V1.0 | 1.0 | Draft — To Be Validated |

**Remarque :** la Test Strategy V1.0 étant elle-même encore en statut Draft — To Be Validated, ce Test Plan hérite de la même limitation : il ne peut être baseliné tant que la Test Strategy ne l'a pas été.

---

## 3. Périmètre des tests

### 3.1 In Scope

Les 21 exigences fonctionnelles baselinées (FR-001 à FR-007, FR-009 à FR-022) et les User Stories associées :

| User Story | FR couvertes | Statut US |
|---|---|---|
| US-001 | FR-001, FR-002 | READY |
| US-002 | FR-004, FR-006, FR-007, FR-009, FR-010 | READY |
| US-004 | FR-011, FR-012 | READY |
| US-005 | FR-013, FR-014, FR-015 | READY |
| US-006 | FR-003, FR-005 | READY |
| US-007 | FR-016, FR-017, FR-018 | READY |
| US-008 | FR-019, FR-020 | READY |
| US-009 | FR-021 | READY WITH OBSERVATION |
| US-010 | FR-022 | READY WITH OBSERVATION |

### 3.2 Out of Scope

| Item | Raison | Statut |
|---|---|---|
| FR-008 | Source business decision Q8 non validée | **OPEN / BLOCKED — exclu du périmètre de test** |
| US-003 | Dérivée de FR-008 | **BLOCKED — exclu du périmètre de test** |

**Règle d'exécution stricte :** aucun cas de test, donnée de test, critère d'acceptation ou règle de validation ne doit être conçu ou exécuté pour FR-008 / US-003 tant que Q8 n'a pas été validée par le métier.

### 3.3 Périmètre partiellement testable (Ready With Observation)

| Item | Limitation | Statut |
|---|---|---|
| US-009 (FR-021 — combinaison statut + priorité) | Comportement individuel du filtre statut et du filtre priorité non défini dans les FR baselinées | **READY WITH OBSERVATION — testable uniquement pour le comportement de combinaison explicitement décrit** |
| US-010 (FR-022 — combinaison recherche + filtres) | Dépend du même gap que US-009, ainsi que du comportement de recherche seule (FR-019/FR-020, celui-ci étant défini) | **READY WITH OBSERVATION — testable uniquement pour le comportement de combinaison explicitement décrit** |

Aucun comportement de filtre individuel ne doit être défini implicitement par l'équipe de test pour permettre l'exécution de ces tests — voir §16 (Gaps).

### 3.4 Items à tester

| Item | Description | Source |
|---|---|---|
| Propriété et confidentialité des tâches | Isolation des données entre utilisateurs | FR-001, FR-002 / US-001 |
| Création d'une tâche | Titre, description, statut par défaut | FR-004, FR-006, FR-007, FR-009, FR-010 / US-002 |
| Priorité | Valeurs autorisées et caractère obligatoire | FR-011, FR-012 / US-004 |
| Date d'échéance | Facultatif, interdiction du passé, sans heure | FR-013, FR-014, FR-015 / US-005 |
| Statut et transitions | Deux statuts, deux transitions autorisées uniquement | FR-003, FR-005 / US-006 |
| Suppression | Confirmation, annulation, définitive, non restaurable | FR-016, FR-017, FR-018 / US-007 |
| Recherche | Titre + description, insensible à la casse | FR-019, FR-020 / US-008 |
| Filtres combinés | Statut + priorité simultanés | FR-021 / US-009 |
| Recherche + filtres combinés | Recherche et filtres simultanés | FR-022 / US-010 |

---

## 4. Approche de test

Cette section applique — sans les redéfinir — les niveaux et types de test établis dans la Test Strategy V1.0 (§3 et §4).

### 4.1 Niveaux de test

| Niveau | Applicabilité à SmartTodo | Statut |
|---|---|---|
| Unit Testing | Pertinent pour les règles de validation unitaires (longueur titre/description, valeurs énumérées) | TBC — dépend de l'architecture technique, non définie dans les artefacts |
| Integration Testing | Pertinent si des composants distincts interagissent (ex. création + statut par défaut) | TBC |
| API Testing | Pertinent uniquement si une API existe | TBC — existence d'une API non confirmée |
| UI Testing | Pertinent uniquement si une interface UI existe | TBC — existence d'une UI non confirmée |
| System / E2E Testing | Pertinent pour valider les parcours fonctionnels complets (ex. créer → rechercher → filtrer → supprimer) | TBC, mais conceptuellement applicable à la plupart des US |

Conformément à la Test Strategy, aucun niveau technique n'est confirmé tant que l'architecture applicative n'est pas communiquée.

### 4.2 Types de tests applicables (hérités de la Test Strategy)

| Type | Priorité | FR / US concernées |
|---|---|---|
| Functional Testing | High | Toutes les FR in scope |
| Negative Testing | High | US-001, US-002, US-004, US-005, US-006 |
| Boundary Value Testing | High | FR-007 (titre 1–100), FR-010 (description 500) |
| State Transition Testing | High | FR-003, FR-005 / US-006 |
| Regression Testing | High | Ensemble du périmètre in scope |
| Decision Table Testing | Medium | FR-021, FR-022 (sous réserve du gap filtres individuels) |
| Security-related Functional Testing | High | FR-001, FR-002 / US-001 |
| Exploratory Testing | Medium | Complémentaire, selon disponibilité de l'application |
| Performance Testing | TBC | Aucun objectif défini |
| Usability Testing | TBC | Aucun critère défini |

Ce Test Plan n'introduit aucun type de test additionnel non présent dans la Test Strategy V1.0.

---

## 5. Fonctionnalités à couvrir (mapping FR → US → AC)

Le mapping ci-dessous reprend intégralement la Traceability Baseline de User Stories Baseline V1.0 (§5), à laquelle est ajoutée une priorité/risque héritée de la Test Strategy (§6, Tests basés sur les risques) lorsque celle-ci est définie.

| FR | US | AC Coverage | Priorité / Risque associé | Statut |
|---|---|---|---|---|
| FR-001 | US-001 | AC-01 | High (R-001) | READY |
| FR-002 | US-001 | AC-02 | High (R-001) | READY |
| FR-003 | US-006 | AC-01 | Medium (R-002) | READY |
| FR-004 | US-002 | AC-05 | Medium (R-003) | READY |
| FR-005 | US-006 | AC-02, AC-03, AC-04 | Medium (R-002) | READY |
| FR-006 | US-002 | AC-01 | Medium (R-003) | READY |
| FR-007 | US-002 | AC-02 | Medium (R-003) | READY |
| FR-008 | US-003 | BLOCKED | Non applicable | **OPEN / BLOCKED — exclu** |
| FR-009 | US-002 | AC-03 | TBC (non repris explicitement dans R-001 à R-008) | READY |
| FR-010 | US-002 | AC-04 | Medium (R-003) | READY |
| FR-011 | US-004 | AC-02 | TBC | READY |
| FR-012 | US-004 | AC-01 | Medium (R-003) | READY |
| FR-013 | US-005 | AC-01 | TBC | READY |
| FR-014 | US-005 | AC-02 | Medium (R-004) | READY |
| FR-015 | US-005 | AC-03 | TBC | READY |
| FR-016 | US-007 | AC-02 | High (R-005) | READY |
| FR-017 | US-007 | AC-01, AC-02, AC-03 | High (R-005) | READY |
| FR-018 | US-007 | AC-04 | Medium (R-006) | READY |
| FR-019 | US-008 | AC-01 | Medium (R-007) | READY |
| FR-020 | US-008 | AC-02 | Medium (R-007) | READY |
| FR-021 | US-009 | AC-01 | Medium (R-008) | READY WITH OBSERVATION |
| FR-022 | US-010 | AC-01 | Medium (R-008) | READY WITH OBSERVATION |

**Remarque sur la couverture AC :** ce Test Plan reprend le nombre d'AC déclaré dans la User Stories Baseline V1.0 (§5). Le contenu détaillé de ces Acceptance Criteria n'est pas reproduit ici (il appartient à la User Stories Baseline elle-même) et n'est donc pas vérifié ligne à ligne dans ce document — cette vérification relève de l'étape de Test Case Design.

---

## 6. Environnement de test

### 6.1 Éléments confirmés

| Élément | Statut |
|---|---|
| Existence de plusieurs utilisateurs distincts avec des tâches propres (nécessaire pour FR-001/FR-002) | Confirmé — découle directement de l'exigence |
| Existence de statuts, priorités et dates d'échéance comme attributs de tâche | Confirmé — découle des FR baselinées |

### 6.2 Éléments TBC

| Élément | Statut |
|---|---|
| Architecture applicative (monolithe, microservices, etc.) | TBC |
| Existence et nature d'une API | TBC |
| Existence et nature d'une interface UI | TBC |
| Base de données utilisée | TBC |
| Mécanisme d'authentification des utilisateurs | TBC |
| Navigateurs / OS supportés | TBC |
| Environnements disponibles (dev, staging, préprod, etc.) | TBC |
| Fuseau horaire de référence pour FR-014 (« configuré pour l'application ») | TBC — le principe est confirmé (dépendance à un fuseau horaire configurable), mais la valeur/configuration réelle ne l'est pas |

Aucun de ces éléments ne peut être confirmé sans information technique complémentaire fournie par l'équipe projet.

---

## 7. Données de test

Reprises telles que définies dans la Test Strategy V1.0 (§7), sans ajout :

- Plusieurs utilisateurs authentifiés, avec tâches propres à chacun (FR-001, FR-002).
- Titres valides et invalides selon la longueur (1–100 caractères) (FR-007).
- Descriptions absentes, jusqu'à 500 caractères, et dépassant 500 caractères (FR-009, FR-010).
- Priorités : Basse, Moyenne, Haute (FR-011, FR-012).
- Statuts : À faire, Terminée (FR-003, FR-004).
- Dates d'échéance valides (aujourd'hui, futures) et invalides (passées) (FR-013, FR-014, FR-015).
- Termes de recherche présents dans le titre et/ou la description, en différentes casses (FR-019, FR-020).
- Combinaisons de filtres statut + priorité (FR-021).
- Combinaisons recherche + filtres (FR-022).

**Exclusion explicite :** aucune donnée de test relative aux caractères autorisés/interdits dans le titre ne doit être créée pour FR-008 (Q8 non validée).

**Limitation signalée :** les données nécessaires pour tester le comportement d'un filtre statut seul ou d'un filtre priorité seul ne peuvent pas être définies tant que ce comportement individuel n'est pas spécifié (voir §16, Gaps).

---

## 8. Rôles et responsabilités

| Rôle | Responsabilité | Statut |
|---|---|---|
| QA Lead / Senior QA Engineer (humain) | Validation finale de ce Test Plan, arbitrage des gaps, décision sur les risques résiduels | Confirmé comme obligatoire (contrainte projet) |
| QA Engineer(s) | Conception et exécution des cas de test, une fois ce plan validé | TBC — nombre et affectation non définis |
| Product Owner / Métier | Validation de Q8, arbitrage du comportement des filtres individuels | Confirmé comme nécessaire (dépendance directe) |
| Équipe de développement | Correction des anomalies, support à la reproduction | TBC — organisation non définie |
| Assistant QA (GenAI/LLM) | Support à l'analyse, à la génération de scénarios candidats et à la traçabilité — jamais décisionnaire | Confirmé, conformément à la Test Strategy §14 |

Les noms, affectations nominatives et charges de travail restent **TBC**.

---

## 9. Planning et activités de test

| Activité | Dépendance | Statut |
|---|---|---|
| Validation humaine de la Test Strategy V1.0 | Préalable à ce Test Plan | TBC — en attente |
| Validation humaine de ce Test Plan | Préalable au Test Case Design | TBC — en attente |
| Conception des cas de test (Test Case Design) | Test Plan validé | Non commencé |
| Préparation de l'environnement et des données de test | Environnement confirmé (§6.2) | Non commencé — bloqué par les TBC |
| Exécution des tests | Critères d'entrée satisfaits (§10) | Non commencé |
| Cycle de gestion des anomalies | Tests exécutés | Non commencé |
| Tests de régression | Selon changements | Non commencé |

**Aucune date, durée ou jalon calendaire n'est définie dans les artefacts sources.** L'ensemble du planning détaillé (dates de début/fin, jalons, durée par activité) est **TBC**.

---

## 10. Critères d'entrée

Repris et précisés à partir de la Test Strategy V1.0 (§9) :

- Requirements Baseline V1.0 disponible et approuvée — **Confirmé** (statut APPROVED WITH EXCLUSION).
- User Stories Baseline V1.0 disponible — **Confirmé** (statut BASELINED).
- Test Strategy V1.0 validée par le QA humain — **TBC** (statut actuel : Draft — To Be Validated).
- Ce Test Plan validé par le QA humain — **TBC** (statut actuel : Draft — To Be Validated).
- Environnement de test disponible — **TBC** (voir §6.2).
- Données de test disponibles — **TBC**, à préparer une fois l'environnement confirmé.
- FR-008 / US-003 explicitement exclues du périmètre d'exécution — **Confirmé**, condition intégrée à ce plan.
- Gap sur le comportement des filtres individuels documenté et communiqué au Product Owner — **Confirmé** comme action nécessaire (voir §16), mais réponse du Product Owner **TBC**.

**Conclusion :** les critères d'entrée ne sont pas encore tous satisfaits ; l'exécution des tests ne peut pas commencer avant validation humaine de la Test Strategy et de ce Test Plan.

---

## 11. Critères de suspension / reprise

Aucun critère de suspension/reprise n'est défini dans les documents sources (Requirements Baseline, User Stories Baseline, Test Strategy). Cette section est donc entièrement **To Be Confirmed**.

À titre indicatif, les situations suivantes constituent des candidats naturels de suspension, à valider par le QA humain :
- Blocage d'un critère d'entrée (§10) non résolu.
- Anomalie critique bloquant l'exécution d'un parcours de test majeur (ex. impossibilité de créer une tâche).
- Environnement de test indisponible ou instable.

Les critères de reprise correspondants, ainsi que les responsables de la décision, restent **TBC**.

---

## 12. Critères de sortie

Repris de la Test Strategy V1.0 (§10), sans ajout de seuil quantitatif :

- Tests planifiés exécutés pour l'ensemble du périmètre in scope (§3.1).
- Anomalies critiques/majeures traitées selon les règles projet (règles elles-mêmes **TBC**, voir §13).
- Régression nécessaire exécutée (voir §14).
- Blockers documentés, notamment FR-008/US-003 (exclu) et le gap des filtres individuels (US-009/US-010).
- Traçabilité FR → US → AC → Test Case vérifiée.
- Risques résiduels documentés et, si nécessaire, formellement acceptés par le QA humain / Product Owner.

**Aucun seuil quantitatif** (taux de réussite, pourcentage de couverture, nombre maximal d'anomalies ouvertes) n'est défini dans les artefacts disponibles — reste **TBC**.

---

## 13. Gestion des anomalies

Cycle repris de la Test Strategy V1.0 (§11), sans modification :

**Identify → Document → Triage → Fix → Retest → Regression → Close**

Chaque anomalie doit a minima documenter :
- la fonctionnalité concernée (avec référence FR/US) ;
- les étapes de reproduction ;
- les données utilisées ;
- le résultat attendu (basé sur la FR/AC correspondante) ;
- le résultat obtenu ;
- les éléments de traçabilité disponibles.

**TBC :** règles précises de sévérité, de priorité, SLA de correction, outil de suivi des anomalies — aucun de ces éléments n'est défini dans les artefacts sources.

---

## 14. Stratégie de régression

Reprise telle que définie dans la Test Strategy V1.0 (§12), sans redéfinition :

La régression est pilotée par l'impact des changements et les risques, avec une attention prioritaire portée sur :
1. Propriété et isolation des tâches (FR-001, FR-002).
2. Création et validation des tâches (FR-004, FR-006, FR-007, FR-009, FR-010).
3. Statut et transitions (FR-003, FR-005).
4. Priorité (FR-011, FR-012).
5. Date d'échéance (FR-013, FR-014, FR-015).
6. Suppression (FR-016, FR-017, FR-018).
7. Recherche (FR-019, FR-020).
8. Filtres et combinaisons recherche/filtres (FR-021, FR-022) — sous réserve du gap signalé en §16.

Le périmètre exact de chaque campagne de régression dépendra de l'analyse d'impact du changement concerné — non détaillé plus avant dans ce plan (cohérent avec la Test Strategy).

---

## 15. Automatisation

Reprise des critères de la Test Strategy V1.0 (§13), sans nouvelle stratégie :

Sont de bons candidats à l'automatisation les scénarios : stables, répétables, déterministes, fréquemment exécutés, à risque fonctionnel important — notamment ceux couvrant FR-001/FR-002 (isolation), FR-003/FR-005 (transitions), FR-007/FR-010 (bornes), FR-016/FR-017/FR-018 (suppression).

Les tests exploratoires et les comportements non encore définis (filtres individuels, FR-008) restent manuels par nature, puisqu'aucun comportement automatisable n'existe encore pour eux.

**TBC :** framework d'automatisation, outillage, environnement CI/CD — aucun n'est défini dans les artefacts sources.

---

## 16. Risques, hypothèses et dépendances

### 16.1 Risques (hérités de la Test Strategy V1.0, §6)

| ID | Risque | Impact | FR / US |
|---|---|---|---|
| R-001 | Accès ou modification d'une tâche appartenant à un autre utilisateur | High | FR-001/002, US-001 |
| R-002 | Transition de statut non autorisée | Medium | FR-003/005, US-006 |
| R-003 | Validation incorrecte des champs obligatoires ou limites | Medium | FR-006/007/010/012 |
| R-004 | Acceptation d'une date d'échéance passée | Medium | FR-014 |
| R-005 | Suppression incorrecte d'une tâche | High | FR-016/017, US-007 |
| R-006 | Restauration d'une tâche supprimée | Medium | FR-018 |
| R-007 | Recherche incorrecte | Medium | FR-019/020 |
| R-008 | Combinaison incorrecte des filtres/recherche | Medium | FR-021/022 |

### 16.2 Hypothèses

**Aucune hypothèse fonctionnelle n'est formulée dans ce Test Plan.** Toute zone d'incertitude est explicitement marquée TBC plutôt que comblée par une hypothèse (conformément à la règle projet).

Une seule hypothèse d'organisation est notée, et doit être confirmée par le QA humain :
- **Hypothèse (à confirmer) :** ce Test Plan suppose que la validation humaine de la Test Strategy V1.0 et de ce Test Plan interviendra avant tout début d'exécution de test, conformément aux règles de gouvernance déjà énoncées dans les deux documents. Ce n'est pas une règle métier mais une hypothèse de séquencement de gouvernance projet.

### 16.3 Dépendances

| Dépendance | Impact si non résolue |
|---|---|
| Validation de Q8 par le métier | FR-008/US-003 restent exclues indéfiniment du périmètre de test |
| Décision du Product Owner sur le comportement des filtres individuels | US-009/US-010 ne peuvent être testées que partiellement |
| Communication de l'architecture technique et de l'environnement | Impossible de confirmer les niveaux de test, l'outillage et la stratégie d'automatisation détaillée |
| Validation humaine de la Test Strategy V1.0 | Ce Test Plan ne peut pas être baseliné tant que la Test Strategy ne l'est pas |

---

## 17. Gaps / Questions ouvertes

Repris et complétés à partir de la Test Strategy V1.0 (§16), sans invention de réponse :

| ID | Gap / Question | Impact sur le Test Plan | Statut |
|---|---|---|---|
| G-001 | Caractères autorisés/interdits dans le titre (Q8) | FR-008/US-003 hors périmètre de test | OPEN / BLOCKED |
| G-002 | Comportement individuel du filtre statut | US-009 testable uniquement pour la combinaison, pas pour le filtre seul | To Be Confirmed |
| G-003 | Comportement individuel du filtre priorité | US-009 testable uniquement pour la combinaison, pas pour le filtre seul | To Be Confirmed |
| G-004 | Comportement de la recherche seule sans filtre (bien que FR-019/020 la définissent, sa combinaison dans US-010 dépend aussi de G-002/G-003) | US-010 testable uniquement pour la combinaison explicitement décrite | To Be Confirmed |
| G-005 | Interfaces API/UI | Empêche de confirmer les niveaux de test (§4.1) | To Be Confirmed |
| G-006 | Architecture technique | Empêche de définir précisément l'environnement et l'automatisation | To Be Confirmed |
| G-007 | Environnement de test (infra, accès, configuration) | Empêche la préparation des données et l'exécution | To Be Confirmed |
| G-008 | Navigateurs / OS supportés | Compatibilité non définie | To Be Confirmed |
| G-009 | Mécanisme d'authentification | Détails techniques nécessaires pour tester FR-001/FR-002 en pratique | To Be Confirmed |
| G-010 | Règles de sévérité/priorité des anomalies | Processus de gestion des anomalies incomplet (§13) | To Be Confirmed |
| G-011 | Seuils quantitatifs de sortie | Critères de sortie (§12) non quantifiés | To Be Confirmed |
| G-012 | Planning et jalons | Aucune date ni durée définie (§9) | To Be Confirmed |
| G-013 | Statut de validation de la Test Strategy V1.0 | Ce Test Plan ne peut être baseliné avant cette validation | Draft — To Be Validated |

---

## 18. Traçabilité

Chaîne cible, identique à celle de la Test Strategy V1.0 :

**Business Decision → Functional Requirement → User Story → Acceptance Criteria → Test Case → Test Execution → Defect**

| Niveau | Statut à ce stade |
|---|---|
| Business Decisions (Q1–Q22) | Q1–Q7, Q9–Q22 validées ; Q8 OPEN |
| Functional Requirements (FR-001–FR-022) | 21 BASELINED ; FR-008 EXCLUDED/BLOCKED |
| User Stories (US-001–US-010) | 8 READY, 2 READY WITH OBSERVATION (US-009, US-010), 1 BLOCKED (US-003) |
| Acceptance Criteria | Définis dans User Stories Baseline V1.0 (référencés par ID dans §5 de ce plan, contenu non reproduit ici) |
| Test Cases | **Non encore générés** — hors périmètre de ce document |
| Test Execution | Non commencée |
| Defects | Aucun à ce stade |

Ce Test Plan ne casse ni ne modifie la chaîne de traçabilité établie par les documents baselinés ; il la prolonge jusqu'au niveau planification.

---

## 19. AI Self-Review

Cette revue vérifie explicitement l'absence des problèmes suivants avant finalisation du document.

| Point de vérification | Résultat | Détail |
|---|---|---|
| Hallucinations | Aucune détectée | Toutes les informations proviennent de Requirements Baseline V1.0, User Stories Baseline V1.0 et Test Strategy V1.0. Aucun élément technique (architecture, outillage, planning) n'a été inventé — tous marqués TBC. |
| Informations inventées | Aucune détectée | Les données de test, risques et types de test repris sont strictement ceux de la Test Strategy V1.0, sans ajout de contenu nouveau non dérivable des sources. |
| Hypothèses non justifiées | Une seule hypothèse notée (§16.2), de nature organisationnelle (séquencement de validation), explicitement signalée comme hypothèse à confirmer — pas une hypothèse fonctionnelle ou métier. |
| Exigences oubliées | Aucune détectée | Les 21 FR baselinées (FR-001–FR-007, FR-009–FR-022) sont toutes reprises dans le mapping §5. FR-008 est explicitement traitée comme exclue. |
| Mauvaise interprétation des exigences | Aucune détectée | Le contenu normatif des FR n'a pas été reformulé ni réinterprété ; seules les références (FR-ID, US-ID, AC-ID) et statuts déjà établis sont repris. |
| Propagation d'ambiguïtés | Contrôlée | Le gap sur le comportement individuel des filtres statut/priorité (G-002, G-003, G-004) est signalé comme limitation explicite de US-009/US-010, sans qu'aucun comportement de filtre individuel n'ait été défini, supposé ou simulé. |
| Erreurs de traçabilité | Aucune détectée | Le mapping FR → US → AC (§5) est identique à celui de la User Stories Baseline V1.0, §5 ; aucune correspondance n'a été modifiée, ajoutée ou supprimée. |
| Règles inventées pour Q8 / FR-008 | Aucune détectée | FR-008/US-003 sont traitées exclusivement comme "hors périmètre / exclu" (§3.2), sans qu'aucune règle de caractères autorisés/interdits n'ait été formulée, même implicitement, dans les sections Données de test (§7), Environnement (§6) ou Risques (§16). |
| Comportement inventé des filtres individuels | Aucune détectée | §3.3, §7 et §17 signalent systématiquement l'absence de définition du comportement individuel des filtres statut/priorité, sans combler ce vide par une supposition. |
| Incohérences avec la Test Strategy | Aucune détectée | Les niveaux de test, types de test, techniques, risques, gestion des anomalies, régression et automatisation sont repris à l'identique depuis la Test Strategy V1.0, sans introduction de nouvelle stratégie. |
| Couverture des US READY | Confirmée | US-001, US-002, US-004, US-005, US-006, US-007, US-008 intégralement couvertes dans le mapping §5 et le périmètre §3.1. |
| Couverture des US READY WITH OBSERVATION | Confirmée avec limitation explicite | US-009 et US-010 sont incluses dans le périmètre (§3.1) mais leur testabilité est limitée et documentée (§3.3, §16, §17) sans invention de comportement manquant. |
| Couverture des US BLOCKED | Confirmée comme exclue | US-003 est explicitement exclue du périmètre de test (§3.2), cohérent avec son statut BLOCKED dans la User Stories Baseline V1.0. |

### Problèmes détectés (Issue → Impact → Action recommandée)

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | La Test Strategy V1.0 référencée n'est elle-même pas encore validée par un QA humain (statut Draft) | Ce Test Plan hérite de la même limitation de statut et ne peut pas non plus être baseliné | Faire valider la Test Strategy V1.0 avant ou en parallèle de la validation de ce Test Plan |
| 2 | Absence quasi totale d'informations sur l'environnement technique (API, UI, architecture, authentification) | Empêche de finaliser les niveaux de test (§4.1), l'environnement (§6.2) et l'automatisation détaillée (§15) | Obtenir ces informations auprès de l'équipe technique avant le Test Case Design |
| 3 | Gap sur le comportement individuel des filtres statut/priorité, hérité de la Test Strategy et de la User Stories Baseline | US-009/US-010 ne peuvent être testées que partiellement ; risque de sous-couverture fonctionnelle si le gap n'est jamais arbitré | Escalade formelle vers le Product Owner pour clarification ou nouvelle décision métier |
| 4 | Aucun seuil quantitatif de sortie, aucune règle de sévérité/priorité des anomalies, aucun planning défini | Empêche de finaliser complètement §9, §12, §13 | Ces éléments doivent être définis par le QA Lead / Project Manager humain, hors capacité de ce document basé uniquement sur les artefacts fournis |

---

## 20. Test Plan Status

**DRAFT — TO BE VALIDATED**

Ce Test Plan ne doit pas être considéré comme baseliné avant :
1. Validation humaine de la Test Strategy V1.0 (actuellement également Draft).
2. Revue et validation humaine de ce Test Plan par un QA senior.
3. Résolution ou acceptation formelle des gaps listés en §17, notamment G-001 (Q8) et G-002/G-003/G-004 (filtres individuels).

**Next QA activity:** QA Review humaine de ce Test Plan, puis Test Case Design (une fois le plan validé).
