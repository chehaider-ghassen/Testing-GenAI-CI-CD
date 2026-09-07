# SmartTodo — Automation & CI-CD Strategy

**Version:** 1.0
**Status:** Draft — To Be Validated
**AI Assistance:** Yes
**Human QA Validation:** Required
**Based on:** Requirements Baseline V1.0 + User Stories Baseline V1.0 + Test Strategy V1.0 + Test Plan V1.0 + Test Design V1.0 + Test Cases V1.0 + Test Data V1.0 + Test Execution (SIMULATION) + Defect Management (SIMULATION) + Test Execution Report (SIMULATION) + Retest & Regression Testing (SIMULATION)

---

## 1. Objectif

L'automatisation vise à exécuter de façon répétable et déterministe un sous-ensemble des Test Cases baselinés, afin de :

- réduire le coût et le délai des campagnes de **régression** répétées (cf. Test Strategy V1.0 §12, Test Plan V1.0 §14) ;
- détecter plus rapidement une régression fonctionnelle du type de celle illustrée dans la simulation Retest & Regression (DEF-FICTIF-004, introduit par la correction de DEF-FICTIF-001) ;
- libérer l'effort manuel pour les zones qui en ont réellement besoin : exploration, cas ambigus (US-009, US-010), et le périmètre encore bloqué (US-003).

L'automatisation **ne remplace pas** la validation humaine du QA, ni la Test Strategy, ni le Test Plan : elle en est une modalité d'exécution pour le sous-ensemble de tests qui s'y prête, selon les critères du §3.

**Ce document n'invente aucune architecture, aucune API, aucun sélecteur d'interface et aucun framework** au-delà de ce qui est explicitement mentionné dans les documents sources (à savoir : rien de confirmé — voir §9).

---

## 2. Automation Scope

### 2.1 Tests à automatiser (candidats)

Sous-ensemble des Test Cases READY, sélectionné selon les critères du §3 — détaillé dans la matrice correspondante.

### 2.2 Tests à conserver manuels

