# SmartTodo — Retest & Regression Testing (SIMULATION — EXEMPLE FICTIF)

> ⚠️ **AVERTISSEMENT :** Ce document est une **simulation à but pédagogique**, construite sur le même principe que `test-execution.md` et `defect-management.md`. Aucune application SmartTodo réelle n'a été testée, aucun correctif réel n'a été livré, et aucun des résultats ci-dessous n'est authentique. Ce document illustre uniquement la forme que prendrait un Retest & Regression Testing une fois une véritable correction livrée et une vraie campagne de régression exécutée. **Il ne doit jamais être utilisé, partagé ou baseliné comme un résultat réel.** L'état réel du projet reste celui documenté dans les artefacts non-simulés : les 3 défauts (DEF-FICTIF-001/002/003) sont **Open**, aucun correctif n'a été livré, et aucun Retest ni Regression n'a réellement eu lieu.

**Version:** SIMULATION
**Status:** FICTIF — NE PAS UTILISER COMME BASELINE
**AI Assistance:** Yes
**Human QA Validation:** Sans objet (données fictives)
**Based on (fictivement) :** une hypothétique livraison de correctifs pour DEF-FICTIF-001, DEF-FICTIF-002 et DEF-FICTIF-003, référencée ici sous **Build fictif SMTD-B012**.

---

## 1. Objectif

Le **Retest** (*confirmation testing*) consiste à ré-exécuter le Test Case ayant échoué, une fois une correction livrée, pour vérifier que le défaut précis est résolu. Il est **ciblé** sur le seul Test Case d'origine.

Le **Regression Testing** vérifie que les fonctionnalités précédemment conformes n'ont pas été affectées par la correction. Il est **plus large** et couvre les zones fonctionnelles adjacentes, selon l'analyse de risque de la Test Strategy V1.0 (§12) et du Test Plan V1.0 (§14).

Cette version simule un scénario hypothétique où le **Build fictif SMTD-B012** aurait livré une correction pour les trois défauts ouverts, permettant d'illustrer un cycle complet Retest → Regression → Conclusion.

---

## 2. Retest Scope (fictif)

| Defect ID | Original TC | Requirement | Expected Fix (fictif) | Retest TC | Status |
|---|---|---|---|---|---|
| DEF-FICTIF-001 | TC-009 | FR-007 | Le Build fictif SMTD-B012 corrige la validation de longueur du titre : un titre de 101 caractères doit désormais être rejeté | TC-009 | **Fixed (fictif) — Retest requis** |
| DEF-FICTIF-002 | TC-019 | FR-014 | Le Build fictif SMTD-B012 corrige la validation de la date d'échéance : une date antérieure à la date du jour doit désormais être rejetée | TC-019 | **Fixed (fictif) — Retest requis** |
| DEF-FICTIF-003 | TC-031 | FR-020 | Le Build fictif SMTD-B012 corrige la recherche : un terme doit désormais être retrouvé indépendamment de la casse | TC-031 | **Fixed (fictif) — Retest requis** |

---

## 3. Retest Results (fictif)

| Retest ID | Defect ID | Test Case | Expected Result | Actual Result (fictif) | Status |
|---|---|---|---|---|---|
| RETEST-001 | DEF-FICTIF-001 | TC-009 | Rejet de la création pour un titre de 101 caractères (FR-007) | Création rejetée, message "Titre trop long" | **PASS** |
| RETEST-002 | DEF-FICTIF-002 | TC-019 | Rejet de la création pour une date d'échéance antérieure à la date du jour (FR-014) | Création rejetée, message "Date d'échéance invalide" | **PASS** |
| RETEST-003 | DEF-FICTIF-003 | TC-031 | Résultat retourné indépendamment de la casse du terme recherché (FR-020) | Résultat retourné correctement, indépendamment de la casse | **PASS** |

**Retest Summary (fictif) :** 3/3 Retests en PASS. Les trois défauts d'origine seraient, dans cette simulation, considérés comme résolus au niveau du Test Case exact qui les avait détectés.

---

## 4. Regression Scope (fictif)

Périmètre repris à l'identique de l'analyse déjà documentée (non simulée) dans `defect-management.md` §6, activé ici du fait des correctifs fictifs du Build SMTD-B012 :

