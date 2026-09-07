# SmartTodo — Test Data

**Version:** 1.0
**Status:** Draft — To Be Validated
**AI Assistance:** Yes
**Human QA Validation:** Required

---

## 1. Objectif

Le Test Data documente les **données nécessaires à l'exécution des Test Cases** définis dans `SmartTodo — Test Cases V1.0`. Il ne redéfinit aucune règle métier ni aucun comportement : il se limite à cataloguer, pour chaque catégorie de champ (titre, description, priorité, statut, date d'échéance, recherche, utilisateur), les valeurs concrètes ou les caractéristiques de valeurs nécessaires pour couvrir les scénarios positifs, négatifs et limites déjà identifiés.

Ce document s'appuie exclusivement sur les Requirements Baseline V1.0, User Stories Baseline V1.0, Test Strategy V1.0, Test Plan V1.0, Test Design V1.0 et Test Cases V1.0. Toute donnée non déductible de ces sources est marquée **TBC**.

Conformément aux règles projet :
- Aucune donnée relative aux caractères autorisés/interdits dans le titre (Q8 / FR-008) n'est produite.
- Aucun comportement individuel des filtres statut/priorité n'est défini via les données proposées.
- La validation humaine par un QA senior est obligatoire avant toute utilisation en exécution.

---

## 2. Principes de Test Data

