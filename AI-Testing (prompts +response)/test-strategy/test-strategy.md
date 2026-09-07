# SmartTodo — Test Strategy

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI assistance:** Yes

## 1. Objectifs des tests

Les tests ont pour objectifs de vérifier que les fonctionnalités baselinées de SmartTodo respectent les exigences fonctionnelles et les Acceptance Criteria associés.

Les principaux objectifs sont :

- Vérifier la propriété et l'isolation des tâches entre utilisateurs — FR-001, FR-002 / US-001.
- Vérifier la création d'une tâche et les règles de validation du titre et de la description — FR-004, FR-006, FR-007, FR-009, FR-010 / US-002.
- Vérifier les valeurs et l'obligation de la priorité — FR-011, FR-012 / US-004.
- Vérifier la date d'échéance — FR-013, FR-014, FR-015 / US-005.
- Vérifier les statuts disponibles et les transitions autorisées — FR-003, FR-005 / US-006.
- Vérifier la suppression définitive et sa confirmation — FR-016, FR-017, FR-018 / US-007.
- Vérifier la recherche sur le titre et la description ainsi que son comportement insensible à la casse — FR-019, FR-020 / US-008.
- Vérifier la combinaison des filtres statut + priorité — FR-021 / US-009.
- Vérifier la combinaison recherche + filtres — FR-022 / US-010.

FR-008 / US-003 est exclu du périmètre testable tant que Q8 reste ouverte.

## 2. Périmètre des tests

### 2.1 In Scope

Le périmètre couvre les 21 exigences fonctionnelles baselinées : FR-001 à FR-007 et FR-009 à FR-022.

### 2.2 Blocked / Partially Testable

**FR-008 / Q8**

Q8 concernant les caractères autorisés et interdits dans le titre n'est pas validée. Aucun comportement de test ne doit donc être inventé pour cette exigence.

**FR-021 / US-009**

La combinaison du filtre statut et du filtre priorité est définie, mais le comportement détaillé de chacun des filtres pris individuellement n'est pas défini.

**FR-022 / US-010**

La combinaison recherche + filtres est définie, mais dépend également du comportement individuel des filtres, qui reste à préciser.

Ces deux points sont donc **partiellement testables / To Be Confirmed**.

### 2.3 Out of Scope

Aucun périmètre fonctionnel supplémentaire n'est défini dans les artefacts disponibles.

Les éléments techniques non définis restent **To Be Confirmed** plutôt que d'être considérés automatiquement comme hors périmètre.

## 3. Niveaux de test

| Niveau | Applicabilité | Statut |
|---|---|---|
| Unit Testing | Pertinent pour les règles métier et validations | To Be Confirmed |
| Integration Testing | Potentiellement pertinent pour les interactions entre composants | To Be Confirmed |
| API Testing | Pertinent uniquement si une API existe | To Be Confirmed |
| UI Testing | Pertinent uniquement si une interface UI existe | To Be Confirmed |
| System / E2E | Pertinent pour valider les parcours fonctionnels complets | To Be Confirmed |

L'architecture technique et les interfaces API/UI n'étant pas définies, aucun niveau technique spécifique ne doit être considéré comme confirmé.

## 4. Types de tests

| Type | Priorité | Justification | Couverture |
|---|---|---|---|
| Functional Testing | High | Vérification des fonctionnalités baselinées | FR-001 à FR-022, hors FR-008 |
| Negative Testing | High | Validation des comportements en cas de données invalides | US-001, US-002, US-004, US-005, US-006 |
| Boundary Value Testing | High | Règles de longueur explicitement définies | FR-007, FR-010 |
| State Transition Testing | High | Deux transitions de statut sont explicitement définies | FR-003, FR-005 / US-006 |
| Regression Testing | High | Vérification des fonctionnalités existantes après modification | FR-001 à FR-022 |
| Decision Table Testing | Medium | Pertinent pour certaines combinaisons de conditions | FR-021, FR-022 |
| Exploratory Testing | Medium | Complément aux tests définis | À confirmer selon l'état de l'application |
| Security-related Functional Testing | High | Vérification de l'isolation des tâches entre utilisateurs | FR-001, FR-002 |
| Performance Testing | To Be Confirmed | Aucun objectif de performance n'est défini | — |
| Usability Testing | To Be Confirmed | Aucun critère d'utilisabilité n'est défini | — |

## 5. Techniques de conception des tests

### Equivalence Partitioning

À appliquer lorsque les exigences définissent des catégories valides et invalides.

Exemples :

- priorité : Basse / Moyenne / Haute ;
- titre : longueur conforme / non conforme ;
- description : longueur conforme / supérieure à la limite.

### Boundary Value Analysis

Particulièrement pertinente pour :

- titre : 1 et 100 caractères ;
- description : 500 caractères.

Les valeurs hors limites devront également être couvertes.

### Decision Table

Pertinente pour analyser les combinaisons de conditions, notamment la combinaison recherche + filtres et statut + priorité.