| Correction (fictive) | Fonctionnalité corrigée | Fonctionnalités potentiellement impactées | Test Cases de régression |
|---|---|---|---|
| DEF-FICTIF-001 (FR-007) | Validation de la longueur du titre | Ensemble des règles de création de tâche liées au titre (US-002) | TC-005, TC-006, TC-007, TC-008, TC-009, TC-010, TC-011, TC-012, TC-013 |
| DEF-FICTIF-002 (FR-014) | Validation de la date d'échéance | Ensemble des règles de date d'échéance (US-005) | TC-017, TC-018, TC-019, TC-020 |
| DEF-FICTIF-003 (FR-020) | Comportement de la recherche | Recherche (US-008) et combinaison recherche + filtres (US-010) | TC-029, TC-030, TC-031, TC-033 |

**Éléments explicitement exclus, conformément aux règles du projet :**
- **US-003 / FR-008** : reste OPEN / BLOCKED (Q8 non validée) — aucun Test Case, donc aucune régression possible.
- **US-009 (TC-032)** : exclue de la régression — aucun défaut ne lui est associé, et le comportement individuel des filtres statut/priorité reste non défini ; seule la combinaison déjà spécifiée par FR-021 pourrait être revérifiée, sans qu'aucune donnée de test individuelle ne soit inventée.

---

## 5. Regression Results (fictif)

| Regression TC | Feature | Requirement | Expected Result | Actual Result (fictif) | Status |
|---|---|---|---|---|---|
| TC-005 | Titre obligatoire | FR-006 | Rejet si titre absent | Rejet confirmé | **PASS** |
| TC-006 | Titre borne basse (1 caractère) | FR-007 | Acceptation à 1 caractère | **Rejeté à tort — la correction du Build SMTD-B012 rejette également les titres de 1 caractère** | **FAIL** |
| TC-007 | Titre borne haute valide (100 caractères) | FR-007 | Acceptation à 100 caractères | Acceptation confirmée | **PASS** |
| TC-008 | Titre invalide (0 caractère / vide) | FR-007 | Rejet | Rejet confirmé | **PASS** |
| TC-009 | Titre invalide (101 caractères) | FR-007 | Rejet | Rejet confirmé (cf. RETEST-001) | **PASS** |
| TC-010 | Description absente | FR-009 | Acceptation | Acceptation confirmée | **PASS** |
| TC-011 | Description borne haute valide (500 caractères) | FR-010 | Acceptation | Acceptation confirmée | **PASS** |
| TC-012 | Description invalide (501 caractères) | FR-010 | Rejet | Rejet confirmé | **PASS** |
| TC-013 | Statut par défaut | FR-004 | Statut initial "À faire" | Statut initial "À faire" confirmé | **PASS** |
| TC-017 | Date d'échéance facultative | FR-013 | Acceptation sans date | Acceptation confirmée | **PASS** |
| TC-018 | Date d'échéance valide (future) | FR-014 | Acceptation | Acceptation confirmée | **PASS** |
| TC-019 | Date d'échéance invalide (passée) | FR-014 | Rejet | Rejet confirmé (cf. RETEST-002) | **PASS** |
| TC-020 | Date sans composante horaire | FR-015 | Enregistrement sans heure | Enregistrement sans heure confirmé | **PASS** |
| TC-029 | Recherche — terme dans le titre | FR-019 | Résultat trouvé | Résultat trouvé | **PASS** |
| TC-030 | Recherche — terme dans la description | FR-019 | Résultat trouvé | Résultat trouvé | **PASS** |
| TC-031 | Recherche — insensibilité à la casse | FR-020 | Résultat trouvé malgré la casse | Résultat trouvé (cf. RETEST-003) | **PASS** |
| TC-033 | Recherche + filtres combinés | FR-022 | Combinaison applicable (comportement détaillé des filtres individuels : non vérifiable, TBC) | Combinaison applicable ; comportement individuel des filtres toujours non vérifiable | **PASS (partiel — READY WITH OBSERVATION, inchangé)** |

**Regression Summary (fictif) :** 16/17 Test Cases de régression en PASS, **1 FAIL** (TC-006), 0 BLOCKED, 0 NOT RUN.

Un nouveau défaut fictif est détecté par la régression :

| Defect ID (fictif) | TC associé | Requirement | Description | Sévérité (fictive) | Statut (fictif) |
|---|---|---|---|---|---|
| DEF-FICTIF-004 | TC-006 | FR-007 | La correction livrée pour rejeter les titres > 100 caractères (DEF-FICTIF-001) a introduit une régression : les titres de 1 caractère (borne basse valide) sont désormais rejetés à tort | High (fictif) | Open (fictif) |

