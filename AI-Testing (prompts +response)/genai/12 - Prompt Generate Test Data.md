# Prompt — Générer le Test Data

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`
- `test-plan.md`
- `test-design.md`
- `test-cases.md`

génère un document professionnel **Test Data** en Markdown.

## Règles

1. Utilise uniquement les informations définies dans les documents.
2. N'invente aucune règle métier, donnée technique ou comportement non spécifié.
3. Si une donnée nécessaire n'est pas définie, indique **TBC**.
4. Respecte les exigences **OPEN / BLOCKED**, notamment `FR-008 / Q8`.
5. Ne crée aucune donnée permettant de définir les caractères autorisés du titre.
6. Ne définis pas de comportement individuel des filtres statut/priorité.
7. Les données doivent permettre de couvrir les Test Cases existants, notamment :
   - valeurs normales ;
   - valeurs limites ;
   - valeurs invalides ;
   - données nécessaires aux tests négatifs ;
   - transitions de statut ;
   - recherche et combinaisons de filtres définies.
8. Chaque donnée doit être traçable vers le **Test Case / Requirement / User Story** concerné.
9. Le LLM est un assistant QA : **validation humaine obligatoire**.

## Format

### 1. Objectif
Expliquer le rôle du Test Data dans le projet.

### 2. Principes de Test Data
Définir les principes utilisés pour préparer les données de test.

### 3. Test Data Catalog

| Data ID | Data Type | Valeur / Exemple | Usage | Test Case | Requirement | Statut |
|---|---|---|---|---|---|---|

Inclure notamment les données liées à :
- Title
- Description
- Priority
- Status
- Due Date
- Search
- User / ownership

### 4. Boundary & Negative Data

Identifier explicitement les données nécessaires pour tester :
- Title : 1 et 100 caractères ;
- Title : 0 et >100 caractères ;
- Description : 0 et 500 caractères ;
- Description : >500 caractères ;
- Due Date : aujourd'hui / date future / date passée ;
- Priority valide / invalide ;
- Status et transitions valides / invalides.

Ne pas inventer de règles pour les caractères du titre (`Q8 / FR-008`).

### 5. Data Dependencies & TBC

Lister les données qui ne peuvent pas encore être définies à cause d'informations manquantes.

### 6. Traceability

**Test Data → Test Case → AC → US → FR**

### 7. AI Self-Review

Vérifier :
- données inventées ;
- règles métier implicites ;
- données manquantes ;
- incohérences avec les Requirements ;
- couverture des Test Cases ;
- invention de règles pour Q8 ;
- invention du comportement des filtres.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Test Data

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas le Test Data avant la QA Review humaine.