- Tests où le résultat attendu est explicitement incomplet ou TBC dans `test-cases.md` (ex. message d'erreur exact non défini) — l'automatisation d'une assertion sur un comportement non spécifié introduirait un risque de faux-négatif ou de règle inventée, ce qui est interdit (règle 2 du prompt).
- Tests exploratoires, déjà identifiés comme non structurés par nature dans la Test Strategy V1.0 (§4 et §13).
- **TC-032 (US-009)** et **TC-033 (US-010)** : le résultat détaillé attendu dépend d'un comportement non défini (filtres individuels statut/priorité). Automatiser une assertion sur ce point reviendrait à définir implicitement ce comportement — explicitement interdit par la règle 7 du prompt. Seule la partie du comportement explicitement définie (possibilité technique de combiner filtres/recherche) pourrait, à terme, être automatisée une fois le gap résolu — non fait ici.

### 2.3 Tests non automatisables pour le moment

L'ensemble des Test Cases READY est **techniquement non automatisable dans l'immédiat**, faute d'environnement technique confirmé (API, UI, architecture — voir §9). Cette Automation Strategy prépare la sélection et l'approche ; elle ne peut pas être exécutée avant la résolution des éléments listés en §9.

### 2.4 Tests bloqués

- **US-003 / FR-008** : BLOCKED (Q8 OPEN). Aucun Test Case n'existe pour cette User Story (cf. `test-cases.md`, Traceability Matrix) ; aucune automatisation n'est donc possible ni envisageable tant que Q8 n'est pas validée.

---

## 3. Automation Candidates

Sélection fondée sur les critères de la règle 4 : répétitivité, stabilité, valeur de régression, criticité, coût d'exécution manuelle. Seuls les Test Cases dont l'Expected Result est **suffisamment défini** (pas de comportement TBC bloquant l'assertion) et dont la valeur de régression est explicitement établie (Test Strategy V1.0 §12, `defect-management.md` §6) sont retenus.

| Test Case | Requirement | User Story | Automation Candidate | Justification | Priority |
|---|---|---|---|---|---|
| TC-005 | FR-006 | US-002 | **Yes** | Règle binaire simple (titre absent → rejet), forte valeur de régression (impactée par DEF-FICTIF-001/004 dans la simulation), répétée à chaque campagne | High |
| TC-006 | FR-007 | US-002 | **Yes** | Test de borne basse (1 caractère) ; a révélé une régression dans la simulation (DEF-FICTIF-004) — valeur de régression directement démontrée | High |
| TC-007 | FR-007 | US-002 | **Yes** | Test de borne haute valide (100 caractères), déterministe, répété à chaque campagne de régression liée au titre | High |
| TC-008 | FR-007 | US-002 | **Yes** | Test de borne invalide (hors bornes), même famille de règle que TC-006/007/009 — candidat naturel à une suite automatisée de Boundary Value Analysis | High |
| TC-009 | FR-007 | US-002 | **Yes** | Test de borne haute invalide (101 caractères) ; Test Case d'origine de DEF-FICTIF-001, forte valeur de régression démontrée dans la simulation | High |
| TC-010 | FR-009 | US-002 | **Yes** | Règle binaire simple (description facultative), stable, peu coûteuse à automatiser | Medium |
| TC-011 | FR-010 | US-002 | **Yes** | Borne haute valide (500 caractères), même famille que TC-012 | Medium |
| TC-012 | FR-010 | US-002 | **Yes** | Borne invalide (>500 caractères), complète la paire boundary avec TC-011 | Medium |
| TC-013 | FR-004 | US-002 | **Yes** | Vérification déterministe d'une valeur par défaut, faible coût, haute stabilité | Medium |
| TC-014 | FR-012 | US-004 | **Yes** | Règle binaire simple (priorité obligatoire), stable | Medium |
| TC-015 | FR-011 | US-004 | **Yes** | Vérification des 3 valeurs valides d'une énumération fermée, forte réutilisation en régression | Medium |
| TC-016 | FR-011 | US-004 | **Yes** | Rejet d'une valeur hors énumération, complète TC-015 (Equivalence Partitioning) | Medium |
| TC-017 | FR-013 | US-005 | **Yes** | Règle binaire simple (date facultative), stable | Medium |
| TC-018 | FR-014 | US-005 | **Yes** | Cas positif de borne (date future), répété en régression | High |
| TC-019 | FR-014 | US-005 | **Yes** | Test Case d'origine de DEF-FICTIF-002 (date passée), forte valeur de régression démontrée dans la simulation | High |
| TC-020 | FR-015 | US-005 | **Yes** | Vérification déterministe de format (sans composante horaire), stable | Medium |
| TC-021 | FR-003 | US-006 | **Yes** | Vérification déterministe des 2 valeurs de statut, stable et peu coûteuse | Medium |
| TC-022 | FR-005 | US-006 | **Yes** | Transition d'état déterministe et critique (À faire → Terminée), forte valeur de régression | High |
| TC-023 | FR-005 | US-006 | **Yes** | Transition d'état déterministe et critique (Terminée → À faire), symétrique à TC-022 | High |
| TC-024 | FR-005 | US-006 | **Yes** | Rejet d'une transition non autorisée, complète la couverture State Transition Testing | High |
| TC-001 | FR-001 | US-001 | **Yes** | Règle de sécurité fonctionnelle critique (isolation des tâches), haute criticité (Risque R-001, High), forte valeur de régression | High |
| TC-002, TC-003, TC-004 | FR-002 | US-001 | **Yes** | Règles de sécurité fonctionnelle critiques (accès/modification/suppression croisés interdits), haute criticité (R-001), coût manuel élevé si répété à chaque campagne | High |
| TC-025, TC-026, TC-027 | FR-016, FR-017 | US-007 | **Yes** | Suppression et confirmation, action critique et irréversible (R-005, High), forte valeur de régression | High |
| TC-028 | FR-018 | US-007 | **Yes** | Non-restauration, règle simple et déterministe, complète le parcours de suppression | Medium |
| TC-029, TC-030 | FR-019 | US-008 | **Yes** | Périmètre de recherche, stable et répétable | Medium |
| TC-031 | FR-020 | US-008 | **Yes** | Test Case d'origine de DEF-FICTIF-003 (casse), forte valeur de régression démontrée dans la simulation | High |
| TC-032 | FR-021 | US-009 | **No** | Résultat détaillé du filtrage dépend d'un comportement non défini (filtres individuels) ; automatiser introduirait une hypothèse non validée sur le comportement attendu | — |
| TC-033 | FR-022 | US-010 | **No** | Même limitation que TC-032, dépendance au même gap non résolu | — |
| — (US-003) | FR-008 | US-003 | **Not applicable** | Aucun Test Case n'existe (BLOCKED, Q8 OPEN) | — |

**Synthèse :** 27 Test Cases candidats (Yes) sur les 31 Test Cases READY existants ; 2 Test Cases explicitement exclus de l'automatisation pour raison de gap fonctionnel (TC-032, TC-033) ; 1 exigence hors périmètre car bloquée (FR-008/US-003, sans Test Case).

**Priorité d'automatisation :** alignée sur les risques déjà identifiés dans la Test Strategy V1.0 (§6) — priorité High pour R-001 (isolation), R-002 (transitions), R-003/R-004 (bornes titre/description/date), R-005 (suppression), et les trois zones ayant révélé une régression dans la simulation (FR-007, FR-014, FR-020).

---

## 4. Automation Approach

**Framework / outillage :** **TBC.** Aucun framework d'automatisation, langage de script, ou outil n'est mentionné dans les documents sources (Test Strategy V1.0 §13 : « Aucun framework d'automatisation spécifique n'est imposé par les exigences actuelles » ; Test Plan V1.0 §15 : idem).

**Niveau d'automatisation (UI / API / unitaire) :** **TBC.** L'existence et la nature d'une API ou d'une interface UI ne sont confirmées dans aucun document source (Test Plan V1.0 §6.2, Test Design V1.0 §8 G-DESIGN-006). Le niveau auquel les 27 Test Cases candidats seraient automatisés (via API, via UI, ou au niveau unitaire) ne peut donc pas être déterminé à ce stade.

**Approche recommandée (à valider par le QA humain une fois l'environnement connu), fondée uniquement sur les principes déjà énoncés dans la Test Strategy V1.0 (§13) :**
- Prioriser l'automatisation des scénarios **stables, répétables, déterministes**, ce qui correspond exactement à la sélection du §3.
- Structurer les tests automatisés par domaine fonctionnel (propriété/confidentialité, création de tâche, priorité, date d'échéance, statut, suppression, recherche), en miroir de l'organisation déjà utilisée dans `test-cases.md`.
- Ne pas automatiser de comportement dont l'Expected Result reste TBC dans `test-cases.md`, pour éviter de figer une hypothèse non validée dans un script.

**Ce que ce document ne fait pas :** il ne propose aucun outil précis (ex. Selenium, Playwright, Postman, Cypress, pytest, etc.), aucune structure de projet de test, aucun sélecteur d'élément UI, et aucun endpoint d'API — car rien de tout cela n'est présent dans les documents sources.

---

## 5. Automated Regression

L'automatisation des 27 Test Cases candidats permettrait de couvrir la majorité du périmètre de régression déjà défini :

- **Régression ciblée par correction** (`defect-management.md` §6, `retest-regression-testing.md` §4) : les zones TC-005–TC-013 (US-002), TC-017–TC-020 (US-005) et TC-029–TC-031, TC-033 (US-008/US-010) correspondent exactement aux périmètres de régression déjà identifiés pour les trois défauts simulés (DEF-FICTIF-001/002/003). Une suite automatisée sur ces Test Cases permettrait de rejouer cette régression à chaque changement touchant ces zones, sans effort manuel répété.
- **Détection anticipée d'effets de bord** : la simulation Retest & Regression a illustré qu'une correction sur FR-007 (borne haute) pouvait casser la borne basse de la même règle (DEF-FICTIF-004, TC-006). Une suite automatisée couvrant l'ensemble de la famille Boundary Value (TC-006 à TC-009, TC-011/TC-012) réduit le risque qu'un tel effet de bord passe inaperçu.
- **Régression de sécurité fonctionnelle** (US-001, R-001 High) : TC-001 à TC-004 étant critiques et à exécuter systématiquement, leur automatisation réduit le coût de leur répétition à chaque campagne.
- **Zones explicitement exclues de la régression automatisée** : TC-032, TC-033 (comportement partiellement défini), et tout le périmètre US-003/FR-008 (aucun test).

Cette section reste **une proposition d'usage**, cohérente avec la stratégie de régression déjà définie (Test Strategy V1.0 §12, Test Plan V1.0 §14) — elle n'introduit aucun nouveau périmètre de régression.

---

## 6. CI-CD Integration

**Plateforme CI/CD : TBC.** Aucune plateforme (GitHub Actions, GitLab CI, Jenkins, Azure DevOps, etc.) n'est mentionnée dans les documents sources.

Schéma générique à haut niveau, sans détail d'implémentation ni outil précis :

```
Code Change → Build → Automated Tests → Results → Feedback
```

| Étape | Description (générique, non liée à un outil précis) |
|---|---|
| **Code Change** | Une modification de code est proposée (ex. correction d'un défaut comme DEF-FICTIF-001/004, ou nouvelle fonctionnalité) |
| **Build** | Le code modifié est compilé/assemblé — mécanisme exact **TBC** |
| **Automated Tests** | Les 27 Test Cases candidats à l'automatisation (§3) seraient exécutés automatiquement sur ce build |
| **Results** | Chaque test automatisé produit un résultat parmi PASS / FAIL / BLOCKED (voir §7) |
| **Feedback** | Les résultats sont remontés à l'équipe (mécanisme de notification exact **TBC**) |

**Fréquence de déclenchement** (à chaque commit, à chaque pull request, planifiée) : **TBC** — non définie dans les documents sources.

**Environnement d'exécution CI/CD** (conteneur, machine dédiée, cloud) : **TBC** — dépend de l'environnement technique global déjà signalé comme non confirmé (Test Plan V1.0 §6.2).

---

## 7. Test Execution & Reporting

Les tests automatisés, une fois exécutés, produiraient un résultat parmi les statuts déjà utilisés de façon cohérente dans l'ensemble de la chaîne documentaire du projet (`test-execution.md`, `retest-regression-testing.md`) :

- **PASS** : le comportement observé correspond à l'Expected Result défini dans `test-cases.md`.
- **FAIL** : le comportement observé diverge de l'Expected Result — exemple illustré par la simulation : TC-006 en FAIL après la correction fictive de DEF-FICTIF-001, révélant DEF-FICTIF-004.
- **BLOCKED** : le test ne peut pas s'exécuter (ex. environnement indisponible, dépendance non satisfaite) — statut déjà utilisé dans `test-execution.md` (0 BLOCKED dans la simulation, mais le statut existe dans le vocabulaire du projet).

**Lien avec la gestion des anomalies :** un résultat **FAIL** en exécution automatisée suivrait le même cycle déjà défini dans la Test Strategy V1.0 (§11) et repris dans `defect-management.md` (§2) :

**Identify → Document → Triage → Fix → Retest → Regression → Close**

Concrètement, un FAIL automatisé génèrerait un enregistrement dans le Defect Log selon le même gabarit que `defect-management.md` (Defect ID, Test Case, Requirement, User Story, Summary, Severity, Priority, Status, Evidence, Traceability), l'évidence étant alors le résultat d'exécution automatisé plutôt qu'une observation manuelle.

**Outil de reporting / tableau de bord :** **TBC** — aucun outil de reporting de résultats de test (dashboard, rapport HTML, intégration à un outil de suivi des anomalies) n'est mentionné dans les documents sources.

---

## 8. Traceability

**FR → US → AC → Test Case → Automated Test → CI/CD Execution → Result → Defect**

| FR | US | AC | Test Case | Automated Test | CI/CD Execution | Result | Defect (si applicable) |
|---|---|---|---|---|---|---|---|
| FR-001 | US-001 | AC-01 | TC-001 | Candidat (§3) | TBC | TBC | — |
| FR-002 | US-001 | AC-02 | TC-002, TC-003, TC-004 | Candidat (§3) | TBC | TBC | — |
| FR-003 | US-006 | AC-01 | TC-021 | Candidat (§3) | TBC | TBC | — |
| FR-004 | US-002 | AC-05 | TC-013 | Candidat (§3) | TBC | TBC | — |
| FR-005 | US-006 | AC-02/03/04 | TC-022, TC-023, TC-024 | Candidat (§3) | TBC | TBC | — |
| FR-006 | US-002 | AC-01 | TC-005 | Candidat (§3) | TBC | TBC | — |
| FR-007 | US-002 | AC-02 | TC-006, TC-007, TC-008, TC-009 | Candidat (§3) | TBC | TBC (simulation : TC-006 FAIL, TC-009 PASS) | DEF-FICTIF-004 (simulation, TC-006) ; DEF-FICTIF-001 (simulation, TC-009) |
| FR-008 | US-003 | BLOCKED | — | Non applicable | Non applicable | Non applicable | — |
| FR-009 | US-002 | AC-03 | TC-010 | Candidat (§3) | TBC | TBC | — |
| FR-010 | US-002 | AC-04 | TC-011, TC-012 | Candidat (§3) | TBC | TBC | — |
| FR-011 | US-004 | AC-02 | TC-015, TC-016 | Candidat (§3) | TBC | TBC | — |
| FR-012 | US-004 | AC-01 | TC-014 | Candidat (§3) | TBC | TBC | — |
| FR-013 | US-005 | AC-01 | TC-017 | Candidat (§3) | TBC | TBC | — |
| FR-014 | US-005 | AC-02 | TC-018, TC-019 | Candidat (§3) | TBC | TBC (simulation : TC-019 PASS après correctif fictif) | DEF-FICTIF-002 (simulation, TC-019) |
| FR-015 | US-005 | AC-03 | TC-020 | Candidat (§3) | TBC | TBC | — |
| FR-016 | US-007 | AC-02 | TC-026 | Candidat (§3) | TBC | TBC | — |
| FR-017 | US-007 | AC-01/02/03 | TC-025, TC-026, TC-027 | Candidat (§3) | TBC | TBC | — |
| FR-018 | US-007 | AC-04 | TC-028 | Candidat (§3) | TBC | TBC | — |
| FR-019 | US-008 | AC-01 | TC-029, TC-030 | Candidat (§3) | TBC | TBC | — |
| FR-020 | US-008 | AC-02 | TC-031 | Candidat (§3) | TBC | TBC (simulation : PASS après correctif fictif) | DEF-FICTIF-003 (simulation, TC-031) |
| FR-021 | US-009 | AC-01 | TC-032 | **Non candidat (§3)** | Non applicable | Non applicable | — |
| FR-022 | US-010 | AC-01 | TC-033 | **Non candidat (§3)** | Non applicable | Non applicable | — |

**Note sur la colonne "CI/CD Execution" :** entièrement TBC dans ce document, car aucune exécution CI/CD réelle n'a eu lieu — cette Automation Strategy est préparatoire (règle 9 du prompt : cohérence avec Test Strategy/Test Plan, tous deux également Draft — To Be Validated).

---

## 9. Limitations & TBC

Éléments nécessaires avant de pouvoir réellement démarrer l'automatisation, aucun n'étant confirmé dans les documents sources :

| Élément | Statut | Source du gap |
|---|---|---|
| Application SmartTodo disponible et fonctionnelle | TBC | Aucune exécution réelle n'a eu lieu (Test Execution reste NOT RUN hors simulation) |
| Environnement de test (staging, dev, préprod) | TBC | Test Plan V1.0 §6.2 |
| Framework d'automatisation | TBC | Test Strategy V1.0 §13 |
| Architecture applicative (monolithe, microservices, etc.) | TBC | Test Plan V1.0 §6.2, Test Design V1.0 §8 (G-DESIGN-006) |
| Existence et nature d'une API | TBC | Test Plan V1.0 §6.2, Test Design V1.0 §8 |
| Existence et nature d'une interface UI | TBC | Test Plan V1.0 §6.2, Test Design V1.0 §8 |
| Accès (identifiants, environnement, permissions) pour l'exécution automatisée | TBC | Non défini dans les documents sources |
| Données de test concrètes (contenu exact des titres, descriptions, etc.) | TBC | Test Data V1.0 signale plusieurs valeurs comme "contenu exact TBC" (ex. DATA-TITLE-004, DATA-TITLE-005, DATA-SEARCH-003) |
| Plateforme CI/CD | TBC | Non mentionnée dans les documents sources |
| Mécanisme d'authentification (nécessaire pour TC-001 à TC-004) | TBC | Test Plan V1.0 §6.2 |
| Fuseau horaire de référence pour « la date du jour » (nécessaire pour TC-018, TC-019) | TBC | Test Design V1.0 §8 (G-DESIGN-005) |
| Comportement individuel des filtres statut/priorité | TBC / OPEN | Empêche l'automatisation de TC-032/TC-033 (voir §2, §3) |
| Validation de Q8 (caractères du titre) | OPEN / BLOCKED | Empêche toute automatisation pour US-003/FR-008 |
| Outil de suivi des anomalies pour les FAIL automatisés | TBC | `defect-management.md` §8 |
| Seuils quantitatifs de sortie (taux de PASS requis, etc.) | TBC | Test Strategy V1.0 §10, Test Plan V1.0 §12 |

**Conclusion de section :** aucune automatisation réelle ne peut être lancée avant la résolution d'au moins les éléments techniques (application, environnement, framework, architecture, accès, données) ; les éléments fonctionnels (Q8, filtres) resteront des exclusions permanentes du périmètre automatisé tant qu'ils ne sont pas résolus, indépendamment de l'état technique.

---

## 10. AI Testing

Conformément à la Test Strategy V1.0 (§14), l'IA reste un **assistant QA**, jamais la source de vérité, y compris dans le contexte de l'automatisation. Rôles où l'IA peut assister, sans remplacer la validation humaine :

- **Génération initiale de scripts** : à partir d'un Test Case défini (ex. TC-001, TC-007), l'IA peut proposer un squelette de script correspondant à l'Expected Result documenté — ce squelette reste une **proposition** à revoir, corriger et valider par un QA humain avant intégration, en particulier pour s'assurer qu'aucun comportement TBC n'a été silencieusement comblé par une hypothèse.
- **Revue de scripts** : l'IA peut relire un script existant pour vérifier sa cohérence avec le Test Case source (mêmes préconditions, mêmes données, même Expected Result), signalant les écarts pour arbitrage humain.
- **Analyse des échecs** : face à un résultat FAIL, l'IA peut aider à formuler une hypothèse de cause (ex. rapprochement avec un défaut connu comme DEF-FICTIF-004 dans la simulation), sans jamais classer elle-même le résultat en PASS/FAIL/Closed — cette classification reste une décision QA humaine, cohérente avec la règle "ne pas déclarer PASS/Closed sans preuve" déjà appliquée dans `retest-regression-testing.md` (§7).
- **Maintenance assistée** : lorsqu'une exigence baselinée évolue (ex. via un futur Change Request sur Q8), l'IA peut aider à identifier les scripts potentiellement impactés à partir de la traçabilité FR → Test Case → Automated Test (§8), sans modifier automatiquement les scripts eux-mêmes.

**Limite stricte :** aucune suggestion de l'IA dans ce contexte — script généré, diagnostic d'échec, ou recommandation de maintenance — ne doit être considérée comme validée ou comme un test automatisé "prêt à l'emploi" sans revue et approbation explicite d'un QA humain, conformément à la règle 10 du prompt.

---

## 11. AI Self-Review

| Point de vérification | Résultat |
|---|---|
| Outils inventés | Aucun détecté — aucun framework, langage de script ou plateforme CI/CD n'est nommé ; tous marqués TBC (§4, §6, §9) |
| Architecture inventée | Aucune détectée — aucune architecture (microservices, monolithe, etc.), API ou composant UI n'est décrit ; tous marqués TBC (§4, §9), cohérent avec Test Plan V1.0 §6.2 et Test Design V1.0 §8 |
| Tests inutilement automatisés | Aucun détecté — TC-032, TC-033 sont explicitement exclus (§2, §3) malgré leur statut READY WITH OBSERVATION, car leur Expected Result dépend d'un comportement non défini ; US-003 est exclue en totalité (aucun Test Case) |
| Exigences oubliées | Aucune détectée — les 21 FR baselinées sont toutes reprises dans la matrice de traçabilité (§8) ; FR-008 y figure explicitement comme non applicable |
| Règles métier inventées | Aucune détectée — aucune assertion automatisée proposée ne dépasse l'Expected Result déjà documenté dans `test-cases.md` ; les Test Cases dont l'Expected Result est TBC ne sont pas transformés en assertions fermes |
| Q8 / FR-008 | Traité exclusivement comme BLOCKED / Not applicable dans tout le document (§2, §3, §8, §9), sans aucune règle de caractères inventée |
| Filtres (US-009/US-010) | TC-032 et TC-033 explicitement marqués "No" en candidature d'automatisation (§3), avec justification centrée sur l'absence de définition du comportement individuel — aucun comportement de filtrage n'a été supposé ou codé implicitement |
| Incohérences avec Test Strategy / Test Plan | Aucune détectée — les priorités d'automatisation (§3) s'alignent sur les risques R-001 à R-008 déjà définis dans la Test Strategy V1.0 (§6) ; l'approche d'automatisation (§4) reprend explicitement les critères déjà énoncés en Test Strategy V1.0 §13, sans les redéfinir |
| Traçabilité incorrecte | Aucune détectée — la matrice §8 reprend exactement le mapping FR → US → AC → TC déjà établi dans `test-cases.md` (Traceability Matrix) et `retest-regression-testing.md` (§8), sans modification |

### Problèmes identifiés

| # | Issue | Impact | Action recommandée |
|---|---|---|---|
| 1 | Aucun environnement technique (application, API/UI, architecture, accès) n'est confirmé | Impossible de démarrer une quelconque automatisation réelle, même pour les 27 Test Cases candidats | Obtenir ces informations auprès de l'équipe technique avant toute implémentation |
| 2 | Aucun framework ni plateforme CI/CD n'est défini | L'approche d'automatisation (§4) et l'intégration CI/CD (§6) restent à un niveau conceptuel, non actionnable en l'état | Le QA Lead / équipe technique doit choisir un outillage adapté à l'architecture, une fois celle-ci confirmée |
| 3 | Plusieurs données de test concrètes restent TBC (`test-data.md`) | Les scripts automatisés ne pourront pas être finalisés tant que le contenu exact de certaines données (titres, termes de recherche) n'est pas défini | Le QA humain doit définir un jeu de données concret avant l'implémentation des scripts |
| 4 | TC-032/TC-033 restent définitivement exclus de l'automatisation tant que le gap sur les filtres individuels n'est pas résolu | Une partie de la couverture de régression automatisée (US-009, US-010) restera manuelle ou absente indéfiniment | Escalade vers le Product Owner, déjà recommandée dans le Test Design, le Test Plan et le Retest & Regression Testing |
| 5 | La colonne "CI/CD Execution" de la matrice de traçabilité (§8) est entièrement TBC | La chaîne de traçabilité complète (jusqu'à un résultat CI/CD réel) ne peut pas être vérifiée à ce stade | Compléter cette colonne uniquement une fois une exécution CI/CD réelle mise en place |

### Statut final

**DRAFT — TO BE VALIDATED.** Cette Automation & CI-CD Strategy ne doit pas être considérée comme baselinée avant revue et validation humaine par un QA senior, notamment sur :
- la sélection finale des 27 Test Cases candidats (§3) ;
- l'arbitrage sur TC-032/TC-033 une fois le gap des filtres individuels résolu ;
- le choix du framework et de la plateforme CI/CD, une fois l'environnement technique confirmé.

**Next QA activity:** confirmation de l'environnement technique et de l'outillage (§9), puis validation humaine de la sélection des candidats à l'automatisation avant toute implémentation.