- **Traçabilité systématique :** chaque donnée référence explicitement le(s) Test Case(s), la Requirement et la User Story qu'elle sert à couvrir.
- **Fidélité aux bornes définies :** les valeurs limites (1/100 caractères pour le titre, 500 caractères pour la description, date du jour pour l'échéance) sont reprises telles que définies dans les FR, sans extrapolation.
- **Non-invention du contenu exact :** lorsque seule une longueur ou une catégorie est définie par les FR (ex. « titre de 100 caractères »), le contenu textuel précis n'est pas fourni par les documents sources et reste **TBC** — à définir par le QA humain lors de la préparation concrète des jeux de données.
- **Exclusion stricte de FR-008 :** aucune donnée de titre ne teste ou ne présuppose une règle de caractères autorisés/interdits ; les titres utilisés ailleurs sont considérés génériques et neutres vis-à-vis de Q8.
- **Non-invention du comportement des filtres individuels :** les données de filtres ne couvrent que la possibilité de combinaison (FR-021, FR-022), sans valeur de résultat attendu détaillé.
- **Isolation multi-utilisateur :** au moins deux identités utilisateur distinctes sont nécessaires pour couvrir FR-001/FR-002, sans que le mécanisme d'authentification concret soit défini.

---

## 3. Test Data Catalog

| Data ID | Data Type | Valeur / Exemple | Usage | Test Case | Requirement | Statut |
|---|---|---|---|---|---|---|
| DATA-USR-001 | User / Ownership | Utilisateur A (authentifié) — identifiant technique TBC | Propriétaire d'une tâche créée | TC-001, TC-002, TC-003, TC-004 | FR-001, FR-002 | TBC (mécanisme d'authentification non défini) |
| DATA-USR-002 | User / Ownership | Utilisateur B (authentifié, distinct de A) — identifiant technique TBC | Tentative d'accès à une tâche d'un autre utilisateur | TC-002, TC-003, TC-004 | FR-002 | TBC |
| DATA-TITLE-001 | Title (Boundary — valid, low) | Titre de 1 caractère — contenu exact TBC | Validation de la borne basse de longueur du titre | TC-006 | FR-007 | TBC (contenu exact) |
| DATA-TITLE-002 | Title (Boundary — valid, high) | Titre de 100 caractères — contenu exact TBC | Validation de la borne haute de longueur du titre | TC-007 | FR-007 | TBC (contenu exact) |
| DATA-TITLE-003 | Title (Negative) | Titre absent / chaîne vide (0 caractère) | Validation du caractère obligatoire et de la borne basse invalide | TC-005, TC-008 | FR-006, FR-007 | Défini (valeur = absence) |
| DATA-TITLE-004 | Title (Boundary — invalid) | Titre de 101 caractères — contenu exact TBC | Validation du rejet au-delà de la borne haute | TC-009 | FR-007 | TBC (contenu exact) |
| DATA-TITLE-005 | Title (Normal / valid) | Titre valide générique, longueur comprise entre 1 et 100 caractères — contenu exact TBC | Titre de référence pour les Test Cases ne portant pas spécifiquement sur la longueur du titre | TC-001, TC-010, TC-011, TC-013, TC-014, TC-015, TC-016, TC-017, TC-018, TC-019, TC-020 | FR-006, FR-007 | TBC (contenu exact) |
| DATA-DESC-001 | Description (Normal — absent) | Description absente | Validation du caractère facultatif de la description | TC-010, TC-017 | FR-009 | Défini (valeur = absence) |
| DATA-DESC-002 | Description (Boundary — valid, high) | Description de 500 caractères — contenu exact TBC | Validation de la borne haute de longueur de la description | TC-011 | FR-010 | TBC (contenu exact) |
| DATA-DESC-003 | Description (Boundary — invalid) | Description de 501 caractères — contenu exact TBC | Validation du rejet au-delà de la borne haute | TC-012 | FR-010 | TBC (contenu exact) |
| DATA-PRIO-001 | Priority (Negative) | Priorité absente | Validation du caractère obligatoire de la priorité | TC-014 | FR-012 | Défini (valeur = absence) |
| DATA-PRIO-002 | Priority (Normal — valid) | « Basse » | Validation des valeurs de priorité acceptées | TC-015 | FR-011 | Défini |
| DATA-PRIO-003 | Priority (Normal — valid) | « Moyenne » | Validation des valeurs de priorité acceptées | TC-015 | FR-011 | Défini |
| DATA-PRIO-004 | Priority (Normal — valid) | « Haute » | Validation des valeurs de priorité acceptées | TC-015 | FR-011 | Défini |
| DATA-PRIO-005 | Priority (Negative) | Valeur hors « Basse / Moyenne / Haute » — valeur exacte TBC | Validation du rejet d'une valeur de priorité non listée | TC-016 | FR-011 | TBC (valeur exacte non définie par les FR) |
| DATA-STATUS-001 | Status (Normal — valid) | « À faire » | Statut par défaut / point de départ des transitions | TC-013, TC-021, TC-022 | FR-003, FR-004, FR-005 | Défini |
| DATA-STATUS-002 | Status (Normal — valid) | « Terminée » | Statut cible / point de départ de la transition inverse | TC-021, TC-023 | FR-003, FR-005 | Défini |
| DATA-STATUS-003 | Status Transition (Negative) | Transition autre que « À faire → Terminée » ou « Terminée → À faire » — valeur exacte TBC (seuls deux statuts existent, cf. Test Design §6) | Validation du rejet de toute transition non autorisée | TC-024 | FR-005 | TBC (nature exacte de la transition testée) |
| DATA-DATE-001 | Due Date (Normal — absent) | Date d'échéance absente | Validation du caractère facultatif de la date d'échéance | TC-017 | FR-013 | Défini (valeur = absence) |
| DATA-DATE-002 | Due Date (Boundary — valid) | Date d'échéance = date du jour, selon le fuseau horaire configuré de l'application | Validation de la borne autorisée la plus proche (aujourd'hui) | TC-018 | FR-014 | TBC (valeur/configuration réelle du fuseau horaire non communiquée) |
| DATA-DATE-003 | Due Date (Negative) | Date d'échéance = veille de la date du jour (date passée) | Validation du rejet d'une date antérieure à aujourd'hui | TC-019 | FR-014 | Défini (relatif à DATA-DATE-002) |
| DATA-DATE-004 | Due Date (Normal — valid) | Date d'échéance valide, sans composante horaire | Validation de l'absence de composante horaire enregistrée | TC-020 | FR-015 | Défini (format) |
| DATA-SEARCH-001 | Search Term | Terme présent dans le titre d'une tâche existante | Validation de la recherche sur le titre | TC-029 | FR-019 | TBC (contenu exact du terme) |
| DATA-SEARCH-002 | Search Term | Terme présent dans la description d'une tâche existante | Validation de la recherche sur la description | TC-030 | FR-019 | TBC (contenu exact du terme) |
| DATA-SEARCH-003 | Search Term (Case variant) | Même terme que DATA-SEARCH-001/002, saisi dans une casse différente (ex. majuscules vs minuscules) | Validation de l'insensibilité à la casse | TC-031 | FR-020 | TBC (contenu exact du terme) |
| DATA-FILTER-001 | Filter Combination | Une valeur de statut + une valeur de priorité, appliquées simultanément — valeurs individuelles et résultat détaillé TBC | Validation de la possibilité de combiner les filtres statut + priorité | TC-032 | FR-021 | TBC (comportement individuel des filtres non défini) |
| DATA-FILTER-002 | Search + Filter Combination | Un terme de recherche + une valeur de statut + une valeur de priorité, appliqués simultanément — valeurs individuelles et résultat détaillé TBC | Validation de la possibilité de combiner recherche et filtres | TC-033 | FR-022 | TBC (comportement individuel des filtres non défini) |
| DATA-TASK-DEL-001 | Task (existing) | Tâche existante quelconque (titre/description/priorité/statut valides — contenu exact TBC) | Support à la demande de suppression, confirmation et annulation | TC-025, TC-026, TC-027 | FR-016, FR-017 | TBC (contenu exact de la tâche) |
| DATA-TASK-DEL-002 | Task (deleted state) | Tâche ayant fait l'objet d'une suppression définitive confirmée (résultat de TC-026) | Vérification de la non-restauration | TC-028 | FR-018 | Défini (état = supprimée) |

---

## 4. Boundary & Negative Data

| Champ | Cas | Valeur | Référence |
|---|---|---|---|
| Title | Borne basse valide | 1 caractère (contenu exact TBC) | DATA-TITLE-001 / TC-006 / FR-007 |
| Title | Borne haute valide | 100 caractères (contenu exact TBC) | DATA-TITLE-002 / TC-007 / FR-007 |
| Title | Invalide (sous la borne) | 0 caractère / absent | DATA-TITLE-003 / TC-005, TC-008 / FR-006, FR-007 |
| Title | Invalide (au-delà de la borne) | 101 caractères (contenu exact TBC) | DATA-TITLE-004 / TC-009 / FR-007 |
| Description | Valide (absente) | 0 caractère / absente | DATA-DESC-001 / TC-010, TC-017 / FR-009 |
| Description | Borne haute valide | 500 caractères (contenu exact TBC) | DATA-DESC-002 / TC-011 / FR-010 |
| Description | Invalide (au-delà de la borne) | 501 caractères (contenu exact TBC) | DATA-DESC-003 / TC-012 / FR-010 |
| Due Date | Valide (aujourd'hui) | Date du jour selon fuseau horaire configuré (valeur réelle TBC) | DATA-DATE-002 / TC-018 / FR-014 |
| Due Date | Valide (future) | Non explicitement testée par un Test Case dédié dans Test Cases V1.0 — **TBC** si nécessaire | — | FR-014 |
| Due Date | Invalide (passée) | Veille de la date du jour | DATA-DATE-003 / TC-019 / FR-014 |
| Priority | Valide | « Basse », « Moyenne », « Haute » | DATA-PRIO-002/003/004 / TC-015 / FR-011 |
| Priority | Invalide | Valeur hors liste (valeur exacte TBC) | DATA-PRIO-005 / TC-016 / FR-011 |
| Status | Valide | « À faire », « Terminée » | DATA-STATUS-001/002 / TC-021 / FR-003 |
| Status | Transition valide | À faire → Terminée ; Terminée → À faire | DATA-STATUS-001/002 / TC-022, TC-023 / FR-005 |
| Status | Transition invalide | Toute autre transition (nature exacte TBC) | DATA-STATUS-003 / TC-024 / FR-005 |

**Rappel explicite :** aucune donnée relative aux caractères autorisés ou interdits dans le titre (Q8 / FR-008) n'est incluse dans cette section, conformément à l'exclusion en vigueur.

---

## 5. Data Dependencies & TBC

| Donnée | Raison du TBC | Dépendance |
|---|---|---|
| Contenu textuel exact des titres et descriptions (toutes longueurs) | Les FR définissent uniquement des longueurs, pas de contenu | Préparation par le QA humain, sans lien avec Q8 |
| Valeur exacte de la priorité invalide (DATA-PRIO-005) | Aucune valeur invalide concrète n'est listée dans les FR | Choix arbitraire à valider par le QA humain (hors périmètre métier) |
| Nature exacte de la transition de statut invalide (DATA-STATUS-003) | Seuls deux statuts existent ; la FR ne décrit pas d'autre valeur de statut possible | Clarification métier si un état/valeur technique supplémentaire existe (TBC — non mentionné dans les FR) |
| Valeur/configuration réelle du fuseau horaire de référence (DATA-DATE-002) | FR-014 mentionne un fuseau horaire « configuré pour l'application » sans en préciser la valeur | Communication de la configuration technique par l'équipe applicative |
| Identifiants techniques des utilisateurs et mécanisme d'authentification (DATA-USR-001/002) | Non définis dans les FR/US | Communication de l'architecture technique / mécanisme d'authentification |
| Termes de recherche concrets (DATA-SEARCH-001/002/003) | Les FR définissent le périmètre (titre + description) et l'insensibilité à la casse, mais aucun terme concret | Préparation par le QA humain à partir de tâches de test créées |
| Valeurs individuelles et résultats attendus des filtres statut/priorité (DATA-FILTER-001/002) | Comportement individuel des filtres non défini dans les FR/US (US-009, US-010 READY WITH OBSERVATION) | Clarification du Product Owner (cf. Test Design G-002, G-003, G-004) |
| Données pour FR-008 / US-003 (caractères du titre) | Q8 OPEN / BLOCKED | Validation métier de Q8 |
| Date future valide pour FR-014 | Aucun Test Case dédié dans Test Cases V1.0 pour ce cas | À confirmer si un Test Case complémentaire doit être ajouté |

---

## 6. Traceability

**Test Data → Test Case → AC → US → FR**

| Data ID | Test Case | AC | US | FR |
|---|---|---|---|---|
| DATA-USR-001 | TC-001 | AC-01 | US-001 | FR-001 |
| DATA-USR-001, DATA-USR-002 | TC-002, TC-003, TC-004 | AC-02 | US-001 | FR-002 |
| DATA-TITLE-003 | TC-005 | AC-01 | US-002 | FR-006 |
| DATA-TITLE-001 | TC-006 | AC-02 | US-002 | FR-007 |
| DATA-TITLE-002 | TC-007 | AC-02 | US-002 | FR-007 |
| DATA-TITLE-003 | TC-008 | AC-02 | US-002 | FR-007 |
| DATA-TITLE-004 | TC-009 | AC-02 | US-002 | FR-007 |
| DATA-TITLE-005, DATA-DESC-001 | TC-010 | AC-03 | US-002 | FR-009 |
| DATA-DESC-002 | TC-011 | AC-04 | US-002 | FR-010 |
| DATA-DESC-003 | TC-012 | AC-04 | US-002 | FR-010 |
| DATA-TITLE-005 | TC-013 | AC-05 | US-002 | FR-004 |
| — | US-003 | BLOCKED | US-003 | FR-008 (OPEN/BLOCKED) |
| DATA-PRIO-001 | TC-014 | AC-01 | US-004 | FR-012 |
| DATA-PRIO-002/003/004 | TC-015 | AC-02 | US-004 | FR-011 |
| DATA-PRIO-005 | TC-016 | AC-02 | US-004 | FR-011 |
| DATA-DATE-001 | TC-017 | AC-01 | US-005 | FR-013 |
| DATA-DATE-002 | TC-018 | AC-02 | US-005 | FR-014 |
| DATA-DATE-003 | TC-019 | AC-02 | US-005 | FR-014 |
| DATA-DATE-004 | TC-020 | AC-03 | US-005 | FR-015 |
| DATA-STATUS-001, DATA-STATUS-002 | TC-021 | AC-01 | US-006 | FR-003 |
| DATA-STATUS-001 | TC-022 | AC-02 | US-006 | FR-005 |
| DATA-STATUS-002 | TC-023 | AC-03 | US-006 | FR-005 |
| DATA-STATUS-003 | TC-024 | AC-04 | US-006 | FR-005 |
| DATA-TASK-DEL-001 | TC-025 | AC-01 | US-007 | FR-017 |
| DATA-TASK-DEL-001 | TC-026 | AC-02 | US-007 | FR-016, FR-017 |
| DATA-TASK-DEL-001 | TC-027 | AC-03 | US-007 | FR-017 |
| DATA-TASK-DEL-002 | TC-028 | AC-04 | US-007 | FR-018 |
| DATA-SEARCH-001 | TC-029 | AC-01 | US-008 | FR-019 |
| DATA-SEARCH-002 | TC-030 | AC-01 | US-008 | FR-019 |
| DATA-SEARCH-003 | TC-031 | AC-02 | US-008 | FR-020 |
| DATA-FILTER-001 | TC-032 | AC-01 | US-009 | FR-021 |
| DATA-FILTER-002 | TC-033 | AC-01 | US-010 | FR-022 |

---

## 7. AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Données inventées | Aucune — chaque donnée correspond à une longueur, une valeur ou une catégorie explicitement définie par une FR, ou est marquée TBC lorsque le contenu concret n'est pas fourni par les sources |
| Règles métier implicites | Aucune détectée — aucune donnée n'introduit de règle non présente dans les FR (ex. aucune règle de caractère pour le titre, aucun résultat de filtrage individuel) |
| Données manquantes | Identifiées explicitement en §5 (contenu exact des champs texte, valeur invalide de priorité, transition de statut invalide, fuseau horaire, mécanisme d'authentification, termes de recherche, comportement des filtres) |
| Incohérences avec les Requirements | Aucune détectée — les valeurs limites (1/100 titre, 500 description, date du jour) reprennent exactement FR-007, FR-010, FR-014 |
| Couverture des Test Cases | Les 33 Test Cases (hors US-003/FR-008, exclue) disposent chacun d'au moins une donnée associée (§3, §6) |
| Invention de règles pour Q8 | Aucune — aucune donnée n'est produite pour FR-008/US-003 ; le sujet apparaît uniquement en rappel d'exclusion (§4) et en dépendance bloquée (§5) |
| Invention du comportement des filtres | Aucune — DATA-FILTER-001 et DATA-FILTER-002 se limitent à la possibilité de combinaison, sans valeur de résultat individuel ni règle de filtrage |

### Problèmes identifiés

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | Contenu textuel exact des titres/descriptions non fourni par les sources | Les jeux de données concrets (chaînes de caractères précises) ne peuvent pas être générés automatiquement sans risque d'invention | Le QA humain doit produire des chaînes concrètes respectant les longueurs spécifiées, en évitant toute hypothèse sur les caractères autorisés (Q8 non résolue) |
| 2 | Valeur invalide de priorité (DATA-PRIO-005) non définie par les FR | Le Test Case TC-016 ne peut pas être exécuté sans qu'une valeur concrète soit choisie arbitrairement | Le QA humain doit choisir une valeur clairement hors périmètre (ex. valeur numérique ou chaîne non listée) et documenter ce choix comme non normatif |
| 3 | Nature exacte de la transition de statut invalide (DATA-STATUS-003) ambiguë car seuls deux statuts existent | TC-024 pourrait être interprété différemment selon l'implémentation testée | Clarifier avec l'équipe technique s'il existe un état technique supplémentaire (ex. statut interne non exposé) avant de finaliser cette donnée |
| 4 | Fuseau horaire de référence de l'application non communiqué | DATA-DATE-002 et par extension DATA-DATE-003 ne peuvent pas être calées précisément sur un environnement réel | Confirmer la configuration exacte avant la préparation des jeux de données d'exécution |
| 5 | Comportement individuel des filtres statut/priorité non défini | DATA-FILTER-001 et DATA-FILTER-002 restent partielles, limitant la préparation de données de résultat attendu | Escalade vers le Product Owner, conformément aux gaps déjà identifiés dans le Test Design et le Test Plan |

### Statut final

**DRAFT — TO BE VALIDATED.** Ce Test Data ne doit pas être considéré comme baseliné avant revue et validation humaine par un QA senior, et avant résolution ou acceptation formelle des dépendances listées en §5.

**Next QA activity:** QA Review humaine du Test Data, puis préparation concrète des jeux de données d'exécution une fois l'environnement de test confirmé.
