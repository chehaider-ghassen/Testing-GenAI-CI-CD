# SmartTodo — Playwright Automation Design

## 1. Document Information

- **Version:** 1.0
- **Status:** Draft — To Be Validated
- **AI Assistance:** Yes
- **Human QA Validation:** Required
- **Framework selected:** Playwright

**Note de cadrage :** Playwright est retenu ici comme **décision de conception de ce document**, et non comme une conclusion issue des Requirements Baseline V1.0, de la User Stories Baseline V1.0, de la Test Strategy V1.0 ou de l'Automation & CI-CD Strategy V1.0 — ces documents laissent tous le framework explicitement **TBC** (Test Strategy V1.0 §13 : « Aucun framework d'automatisation spécifique n'est imposé par les exigences actuelles » ; Automation & CI-CD Strategy V1.0 §4 : « Framework / outillage : TBC »). Ce document ne modifie pas ce statut dans les documents sources ; il applique simplement Playwright comme hypothèse de conception pour ce document précis, à valider par le QA humain.

**Based on:** Requirements Baseline V1.0 + User Stories Baseline V1.0 + Test Strategy V1.0 + Test Plan V1.0 + Test Design V1.0 + Test Cases V1.0 + Test Data V1.0 + Test Execution (SIMULATION) + Defect Management (SIMULATION) + Retest & Regression Testing (SIMULATION) + Automation & CI-CD Strategy V1.0

---

## 2. Objective

Ce document définit la **conception** de l'automatisation SmartTodo avec Playwright, avant toute implémentation de script. Il répond à la question : *comment allons-nous concevoir et organiser l'automatisation de SmartTodo avec Playwright à partir de nos Test Cases validés ?*

Il se situe entre l'Automation & CI-CD Strategy V1.0 (qui définit **quels** Test Cases automatiser et pourquoi) et l'implémentation effective des scripts (hors périmètre de ce document, cf. règle 9 du prompt).

| Artefact | Rôle |
|---|---|
| Automation & CI-CD Strategy V1.0 | Sélection des Test Cases candidats, critères, périmètre général |
| Playwright Automation Design (ce document) | Organisation, principes, mapping, stratégie de données/assertions/locators spécifiques à Playwright |
| Scripts Playwright (futur, hors périmètre) | Implémentation effective du code |

Ce document ne remplace ni la Test Strategy, ni le Test Plan, ni le Test Design, ni l'Automation & CI-CD Strategy — il en est une déclinaison technique de conception.

---

## 3. Automation Scope

Repris directement de l'Automation & CI-CD Strategy V1.0 (§2, §3), sans modification du périmètre :

### 3.1 Fonctionnalités automatisables (candidates)
Les 9 domaines fonctionnels correspondant aux 27 Test Cases candidats identifiés dans l'Automation & CI-CD Strategy V1.0 : propriété/confidentialité (US-001), création de tâche (US-002), priorité (US-004), date d'échéance (US-005), statut/transitions (US-006), suppression (US-007), recherche (US-008).

### 3.2 Fonctionnalités restant manuelles
- Tests dont l'Expected Result comporte un élément TBC dans `test-cases.md` (ex. message d'erreur exact non défini).
- Tests exploratoires (non structurés par nature).

### 3.3 Fonctionnalités bloquées
- **US-003 / FR-008** : BLOCKED (Q8 OPEN). Aucun Test Case n'existe ; aucune conception Playwright n'est donc proposée pour cette User Story.

### 3.4 Test Cases exclus explicitement (règle 5 du prompt)
- **TC-032 (US-009, FR-021)** et **TC-033 (US-010, FR-022)** : non automatisés tant que le comportement individuel des filtres statut/priorité n'est pas défini. Automatiser une assertion sur ces Test Cases obligerait à coder une hypothèse sur un comportement non spécifié — explicitement interdit.

---

## 4. Automation Principles

Principes de conception applicables à la future suite Playwright, dérivés des exigences de qualité déjà établies dans les documents sources (Test Strategy V1.0 §13, `test-cases.md` AI Self-Review) :

