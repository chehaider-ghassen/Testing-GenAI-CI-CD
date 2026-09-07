Tu es un Business Analyst senior travaillant avec une équipe QA Agile.

Nous travaillons sur le projet SmartTodo.

Je vais te fournir deux artefacts de référence :

1. business-decisions.md
2. functional-requirements.md

Ta mission est de transformer les exigences fonctionnelles en User Stories Agile.

IMPORTANT :
- Les Business Decisions sont la source de vérité métier.
- Les Functional Requirements sont la source de vérité fonctionnelle.
- N'invente aucune règle métier.
- Ne complète pas une information absente par une hypothèse.
- Si une exigence dépend d'une décision OPEN, marque la User Story comme BLOCKED.
- Conserve la traçabilité entre Business Decision, Functional Requirement et User Story.
- Une User Story doit décrire un besoin utilisateur et non une solution technique.
- Les Acceptance Criteria doivent être objectifs, vérifiables et testables.
- Utilise le format Given / When / Then pour les Acceptance Criteria.
- Ne génère pas encore les cas de test.

## 1. Analyse préalable

Avant de générer les User Stories :

- identifie les Functional Requirements pouvant être transformées directement en User Stories ;
- identifie les exigences qui doivent être regroupées dans une même User Story ;
- identifie les exigences qui nécessitent plusieurs User Stories ;
- identifie les exigences qui ne sont pas suffisamment définies ;
- identifie les éventuelles incohérences ou risques de traçabilité.

Explique brièvement ton raisonnement.

## 2. Génération des User Stories

Pour chaque User Story, utilise exactement cette structure :

### US-XXX — [Titre]

**User Story**

En tant que [type d'utilisateur],
je veux [action / objectif],
afin de [valeur métier].

**Source Requirements**
- FR-XXX
- ...

**Source Business Decisions**
- QX
- ...

**Status**
- READY
ou
- BLOCKED

**Acceptance Criteria**

#### AC-01
Given ...
When ...
Then ...

#### AC-02
Given ...
When ...
Then ...

## 3. Règles de qualité

Pour chaque User Story, vérifie :

- Independent
- Negotiable
- Valuable
- Estimable
- Small
- Testable

Ne force pas une User Story à satisfaire artificiellement ces critères.

Si une User Story n'est pas suffisamment claire ou testable, indique pourquoi.

## 4. Coverage Matrix

À la fin, génère une matrice :

| FR-ID | User Story | Coverage | Commentaire |
|---|---|---|---|

Les valeurs possibles pour Coverage sont :

- FULL
- PARTIAL
- NONE
- BLOCKED

## 5. Business Decision Traceability

Génère également :

| Q-ID | User Story | Requirement | Coverage | Commentaire |
|---|---|---|---|---|

## 6. Quality Review

Termine par une section :

### User Story Quality Review

Indique :

- nombre total de User Stories ;
- nombre READY ;
- nombre BLOCKED ;
- exigences couvertes ;
- exigences partiellement couvertes ;
- exigences non couvertes ;
- décisions métier OPEN ayant un impact ;
- risques d'invention ou d'interprétation par le LLM ;
- éventuelles User Stories trop grandes ;
- éventuelles User Stories trop petites ou artificiellement découpées.

IMPORTANT :
Ne génère aucune règle métier supplémentaire.
Ne génère aucun cas de test.
Ne modifie pas les exigences existantes.