Ce nouveau défaut illustre, à titre pédagogique, la valeur du Regression Testing : la correction d'un défaut de borne haute (FR-007) a cassé la borne basse de la même règle.

---

## 6. Impact Analysis (fictif)

**Defect → Correction → Fonctionnalité impactée → Regression Tests**

| Defect | Correction (fictive) | Fonctionnalité impactée | Regression Tests associés | Résultat |
|---|---|---|---|---|
| DEF-FICTIF-001 (FR-007) | Build SMTD-B012 — rejet des titres > 100 caractères | Création de tâche — validation du titre (US-002) | TC-005 à TC-013 | 8 PASS, **1 FAIL (TC-006) → DEF-FICTIF-004** |
| DEF-FICTIF-002 (FR-014) | Build SMTD-B012 — rejet des dates passées | Création de tâche — validation de la date d'échéance (US-005) | TC-017 à TC-020 | 4 PASS |
| DEF-FICTIF-003 (FR-020) | Build SMTD-B012 — recherche insensible à la casse | Recherche (US-008) et combinaison recherche + filtres (US-010) | TC-029, TC-030, TC-031, TC-033 | 4 PASS |

**Constat clé (fictif) :** la correction de DEF-FICTIF-001 a eu un effet de bord négatif sur la borne basse de la même exigence (FR-007), détecté uniquement grâce à la régression et non par le Retest ciblé (qui ne portait que sur TC-009).

---

## 7. Conclusion (fictif — simulation)

**Retest Status (fictif) :** **PASS — 3/3.** Les trois défauts d'origine (DEF-FICTIF-001, DEF-FICTIF-002, DEF-FICTIF-003) seraient, dans cette simulation, considérés comme résolus au niveau de leur Test Case d'origine.

**Regression Status (fictif) :** **PARTIAL — 16/17 PASS, 1 FAIL.** La régression sur US-002 révèle un nouveau défaut (DEF-FICTIF-004) introduit par la correction de DEF-FICTIF-001.

**Remaining Defects (fictif) :** DEF-FICTIF-004 (High, FR-007, TC-006) — Open. Les trois défauts d'origine seraient Closed sous réserve de validation humaine du Retest.

**Remaining Risks (fictif et réels combinés) :**
- **(Fictif)** DEF-FICTIF-004 doit être corrigé puis faire l'objet d'un nouveau Retest (TC-006) et d'une nouvelle régression ciblée sur la validation du titre avant toute clôture définitive de la chaîne DEF-FICTIF-001/004.
- **(Réel)** Q8 / FR-008 reste OPEN / BLOCKED — inchangé par cette simulation.
- **(Réel)** Le comportement individuel des filtres statut/priorité (US-009, US-010) reste non défini — TC-032 demeure hors périmètre de toute régression significative.
- **(Réel)** L'ensemble de cette simulation reste fictif : aucun de ces résultats ne reflète l'état réel de l'application SmartTodo.

**QA Recommendation (fictif, à valider par un humain si ce scénario devenait réel) :** ne pas clôturer DEF-FICTIF-001 tant que DEF-FICTIF-004 n'est pas résolu et retesté, car les deux défauts concernent la même règle (FR-007) et la clôture du premier sans résoudre le second laisserait une régression ouverte. DEF-FICTIF-002 et DEF-FICTIF-003 pourraient être clôturés sous réserve de validation humaine des Retest RETEST-002 et RETEST-003.

**Aucun de ces résultats n'est réel.** Dans l'état réel du projet SmartTodo (hors simulation), aucun correctif n'a été livré, aucun Retest ni Regression n'a été exécuté, et les trois défauts d'origine restent Open.

---

## 8. Traceability (fictif)

**FR → US → AC → Test Case → Defect → Retest → Regression → Result**