| Principe | Application prévue pour SmartTodo |
|---|---|
| **Tests déterministes** | Chaque test Playwright doit produire le même résultat à chaque exécution, pour un même état de données — cohérent avec la sélection des Test Cases stables/répétables (Automation & CI-CD Strategy V1.0 §3) |
| **Répétabilité** | Chaque test doit pouvoir être rejoué indépendamment, sans dépendre de l'état laissé par une exécution précédente |
| **Maintenabilité** | La structure (§5, §12) doit permettre de mettre à jour un test sans impacter les autres, en particulier lors d'un changement de baseline (Change Control, cf. Requirements Baseline V1.0 §6) |
| **Isolation des tests** | Chaque test doit créer ses propres données (ex. sa propre tâche, son propre utilisateur) plutôt que de dépendre de données créées par un autre test — mécanisme concret **TBC** (dépend de l'environnement, §19) |
| **Assertions explicites** | Chaque assertion doit vérifier un comportement défini par une FR/AC précise (§10), jamais une supposition |
| **Absence de dépendance inutile entre tests** | Aucun test ne doit nécessiter l'exécution préalable d'un autre test spécifique dans un ordre donné, sauf setup explicite documenté (§11) |
| **Gestion contrôlée des données** | Les données utilisées doivent provenir de `test-data.md` ou de conventions dérivées (§7), jamais improvisées à l'exécution |
| **Diagnostic des échecs** | Chaque échec doit produire des informations exploitables pour l'analyse (§13), sans présumer d'un outillage non confirmé |

---

## 5. Test Organization

Organisation logique proposée, en miroir de la structure déjà utilisée dans `test-cases.md` (par User Story / domaine fonctionnel) — **aucune structure applicative réelle n'est supposée**, il s'agit uniquement d'une organisation du code de test :

```
tests/
  us-001-ownership-confidentiality/    (FR-001, FR-002)
  us-002-task-creation/                (FR-004, FR-006, FR-007, FR-009, FR-010)
  us-004-priority/                     (FR-011, FR-012)
  us-005-due-date/                     (FR-013, FR-014, FR-015)
  us-006-status-transitions/           (FR-003, FR-005)
  us-007-deletion/                     (FR-016, FR-017, FR-018)
  us-008-search/                       (FR-019, FR-020)
```

**Non inclus dans cette organisation :** `us-003-title-characters/` (BLOCKED, aucun test) et un éventuel dossier pour US-009/US-010 (exclus de l'automatisation tant que le gap sur les filtres n'est pas résolu — §3.4).

Cette arborescence est une **proposition de convention**, pas une structure de projet déjà existante. Le nom exact des dossiers, l'outil de build/monorepo, et l'organisation réelle du code applicatif restent **TBC**.

---

## 6. Test Case → Playwright Mapping

Les noms de tests ci-dessous sont des **conventions de nommage proposées**, pas des tests implémentés. Reprend la sélection de l'Automation & CI-CD Strategy V1.0 (§3).

| Test Case | US | AC | Automation Candidate | Playwright Test (proposé) | Status |
|---|---|---|---|---|---|
| TC-001 | US-001 | AC-01 | Yes | `us-001-ownership-confidentiality.spec.ts :: creates task exclusively owned by creator` | Not implemented |
| TC-002 | US-001 | AC-02 | Yes | `us-001-ownership-confidentiality.spec.ts :: prevents viewing another user's task` | Not implemented |
| TC-003 | US-001 | AC-02 | Yes | `us-001-ownership-confidentiality.spec.ts :: prevents editing another user's task` | Not implemented |
| TC-004 | US-001 | AC-02 | Yes | `us-001-ownership-confidentiality.spec.ts :: prevents deleting another user's task` | Not implemented |
| TC-005 | US-002 | AC-01 | Yes | `us-002-task-creation.spec.ts :: rejects creation without title` | Not implemented |
| TC-006 | US-002 | AC-02 | Yes | `us-002-task-creation.spec.ts :: accepts title at lower boundary (1 char)` | Not implemented |
| TC-007 | US-002 | AC-02 | Yes | `us-002-task-creation.spec.ts :: accepts title at upper boundary (100 chars)` | Not implemented |
| TC-008 | US-002 | AC-02 | Yes | `us-002-task-creation.spec.ts :: rejects title below lower boundary` | Not implemented |
| TC-009 | US-002 | AC-02 | Yes | `us-002-task-creation.spec.ts :: rejects title above upper boundary (101 chars)` | Not implemented |
| TC-010 | US-002 | AC-03 | Yes | `us-002-task-creation.spec.ts :: accepts creation without description` | Not implemented |
| TC-011 | US-002 | AC-04 | Yes | `us-002-task-creation.spec.ts :: accepts description at upper boundary (500 chars)` | Not implemented |
| TC-012 | US-002 | AC-04 | Yes | `us-002-task-creation.spec.ts :: rejects description above upper boundary` | Not implemented |
| TC-013 | US-002 | AC-05 | Yes | `us-002-task-creation.spec.ts :: sets default status to "À faire"` | Not implemented |
| TC-014 | US-004 | AC-01 | Yes | `us-004-priority.spec.ts :: rejects creation without priority` | Not implemented |
| TC-015 | US-004 | AC-02 | Yes | `us-004-priority.spec.ts :: accepts each valid priority value` | Not implemented |
| TC-016 | US-004 | AC-02 | Yes | `us-004-priority.spec.ts :: rejects invalid priority value` | Not implemented |
| TC-017 | US-005 | AC-01 | Yes | `us-005-due-date.spec.ts :: accepts creation without due date` | Not implemented |
| TC-018 | US-005 | AC-02 | Yes | `us-005-due-date.spec.ts :: accepts future due date` | Not implemented |
| TC-019 | US-005 | AC-02 | Yes | `us-005-due-date.spec.ts :: rejects past due date` | Not implemented |
| TC-020 | US-005 | AC-03 | Yes | `us-005-due-date.spec.ts :: stores due date without time component` | Not implemented |
| TC-021 | US-006 | AC-01 | Yes | `us-006-status-transitions.spec.ts :: exposes only two status values` | Not implemented |
| TC-022 | US-006 | AC-02 | Yes | `us-006-status-transitions.spec.ts :: transitions À faire to Terminée` | Not implemented |
| TC-023 | US-006 | AC-03 | Yes | `us-006-status-transitions.spec.ts :: transitions Terminée to À faire` | Not implemented |
| TC-024 | US-006 | AC-04 | Yes | `us-006-status-transitions.spec.ts :: rejects unauthorized status transition` | Not implemented |
| TC-025 | US-007 | AC-01 | Yes | `us-007-deletion.spec.ts :: displays confirmation before deletion` | Not implemented |
| TC-026 | US-007 | AC-02 | Yes | `us-007-deletion.spec.ts :: permanently deletes task on confirmation` | Not implemented |
| TC-027 | US-007 | AC-03 | Yes | `us-007-deletion.spec.ts :: cancels deletion on user cancellation` | Not implemented |
| TC-028 | US-007 | AC-04 | Yes | `us-007-deletion.spec.ts :: prevents restoration of deleted task` | Not implemented |
| TC-029 | US-008 | AC-01 | Yes | `us-008-search.spec.ts :: finds task by title term` | Not implemented |
| TC-030 | US-008 | AC-01 | Yes | `us-008-search.spec.ts :: finds task by description term` | Not implemented |
| TC-031 | US-008 | AC-02 | Yes | `us-008-search.spec.ts :: search is case-insensitive` | Not implemented |
| TC-032 | US-009 | AC-01 | **No** | — | **Excluded (filters gap — see §3.4)** |
| TC-033 | US-010 | AC-01 | **No** | — | **Excluded (filters gap — see §3.4)** |
| — | US-003 | BLOCKED | Not applicable | — | **Blocked (Q8 OPEN)** |

**Aucun test ci-dessus n'est implémenté** — la colonne "Playwright Test (proposé)" définit une convention de nommage à valider par le QA humain avant tout développement.

---

## 7. Test Data Strategy

Les données Playwright seront dérivées de `test-data.md`, sans invention de valeurs non définies. Répartition par catégorie, telle que déjà établie dans les documents sources :

| Catégorie | Source (`test-data.md`) | Application Playwright prévue |
|---|---|---|
| **Données positives** | Ex. DATA-TITLE-005 (titre valide générique), DATA-DESC-002 (description valide), DATA-PRIO-002/003/004 (priorités valides) | Fixtures/constantes de données valides réutilisées dans les tests "accepts..." |
| **Données négatives** | Ex. DATA-TITLE-003 (titre absent), DATA-PRIO-005 (priorité invalide) | Fixtures de données invalides pour les tests "rejects..." |
| **Boundary values** | DATA-TITLE-004 (101 caractères), titre à 1/100 caractères, DATA-DESC (500/501 caractères) | Constantes dédiées aux tests de borne (TC-006 à TC-009, TC-011, TC-012) |
| **Transitions de statut** | DATA-STATUS-001/002/003 | Constantes pour TC-021 à TC-024 |
| **Recherche** | DATA-SEARCH-001/002/003 (dont DATA-SEARCH-003, variante de casse) | Constantes pour TC-029 à TC-031 |
| **Combinaisons définies** | DATA-FILTER-001/002 | **Non utilisées dans cette conception**, car TC-032/TC-033 sont exclus de l'automatisation (§3.4) |

**Contenu exact des données :** plusieurs valeurs sont marquées "contenu exact TBC" dans `test-data.md` (ex. DATA-TITLE-004, DATA-TITLE-005, DATA-SEARCH-003). Ce document ne comble pas ces TBC — le contenu concret devra être défini par le QA humain avant l'implémentation, conformément à la règle 6 du prompt (ne pas transformer une observation TBC en exigence).

**Gestion des données à l'exécution :** stratégie de création (via UI, via API, via base de données directement) **TBC**, dépend de l'architecture applicative non confirmée (§19).

---

## 8. Authentication & Test Isolation

**Mécanisme d'authentification réel : TBC.** Aucun document source ne définit comment un utilisateur s'authentifie dans SmartTodo (Test Plan V1.0 §6.2 : « Mécanisme d'authentification des utilisateurs : TBC »).

**Principes d'isolation prévus, indépendants du mécanisme technique :**
- Chaque test nécessitant un utilisateur authentifié (TC-001 à TC-004, et tout test créant une tâche) devrait utiliser un contexte utilisateur dédié, pour éviter toute interférence entre tests exécutés en parallèle.
- Les tests d'isolation entre utilisateurs (TC-002, TC-003, TC-004 — FR-002) nécessitent explicitement **deux** identités distinctes (Utilisateur A, Utilisateur B), conformément aux préconditions déjà documentées dans `test-cases.md`.
- Playwright permet nativement des contextes de navigateur isolés (browser contexts) — **mentionné ici comme capacité générique du framework**, pas comme une configuration déjà en place pour SmartTodo.

**Comptes de test :** existence, création et gestion de comptes de test dédiés — **TBC** (dépend du mécanisme d'authentification réel et de l'environnement, §19).

---

## 9. Locators Strategy

**Aucun sélecteur, attribut `data-testid`, ou élément d'interface n'est actuellement défini** dans les documents sources — l'existence même d'une UI reste TBC (Test Plan V1.0 §6.2, Test Design V1.0 §8 G-DESIGN-006).

**Principes généraux à appliquer, une fois l'UI confirmée** (bonnes pratiques Playwright généralement reconnues, non spécifiques à SmartTodo, à valider par l'équipe technique) :
- Préférer des locators basés sur le rôle et le texte accessible (`getByRole`, `getByLabel`, `getByText`) plutôt que des sélecteurs CSS fragiles, lorsque la structure UI le permet.
- Si l'équipe technique introduit des attributs dédiés aux tests (ex. `data-testid`), les utiliser en priorité pour la stabilité — **à confirmer avec l'équipe de développement, non garanti à ce stade**.
- Éviter les locators basés uniquement sur la position (ex. `nth-child`) qui rendraient les tests fragiles face à des changements de mise en page.

**Aucun nom de sélecteur, page ou composant concret n'est proposé dans ce document**, conformément à la règle 2 du prompt.

---

## 10. Assertions Strategy

Chaque assertion doit vérifier un **comportement fonctionnel défini par une FR/AC précise**, jamais uniquement la présence d'un élément UI. Principes dérivés directement des Expected Results de `test-cases.md` :

| Type d'assertion | Exemple d'application (basé sur les FR) |
|---|---|
| Assertion d'état métier | Vérifier que le statut d'une tâche créée est "À faire" (FR-004, TC-013) — pas seulement qu'un élément visuel existe |
| Assertion de rejet | Vérifier qu'une création est refusée pour un titre de 101 caractères (FR-007, TC-009) — le mécanisme exact de restitution du refus (message, code, état visuel) reste **TBC** tant que non défini dans les FR |
| Assertion de transition | Vérifier qu'une tâche "Terminée" repasse à "À faire" et qu'aucune autre valeur n'est acceptée (FR-005, TC-022 à TC-024) |
| Assertion d'isolation | Vérifier qu'un utilisateur B ne peut ni consulter, ni modifier, ni supprimer une tâche de l'utilisateur A (FR-002, TC-002 à TC-004) — la forme exacte du refus (403, message, redirection) reste **TBC** |
| Assertion de non-régression | Reprendre l'Expected Result exact du Test Case source, sans ajout, pour permettre la détection d'effets de bord (cf. `retest-regression-testing.md`, DEF-FICTIF-004 simulé sur TC-006) |

**Ce qui est explicitement exclu :** aucune assertion ne doit être écrite sur le comportement individuel des filtres statut/priorité (TC-032, TC-033), ni sur un message d'erreur ou code retour non défini dans les FR — ces éléments restent TBC et ne doivent pas être "inventés" pour rendre un test exécutable.

---

## 11. Fixtures & Reusable Components

Besoins identifiés, tous dépendants de l'application réelle et donc marqués **TBC** quant à leur implémentation concrète :

| Besoin | Description | Statut |
|---|---|---|
| Fixture "utilisateur authentifié" | Fournir un contexte utilisateur prêt à l'emploi pour les tests nécessitant une authentification (majorité des 27 Test Cases candidats) | TBC — dépend du mécanisme d'authentification (§8) |
| Fixture "deux utilisateurs distincts" | Spécifique à US-001 (TC-002 à TC-004) | TBC |
| Helper "créer une tâche" | Fonction réutilisable pour créer une tâche avec des paramètres valides par défaut, utilisée comme précondition dans de nombreux tests (ex. TC-022 à TC-028) | TBC — dépend de l'existence d'une API ou de l'UI (§19) |
| Helper "nettoyage des données" (teardown) | Suppression des données créées par un test à son issue, pour préserver l'isolation (§4) | TBC |
| Constantes de données de test | Reprise structurée des IDs de `test-data.md` (DATA-TITLE-*, DATA-DESC-*, DATA-PRIO-*, DATA-DATE-*, DATA-STATUS-*, DATA-SEARCH-*) | Peut être préparée dès maintenant à partir de `test-data.md`, indépendamment de l'environnement — contenu exact de plusieurs valeurs reste TBC (§7) |

Aucune fixture n'est présentée comme déjà implémentée.

---

## 12. Page Object Model / Test Architecture

**Évaluation :** le Page Object Model (POM) — ou une architecture équivalente encapsulant les interactions UI par domaine fonctionnel — serait pertinent *si* SmartTodo dispose d'une UI web, ce qui reste **TBC** (§19).

**Proposition conditionnelle, à valider une fois l'UI confirmée :**
- Un objet/module par domaine fonctionnel serait cohérent avec l'organisation déjà proposée en §5 (ex. un module pour la création de tâche, un pour la gestion du statut, un pour la recherche).
- Cette proposition reste **conceptuelle** : aucune Page, aucun composant, aucune méthode concrète n'est définie ici, car cela nécessiterait de connaître la structure réelle de l'UI (non disponible dans les documents sources).

**Alternative si SmartTodo est testé au niveau API :** un POM ne serait pas pertinent ; une organisation par "API client" ou équivalent serait à envisager à la place — également **TBC**, car l'existence d'une API n'est pas confirmée.

Aucune décision d'architecture n'est arrêtée dans ce document ; elle dépend d'informations techniques non disponibles (§19).

---

## 13. Error Handling & Diagnostics

Principes de diagnostic à appliquer, indépendamment de la configuration technique réelle (qui reste TBC) :

| Élément | Principe | Statut de configuration réelle |
|---|---|---|
| **Screenshots** | Capturer une capture d'écran automatique en cas d'échec, pour faciliter le diagnostic visuel | TBC — non configuré à ce jour |
| **Traces** | Conserver une trace d'exécution (actions, réseau, DOM) pour les tests en échec, permettant une relecture pas à pas | TBC |
| **Logs** | Journaliser les étapes clés de chaque test (précondition, action, assertion) pour faciliter la lecture des rapports d'échec | TBC |
| **Vidéos** | Pertinentes si des scénarios impliquent des interactions UI complexes (ex. confirmation de suppression, TC-025 à TC-027) ; à activer sélectivement pour ne pas alourdir l'exécution | TBC |
| **Informations nécessaires au diagnostic** | Reprendre le même niveau d'information que celui déjà requis pour un défaut manuel (`defect-management.md` §4 : Summary, Preconditions, Test Data, Steps, Expected/Actual Result, Severity, Traceability) | Applicable dès la conception, indépendamment de l'outillage technique |

**Aucun de ces éléments n'est présenté comme déjà en place** — ils constituent des principes de conception à confirmer et implémenter avec l'équipe technique.

---

## 14. Test Execution

| Mode d'exécution | Description | Statut |
|---|---|---|
| **Exécution locale** | Exécution de l'ensemble ou d'un sous-ensemble de tests sur poste de développement/QA, pour validation avant intégration | Commande concrète TBC (dépend du setup projet réel) |
| **Exécution ciblée** | Exécution d'un test ou d'un domaine fonctionnel spécifique (ex. uniquement `us-005-due-date/`) lors du développement d'une correction | Mécanisme de filtrage concret TBC |
| **Exécution de régression** | Exécution de l'ensemble des 27 Test Cases candidats (§6), alignée sur le périmètre de régression déjà défini (§15) | À définir une fois l'environnement confirmé |
| **Catégorisation éventuelle** | Regroupement possible par priorité (High/Medium, reprise de l'Automation & CI-CD Strategy V1.0 §3) pour permettre une exécution rapide des tests critiques (ex. US-001, US-006, US-007) séparément du reste | Convention proposée, non implémentée |

**Commandes, scripts npm, configuration `playwright.config.ts` :** tous **TBC** — aucune configuration concrète n'est proposée, car dépendante de l'environnement et de l'architecture réels (§19).

---

## 15. Regression Automation

Conformément à l'Automation & CI-CD Strategy V1.0 (§5), les tests Playwright candidats (§6) contribueraient à la régression de la manière suivante :

- **Régression ciblée par zone impactée** : reprise du mapping déjà établi (`defect-management.md` §6, Automation & CI-CD Strategy V1.0 §5) — une modification touchant la validation du titre (FR-006/007) déclencherait l'exécution de `us-002-task-creation.spec.ts` dans son ensemble (TC-005 à TC-013), pas seulement le test lié au changement.
- **Détection d'effets de bord de type boundary** : la simulation Retest & Regression a illustré qu'une correction sur la borne haute du titre (FR-007) pouvait casser la borne basse (DEF-FICTIF-004, TC-006). Le regroupement de tous les tests de bornes du titre dans un même fichier (`us-002-task-creation.spec.ts`) permettrait de détecter ce type de régression en une seule exécution.
- **Priorisation de la régression automatisée** : les tests High priority (US-001, US-006, US-007, ainsi que TC-006/007/009 et TC-018/019) seraient exécutés en priorité, cohérent avec les risques R-001, R-002, R-005 déjà identifiés dans la Test Strategy V1.0 (§6).
- **Exclusion maintenue** : TC-032, TC-033 et US-003 restent hors de toute suite de régression automatisée tant que leurs gaps respectifs (filtres individuels, Q8) ne sont pas résolus.

Cette section ne redéfinit pas la stratégie de régression déjà établie — elle en décrit l'application spécifique à une suite Playwright.

---

## 16. CI/CD Readiness

**Plateforme CI/CD : TBC**, conformément à l'Automation & CI-CD Strategy V1.0 (§6) : « Aucune plateforme (...) n'est mentionnée dans les documents sources. »

**Prérequis identifiés pour une future intégration, indépendamment de la plateforme retenue :**
- Environnement d'exécution capable de lancer des navigateurs (headless ou non) — Playwright nécessite un environnement compatible ; le type d'environnement CI/CD réel reste TBC.
- Accès à l'application SmartTodo déployée (ou à un environnement de test dédié) depuis l'environnement CI/CD — dépend de l'environnement de test, lui-même TBC (Test Plan V1.0 §6.2).
- Gestion des secrets/identifiants pour l'authentification automatisée (§8) — mécanisme TBC.
- Stockage et publication des artefacts de diagnostic (screenshots, traces, rapports — §13) — outillage TBC.

**Ce document ne propose aucune plateforme précise** (GitHub Actions, GitLab CI, Jenkins, etc.), conformément à la règle du prompt.

---

## 17. Traceability

**FR → US → AC → TC → Playwright Test → CI/CD Execution → Result → Defect**

| FR | US | AC | TC | Playwright Test (proposé) | CI/CD Execution | Result | Defect |
|---|---|---|---|---|---|---|---|
| FR-001 | US-001 | AC-01 | TC-001 | `us-001... :: creates task exclusively owned by creator` | TBC | Not implemented | — |
| FR-002 | US-001 | AC-02 | TC-002/003/004 | `us-001... :: prevents viewing/editing/deleting another user's task` | TBC | Not implemented | — |
| FR-003 | US-006 | AC-01 | TC-021 | `us-006... :: exposes only two status values` | TBC | Not implemented | — |
| FR-004 | US-002 | AC-05 | TC-013 | `us-002... :: sets default status to "À faire"` | TBC | Not implemented | — |
| FR-005 | US-006 | AC-02/03/04 | TC-022/023/024 | `us-006... :: transitions ...` | TBC | Not implemented | — |
| FR-006 | US-002 | AC-01 | TC-005 | `us-002... :: rejects creation without title` | TBC | Not implemented | — |
| FR-007 | US-002 | AC-02 | TC-006/007/008/009 | `us-002... :: title boundary tests` | TBC | Not implemented | (simulation : DEF-FICTIF-001/004) |
| FR-008 | US-003 | BLOCKED | — | — | Not applicable | Not applicable | — |
| FR-009 | US-002 | AC-03 | TC-010 | `us-002... :: accepts creation without description` | TBC | Not implemented | — |
| FR-010 | US-002 | AC-04 | TC-011/012 | `us-002... :: description boundary tests` | TBC | Not implemented | — |
| FR-011 | US-004 | AC-02 | TC-015/016 | `us-004... :: priority value tests` | TBC | Not implemented | — |
| FR-012 | US-004 | AC-01 | TC-014 | `us-004... :: rejects creation without priority` | TBC | Not implemented | — |
| FR-013 | US-005 | AC-01 | TC-017 | `us-005... :: accepts creation without due date` | TBC | Not implemented | — |
| FR-014 | US-005 | AC-02 | TC-018/019 | `us-005... :: due date boundary tests` | TBC | Not implemented | (simulation : DEF-FICTIF-002) |
| FR-015 | US-005 | AC-03 | TC-020 | `us-005... :: stores due date without time` | TBC | Not implemented | — |
| FR-016 | US-007 | AC-02 | TC-026 | `us-007... :: permanently deletes task` | TBC | Not implemented | — |
| FR-017 | US-007 | AC-01/02/03 | TC-025/026/027 | `us-007... :: confirmation/deletion/cancellation` | TBC | Not implemented | — |
| FR-018 | US-007 | AC-04 | TC-028 | `us-007... :: prevents restoration` | TBC | Not implemented | — |
| FR-019 | US-008 | AC-01 | TC-029/030 | `us-008... :: search by title/description` | TBC | Not implemented | — |
| FR-020 | US-008 | AC-02 | TC-031 | `us-008... :: case-insensitive search` | TBC | Not implemented | (simulation : DEF-FICTIF-003) |
| FR-021 | US-009 | AC-01 | TC-032 | **Excluded** | Not applicable | Not applicable | — |
| FR-022 | US-010 | AC-01 | TC-033 | **Excluded** | Not applicable | Not applicable | — |

**Éléments encore TBC dans cette chaîne :** l'intégralité de la colonne "CI/CD Execution" (aucune plateforme confirmée, §16), ainsi que le statut "Result" qui restera "Not implemented" jusqu'à l'écriture effective des scripts.

---

## 18. AI-Assisted Automation

Reprise et déclinaison Playwright des principes déjà posés dans l'Automation & CI-CD Strategy V1.0 (§10) :

| Usage | Description | Garde-fou |
|---|---|---|
| **Proposer du code Playwright** | L'IA peut générer un squelette de script Playwright à partir d'un Test Case documenté (ex. TC-001) et des conventions de ce document (§5, §6, §9, §10) | Le code généré doit être **revu et validé par le QA humain** avant intégration — jamais considéré comme un test prêt à l'emploi |
| **Expliquer une erreur** | L'IA peut aider à interpréter un message d'erreur ou une trace d'exécution Playwright | L'interprétation reste une **proposition**, à confirmer par le QA humain, en particulier si elle suggère une cause liée à une règle métier |
| **Analyser un échec** | L'IA peut rapprocher un échec observé d'un défaut connu (ex. DEF-FICTIF-004 dans la simulation) ou d'un changement récent | La classification finale (PASS/FAIL/Defect) reste une **décision humaine**, jamais automatique |
| **Proposer une amélioration** | L'IA peut suggérer une meilleure isolation, un meilleur locator, ou une réduction de duplication dans les scripts | Toute suggestion doit être **revue avant application**, en particulier pour vérifier qu'elle ne modifie pas silencieusement le comportement testé |
| **Aider à maintenir les tests** | Lors d'un changement de baseline (Requirements Baseline V1.0 §6, Change Control), l'IA peut aider à identifier les scripts potentiellement impactés via la traçabilité (§17) | La mise à jour effective des scripts reste **validée et appliquée par un humain** |

**Rappel explicite (règle 8 du prompt) :** aucune suggestion, script ou conclusion générée par l'IA dans ce contexte ne remplace la validation humaine du QA. Ce principe s'applique à l'identique de celui déjà énoncé dans l'Automation & CI-CD Strategy V1.0 (§10) et dans la Test Strategy V1.0 (§14, cycle *Prompt → LLM Output → Human QA Review → Issues Identified → QA Decision*).

---

## 19. Limitations / TBC

| Élément | Statut | Impact sur la conception Playwright |
|---|---|---|
| Application SmartTodo réelle et fonctionnelle | TBC | Aucun script ne peut être exécuté avant sa disponibilité |
| Interface UI (existence, structure, pages) | TBC | Empêche de finaliser §9 (Locators), §12 (POM) |
| Locators / attributs de test (`data-testid`, etc.) | TBC | Empêche d'écrire des sélecteurs concrets |
| Architecture applicative (monolithe, microservices) | TBC | Empêche de choisir entre test niveau UI ou niveau API |
| Existence et nature d'une API | TBC | Empêche de définir une éventuelle stratégie de préparation de données via API (§7, §11) |
| Mécanisme d'authentification | TBC | Empêche de finaliser §8 (Authentication & Test Isolation) |
| Environnement de test (staging, dev, etc.) | TBC | Empêche toute exécution réelle (§14) |
| Comptes de test dédiés | TBC | Empêche de préparer des fixtures utilisateur concrètes (§8, §11) |
| Plateforme CI/CD | TBC | Empêche de finaliser §16 (CI/CD Readiness) |
| Contenu exact de plusieurs données de test | TBC | Signalé dans `test-data.md` (ex. DATA-TITLE-004/005, DATA-SEARCH-003) ; empêche de finaliser les constantes de données (§7) |
| Fuseau horaire de référence (« date du jour », FR-014) | TBC | Empêche de finaliser les données de TC-018/TC-019 (§7) |
| Comportement individuel des filtres statut/priorité | TBC / OPEN | Justifie l'exclusion permanente de TC-032/TC-033 (§3.4, §6, §15, §17) |
| Validation de Q8 (caractères du titre) | OPEN / BLOCKED | Justifie l'absence totale de conception pour US-003 |
| Outillage de reporting/diagnostic (§13) | TBC | Empêche de configurer captures d'écran, traces, vidéos |

---

## 20. AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Aucune exigence inventée | Confirmé — toutes les FR/AC référencées (§6, §10, §17) proviennent de `Requirements-Baseline-V1.0.md` et `User-Stories-Baseline-V1.0.md`, sans ajout |
| Aucun comportement non défini transformé en règle | Confirmé — les Expected Results TBC (messages d'erreur, codes retour) restent explicitement marqués TBC dans les assertions proposées (§10), jamais comblés par une supposition |
| Q8 correctement bloqué | Confirmé — US-003/FR-008 marquées "Not applicable" partout (§3.3, §6, §17, §19), aucune règle de caractères inventée |
| US-003 non automatisée | Confirmé — aucun test, fixture, ou mapping proposé pour US-003 dans l'ensemble du document |
| TC-032/033 exclus | Confirmé — explicitement exclus en §3.4, §6, §7, §15, §17, avec justification cohérente (gap sur le comportement individuel des filtres) |
| Traçabilité conservée | Confirmé — la matrice §17 reprend exactement le mapping FR → US → AC → TC déjà établi dans `test-cases.md` et l'Automation & CI-CD Strategy V1.0, sans modification |
| TBC correctement identifiés | Confirmé — §19 consolide l'ensemble des éléments manquants déjà signalés dans les documents sources (Test Plan V1.0 §6.2, Test Design V1.0 §8, Automation & CI-CD Strategy V1.0 §9), sans en omettre ni en ajouter d'inventés |
| Playwright présenté comme choix de projet, non comme fait des exigences | Confirmé — la note de cadrage en §1 précise explicitement que Playwright reste TBC dans les Requirements, la Test Strategy et l'Automation & CI-CD Strategy, et que son usage ici est une décision de conception propre à ce document |

### Problèmes identifiés

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | Aucun élément technique réel (UI, API, architecture, environnement) n'est confirmé | Impossible d'écrire un seul script Playwright réel à partir de cette conception | Obtenir ces informations auprès de l'équipe technique avant toute implémentation |
| 2 | Les noms de tests proposés (§6, §17) sont des conventions, non des tests existants | Risque de confusion si ce document est lu comme une suite déjà implémentée | Rappeler systématiquement le statut "Not implemented" lors de tout partage de ce document |
| 3 | Plusieurs données de test restent à contenu TBC (`test-data.md`) | Les constantes de données Playwright (§7, §11) ne peuvent pas être finalisées | Le QA humain doit définir des valeurs concrètes avant l'implémentation |
| 4 | Le Page Object Model (§12) est proposé de façon conditionnelle, sans confirmation de l'existence d'une UI | Risque de choix d'architecture prématuré | Confirmer l'existence et la nature de l'UI/API avant de trancher entre POM et une approche API |

---

## 21. Document Status

**Status: Draft — To Be Validated**

Cette conception Playwright Automation Design ne doit pas être considérée comme baselinée ni servir de base à une implémentation avant revue et validation humaine par un QA senior, notamment sur :
- la sélection et l'organisation des Test Cases candidats (§3, §5, §6) ;
- les conventions de nommage proposées (§6, §17) ;
- l'arbitrage sur le Page Object Model une fois l'UI/API confirmée (§12) ;
- la résolution des éléments listés en §19 avant toute implémentation réelle.

**Next QA activity:** confirmation des éléments techniques (§19), validation humaine de cette conception, puis implémentation des premiers scripts Playwright pour les Test Cases High priority (US-001, US-006, US-007).