Toutefois, le comportement individuel des filtres reste à définir.

### State Transition Testing

Pertinente pour FR-003 et FR-005.

Les transitions définies sont :

`À faire → Terminée`

`Terminée → À faire`

Toute autre transition doit être rejetée.

### Error Guessing

Peut compléter les techniques structurées afin d'identifier des erreurs potentielles autour des validations et opérations critiques.

### Exploratory Testing

Peut être utilisé en complément des tests formalisés, sous réserve de la disponibilité d'une application testable.

## 6. Tests basés sur les risques

| ID | Risque | Impact | Probabilité | Réponse de test | FR / US |
|---|---|---|---|---|---|
| R-001 | Accès ou modification d'une tâche appartenant à un autre utilisateur | High | To Be Confirmed | Tests d'isolation et d'accès | FR-001/002, US-001 |
| R-002 | Transition de statut non autorisée | Medium | To Be Confirmed | State Transition Testing | FR-003/005, US-006 |
| R-003 | Validation incorrecte des champs obligatoires ou limites | Medium | To Be Confirmed | Negative + Boundary Testing | FR-006/007/010/012 |
| R-004 | Acceptation d'une date d'échéance passée | Medium | To Be Confirmed | Boundary/Negative Testing | FR-014 |
| R-005 | Suppression incorrecte d'une tâche | High | To Be Confirmed | Tests de confirmation, annulation et suppression | FR-016/017, US-007 |
| R-006 | Restauration d'une tâche supprimée | Medium | To Be Confirmed | Test de non-restauration | FR-018 |
| R-007 | Recherche incorrecte | Medium | To Be Confirmed | Functional + case-insensitive testing | FR-019/020 |
| R-008 | Combinaison incorrecte des filtres/recherche | Medium | To Be Confirmed | Combination Testing | FR-021/022 |

Les valeurs de probabilité et d'impact qui ne sont pas définies dans les exigences doivent être validées par le QA / métier.

## 7. Données de test

Les données nécessaires comprennent notamment :

- plusieurs utilisateurs authentifiés ;
- tâches appartenant à différents utilisateurs ;
- titres valides et invalides selon la longueur définie ;
- titres de 1 et 100 caractères ;
- descriptions absentes ;
- descriptions jusqu'à 500 caractères ;
- descriptions dépassant 500 caractères ;
- priorités Basse, Moyenne et Haute ;
- statuts À faire et Terminée ;
- dates d'échéance valides et invalides ;
- termes de recherche ;
- combinaisons recherche + filtres ;
- combinaisons statut + priorité.

Aucune donnée spécifique concernant les caractères autorisés/interdits dans le titre ne doit être créée pour FR-008.

## 8. Environnement de test

Les exigences disponibles ne définissent pas :

- l'architecture de l'application ;
- l'existence d'une API ;
- l'existence d'une interface UI ;
- la base de données ;
- le mécanisme d'authentification ;
- les navigateurs supportés ;
- les systèmes d'exploitation ;
- les environnements disponibles.

Ces éléments sont donc **To Be Confirmed**.

## 9. Critères d'entrée

Les tests pourront commencer lorsque les conditions nécessaires seront satisfaites, notamment :

- Requirements Baseline V1.0 disponible ;
- User Stories Baseline V1.0 disponible ;
- exigences et User Stories pertinentes testables ;
- environnement de test disponible ;
- données de test disponibles ;
- blockers connus identifiés.

Les conditions techniques précises restent **To Be Confirmed**.

## 10. Critères de sortie

Les critères de sortie proposés sont :

- tests planifiés exécutés ;
- anomalies critiques/majeures traitées selon les règles projet ;
- régression nécessaire exécutée ;
- blockers documentés ;
- traçabilité vérifiée ;
- risques résiduels documentés et, si nécessaire, acceptés.

Aucun seuil quantitatif de réussite ou de couverture n'est défini dans les artefacts disponibles.

Les seuils quantitatifs sont donc **To Be Confirmed**.

## 11. Gestion des anomalies

Le cycle proposé est :

**Identify → Document → Triage → Fix → Retest → Regression → Close**

Une anomalie doit permettre au minimum d'identifier :

- la fonctionnalité concernée ;
- les étapes de reproduction ;
- les données utilisées ;
- le résultat attendu ;
- le résultat obtenu ;
- les éléments de traçabilité disponibles.

Les règles spécifiques de sévérité et de priorité ne sont pas définies et restent **To Be Confirmed**.

## 12. Stratégie de régression

La régression doit être orientée par l'impact des changements et les risques.

Une priorité particulière doit être donnée aux zones suivantes :

1. propriété et isolation des tâches ;
2. création et validation des tâches ;
3. statut et transitions ;
4. priorité ;
5. date d'échéance ;
6. suppression ;
7. recherche ;
8. filtres et combinaisons recherche/filtres.

Le périmètre exact de chaque campagne de régression dépendra de l'analyse d'impact du changement.