| FR | US | AC | Test Case | Defect | Retest | Regression | Result (fictif) |
|---|---|---|---|---|---|---|---|
| FR-007 | US-002 | AC-02 | TC-009 | DEF-FICTIF-001 | RETEST-001 (PASS) | TC-005–TC-013 | 8 PASS, 1 FAIL (TC-006) |
| FR-007 | US-002 | AC-02 | TC-006 | DEF-FICTIF-004 (nouveau) | Non encore effectué | À définir après correction | **FAIL — nouveau défaut** |
| FR-014 | US-005 | AC-02 | TC-019 | DEF-FICTIF-002 | RETEST-002 (PASS) | TC-017–TC-020 | 4 PASS |
| FR-020 | US-008 | AC-02 | TC-031 | DEF-FICTIF-003 | RETEST-003 (PASS) | TC-029–TC-031, TC-033 | 4 PASS |
| FR-008 | US-003 | BLOCKED | — | — | Sans objet (Q8 OPEN) | Sans objet | **BLOCKED (inchangé)** |
| FR-021 | US-009 | AC-01 | TC-032 | — | Sans objet | Non incluse (comportement filtres non défini) | Sans objet (inchangé) |
| FR-022 | US-010 | AC-01 | TC-033 | — | Sans objet | TC-033 (vérification combinaison uniquement) | PASS (partiel, inchangé) |

---

## 9. AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Défauts inventés | **Assumé et explicitement documenté** — DEF-FICTIF-001/002/003 proviennent des documents sources ; DEF-FICTIF-004 est une **nouvelle invention fictive**, créée uniquement dans le cadre de cette simulation pédagogique et clairement signalée comme telle, sans être présentée comme un défaut réel |
| Corrections inventées | **Assumé et explicitement documenté** — le "Build fictif SMTD-B012" et son contenu n'existent pas ; ils sont créés uniquement pour permettre la simulation demandée |
| Résultats inventés | **Assumé et explicitement documenté** — tous les Actual Results (§3, §5) sont fictifs, créés pour illustrer un cycle Retest/Regression complet, incluant un cas d'échec pour la valeur pédagogique |
| Tests de régression injustifiés | Aucun détecté — chaque Test Case de régression reste rattaché à une fonctionnalité directement liée aux trois défauts d'origine, conformément au périmètre déjà validé dans `defect-management.md` §6 |
| Tests oubliés | Aucun détecté — l'ensemble des Test Cases listés dans le périmètre de régression de `defect-management.md` §6 est repris intégralement |
| Erreurs de traçabilité | Aucune détectée — la chaîne FR → US → AC → TC → Defect → Retest → Regression (§8) reste cohérente avec `test-cases.md` et `defect-management.md`, à l'exception de l'ajout fictif de DEF-FICTIF-004, clairement marqué comme nouveau |
| Confusion Retest / Regression | Évitée — §3 (Retest) reste strictement limité aux 3 Test Cases d'origine ; §5 (Regression) couvre le périmètre élargi, avec une distinction claire entre les deux |
| Q8 / FR-008 | Traité exclusivement comme BLOCKED, inchangé par la simulation ; aucune règle de caractères inventée |
| Filtres (US-009/US-010) | TC-032 reste exclu de toute régression ; TC-033 reste limité à la vérification de la combinaison déjà définie, sans comportement individuel de filtre inventé |
| Incohérences avec Test Execution et Defect Management | Aucune détectée pour les 3 défauts d'origine ; DEF-FICTIF-004 est un ajout assumé de cette simulation, non présent dans les documents sources d'origine, introduit uniquement pour simuler un scénario de régression réaliste demandé par l'utilisateur |

### Problèmes identifiés (dans le cadre de cette simulation)

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | L'intégralité de ce document est une simulation, y compris un nouveau défaut fictif (DEF-FICTIF-004) non présent dans les sources d'origine | Aucun de ces résultats ne peut être utilisé comme preuve réelle de correction ou de qualité | Ne jamais transmettre ce document comme un Retest & Regression Testing réel ; le réserver à un usage pédagogique |
| 2 | DEF-FICTIF-004 est une invention créée pour cette simulation, à la demande explicite de simuler une exécution | Risque de confusion si ce document circule sans son bandeau d'avertissement | Conserver systématiquement l'avertissement en tête de document lors de tout partage |
| 3 | Le scénario simulé suppose un Build SMTD-B012 qui n'existe pas | Aucune traçabilité vers un système de gestion de version ou de build réel n'est possible | Lors d'une exécution réelle, référencer un identifiant de build réel et vérifiable |

### Statut final

**FICTIF — SIMULATION.** Ce document ne doit pas être baseliné ni utilisé comme preuve de correction réelle. L'état réel du projet SmartTodo reste : 3 défauts Open (DEF-FICTIF-001/002/003), aucun correctif livré, aucun Retest ni Regression réellement exécuté.

**Next QA activity (réelle) :** confirmer un correctif réel, exécuter un Retest et une Régression réels, et ne créer un document de ce type qu'à partir de résultats effectivement observés.
