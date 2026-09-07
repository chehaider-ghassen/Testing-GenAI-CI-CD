# Prompt — Générer l'Automation / CI-CD Strategy

Tu es un **Senior QA Engineer spécialisé en Software Testing, Test Automation et AI Testing**.

À partir des documents suivants du projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md`
- `test-plan.md`
- `test-design.md`
- `test-cases.md`
- `test-data.md`
- `test-execution simulation.md`
- `defect-management simulation.md`
- `test-summary-report.md`
- `retest-regression-testing.md`

génère un document professionnel **Automation & CI-CD Strategy** en Markdown.

## Règles

1. Utilise uniquement les informations présentes dans les documents.
2. N'invente pas d'architecture, d'API, de sélecteurs, de composants UI ou de fonctionnalités non définies.
3. Ne transforme pas automatiquement tous les Test Cases en tests automatisés.
4. Identifie les **Test Cases candidats à l'automatisation** selon des critères QA justifiés :
   - répétitivité ;
   - stabilité ;
   - valeur de régression ;
   - criticité ;
   - coût d'exécution manuelle.
5. Respecte les limitations et gaps existants :
   - `FR-008 / Q8` → OPEN / BLOCKED ;
   - `US-003` → BLOCKED ;
   - `US-009` et `US-010` → READY WITH OBSERVATION.
6. N'invente aucune règle concernant les caractères du titre.
7. Ne définis pas de comportement individuel des filtres statut/priorité.
8. Si une information technique est absente, indique **TBC**.
9. L'automatisation doit rester cohérente avec le **Test Strategy** et le **Test Plan**.
10. Le LLM est un assistant QA : **validation humaine obligatoire**.

## Contenu attendu

### 1. Objectif

Décrire le rôle de l'automatisation dans le projet SmartTodo et son apport à la régression.

### 2. Automation Scope

Identifier :
- tests à automatiser ;
- tests à conserver manuels ;
- tests non automatisables pour le moment ;
- tests bloqués.

### 3. Automation Candidates

| Test Case | Requirement | User Story | Automation Candidate | Justification | Priority |
|---|---|---|---|---|---|

Ne sélectionner que les Test Cases réellement justifiés.

### 4. Automation Approach

Décrire l'approche d'automatisation en cohérence avec le projet.

Si l'outil/framework n'est pas confirmé dans les documents : **TBC**.

### 5. Automated Regression

Définir comment les tests automatisés peuvent être utilisés dans la **Regression Testing**.

### 6. CI-CD Integration

Décrire à haut niveau :

**Code Change → Build → Automated Tests → Results → Feedback**

Ne pas inventer de plateforme CI/CD si elle n'est pas définie.

### 7. Test Execution & Reporting

Décrire comment les résultats des tests automatisés pourraient être exploités :

**PASS / FAIL / BLOCKED**

et comment un échec pourrait conduire à un Defect.

### 8. Traceability

Maintenir :

**FR → US → AC → Test Case → Automated Test → CI/CD Execution → Result → Defect**

### 9. Limitations & TBC

Identifier les informations nécessaires avant de commencer l'automatisation :

- application disponible ;
- environnement ;
- framework ;
- architecture ;
- accès ;
- données de test ;
- CI/CD platform ;
- autres éléments réellement manquants.

### 10. AI Testing

Décrire brièvement comment l'IA peut assister l'automatisation sans remplacer la validation QA, par exemple :
- génération initiale de scripts ;
- revue de scripts ;
- analyse des échecs ;
- maintenance assistée.

Ne pas présenter les suggestions du LLM comme des tests validés.

### 11. AI Self-Review

Vérifier :

- outils inventés ;
- architecture inventée ;
- tests inutilement automatisés ;
- exigences oubliées ;
- règles métier inventées ;
- Q8 / FR-008 ;
- filtres ;
- incohérences avec Test Strategy / Test Plan ;
- traçabilité incorrecte.

Pour chaque problème :

**Issue → Impact → Action recommandée**

## En-tête

# SmartTodo — Automation & CI-CD Strategy

**Version:** 1.0  
**Status:** Draft — To Be Validated  
**AI Assistance:** Yes  
**Human QA Validation:** Required

Ne baseline pas le document avant la QA Review humaine.