## 13. Stratégie d'automatisation

Les scénarios présentant les caractéristiques suivantes sont de bons candidats à l'automatisation :

- stables ;
- répétables ;
- déterministes ;
- fréquemment exécutés ;
- présentant un risque fonctionnel important.

Les tests exploratoires et les comportements encore non définis doivent rester principalement manuels.

Aucun framework d'automatisation spécifique n'est imposé par les exigences actuelles.

## 14. Stratégie de test AI / LLM

La GenAI est utilisée comme **assistant QA** et non comme source de vérité.

Elle peut assister les activités suivantes :

- analyse des exigences ;
- identification des conditions de test ;
- génération de scénarios candidats ;
- analyse des valeurs limites ;
- proposition de données de test ;
- analyse de traçabilité ;
- identification de risques ;
- analyse d'anomalies ;
- sélection de tests de régression.

Pour chaque utilisation importante de l'IA, le processus est :

**Prompt → LLM Output → Human QA Review → Issues Identified → QA Decision**

Le QA humain conserve la responsabilité de la décision finale.

Les risques spécifiques à surveiller sont :

- hallucination ;
- omission ;
- mauvaise interprétation ;
- hypothèse non justifiée ;
- propagation d'une ambiguïté ;
- erreur de traçabilité.

## 15. Traçabilité

La chaîne de traçabilité cible est :

**Business Decision → Functional Requirement → User Story → Acceptance Criteria → Test Case → Test Execution → Defect**

Les principaux points particuliers sont :

| FR | US | Situation |
|---|---|---|
| FR-008 | US-003 | BLOCKED |
| FR-021 | US-009 | READY WITH OBSERVATION |
| FR-022 | US-010 | READY WITH OBSERVATION |

## 16. Gaps et questions ouvertes

| ID | Gap / Question | Impact sur les tests | Statut |
|---|---|---|---|
| G-001 | Caractères autorisés/interdits dans le titre | FR-008 non testable | OPEN / BLOCKED |
| G-002 | Comportement individuel du filtre statut | Impacte FR-021/022 | To Be Confirmed |
| G-003 | Comportement individuel du filtre priorité | Impacte FR-021/022 | To Be Confirmed |
| G-004 | Interfaces API/UI | Empêche de confirmer certains niveaux de test | To Be Confirmed |
| G-005 | Architecture technique | Empêche de définir précisément certains tests techniques | To Be Confirmed |
| G-006 | Environnement de test | Configuration non définie | To Be Confirmed |
| G-007 | Navigateurs / OS supportés | Compatibilité non définie | To Be Confirmed |
| G-008 | Mécanisme d'authentification | Détails techniques non définis | To Be Confirmed |
| G-009 | Règles de sévérité/priorité des anomalies | Processus projet incomplet | To Be Confirmed |
| G-010 | Seuils quantitatifs de sortie | Aucun seuil défini | To Be Confirmed |

## 17. AI Self-Review

### Hallucinations

Aucune technologie, architecture ou interface spécifique ne doit être considérée comme confirmée sans source.

### Unsupported assumptions

Les éléments techniques non définis sont marqués **To Be Confirmed**.

### Requirement omissions

Les 21 exigences baselinées doivent être couvertes par la stratégie.

### Requirement transformation errors

La stratégie doit conserver le sens des exigences et des Acceptance Criteria.

### Ambiguity propagation

FR-021 et FR-022 ne doivent pas être transformées en règles détaillées concernant les filtres individuels.

### Traceability errors

Toute couverture doit pouvoir être reliée à une FR et/ou une US existante.

### Blocked Requirement Violation

Aucune règle de caractères ne doit être inventée pour FR-008/Q8.

### Test-Type Justification

Chaque type de test important doit être justifié par les fonctionnalités ou risques identifiés.

## 18. Final AI Assessment

### AI-identified issues

- FR-008 / Q8 reste bloquée.
- Les comportements individuels des filtres statut et priorité restent non définis.
- Les interfaces et l'architecture technique ne sont pas définies.
- Les seuils quantitatifs de sortie ne sont pas définis.
- Certaines décisions concernant l'environnement et les niveaux techniques nécessitent une confirmation.

### Human QA Review Required

Le QA doit notamment valider :

- les priorités des types de tests ;
- les niveaux de test réellement applicables ;
- les risques et leur criticité ;
- les critères d'entrée et de sortie ;
- les règles de gestion des anomalies ;
- l'environnement de test ;
- les décisions relatives aux gaps ouverts.

### Strategy Confidence

**Medium**

La stratégie couvre les exigences fonctionnelles baselinées et les User Stories associées, mais plusieurs éléments techniques et certaines règles fonctionnelles restent à confirmer.

## 19. Strategy Status

**DRAFT — TO BE VALIDATED**

Cette Test Strategy ne doit pas être considérée comme une baseline avant revue et validation humaine par le QA.

**Next QA activity:** Test Plan
