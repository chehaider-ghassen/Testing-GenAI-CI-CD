# Prompt — Générer le Test Design
Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.
À partir des documents suivants du projet **SmartTodo** :
* `Requirements-Baseline-V1.0.md`
* `User-Stories-Baseline-V1.0.md`
* `test-strategy.md`
* `test-plan.md`
génère un document professionnel **Test Design** en Markdown.
## Règles
1. Utilise **uniquement les informations présentes dans les documents sources**.
2. **N'invente aucune règle métier ou technique**.
3. Si une information est manquante, indique **TBC (To Be Confirmed)**.
4. Respecte le statut des exigences :
   * `FR-008 / Q8` → OPEN / BLOCKED
   * `US-003` → BLOCKED
   * `US-009` et `US-010` → READY WITH OBSERVATION
5. N'invente aucune règle concernant les caractères autorisés dans le titre.
6. N'invente pas le comportement individuel des filtres de statut et de priorité.
7. Maintiens la traçabilité **FR → US → AC → Test Design**.
8. Le LLM est un **assistant QA**, pas la source de vérité. Une validation humaine est obligatoire.
9. Ne génère pas encore les Test Cases détaillés.
## Contenu attendu
Le document doit contenir :
### 1. Objectif du Test Design
Expliquer le rôle du Test Design et sa relation avec le Test Strategy, le Test Plan et les Test Cases.
### 2. Techniques de conception
Identifier les techniques pertinentes pour SmartTodo, notamment lorsque justifié :
* Equivalence Partitioning
* Boundary Value Analysis
* State Transition Testing
* Decision Table Testing
* Negative Testing
### 3. Conditions de test
Pour chaque User Story applicable, identifier les principales conditions de test.
Format :
| ID | US | AC | Condition de test | Type | Technique |
| -- | -- | -- | ----------------- | ---- | --------- |
### 4. Scénarios de test
Définir des scénarios de haut niveau, sans détailler les étapes d'exécution.
### 5. Analyse des limites
Identifier les limites explicitement définies dans les exigences, par exemple :
* titre : 1–100 caractères ;
* description : maximum 500 caractères ;
* date d'échéance : ne peut pas être antérieure à la date courante.
### 6. Transitions d'état
Pour `US-006`, couvrir les transitions :
* `À faire → Terminée`
* `Terminée → À faire`
* transitions non autorisées.
### 7. Tests négatifs
Identifier les principales conditions invalides définies par les exigences.
### 8. Gaps et ambiguïtés
Identifier les informations manquantes qui empêchent de concevoir certains tests, notamment :
* Q8 / FR-008 ;
* comportement individuel des filtres ;
* toute autre lacune identifiée dans les documents.
### 9. Traçabilité
Présenter une matrice :
**FR → US → AC → Test Condition → Test Scenario**
Identifier les éléments :
* couverts ;
* partiellement couverts ;
* bloqués ;
* nécessitant une clarification.
### 10. AI Self-Review
Vérifier que le document ne contient pas :
* d'hallucinations ;
* d'informations inventées ;
* d'hypothèses non justifiées ;
* d'exigences oubliées ;
* d'erreurs de traçabilité ;
* de règles inventées pour Q8 ;
* de comportement inventé pour les filtres.
Pour chaque problème identifié :
**Problème → Impact → Action recommandée**
## En-tête
Utilise :
# SmartTodo — Test Design
**Version:** 1.0
**Statut:** Draft — To Be Validated
**AI Assistance:** Yes
**Human QA Validation:** Required
Ne baseline pas le document tant que la validation humaine n'est pas effectuée.
