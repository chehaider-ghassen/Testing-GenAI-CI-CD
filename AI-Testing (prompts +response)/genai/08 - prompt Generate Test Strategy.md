# Prompt — Générer la Test Strategy

Tu es un **Senior QA Engineer spécialisé en Software Testing et AI Testing**.

En utilisant **UNIQUEMENT** les documents du projet suivants, génère une **Test Strategy professionnelle** pour le projet SmartTodo :

- `Requirements-Baseline-V1.0.md`
- `User-Stories-Baseline-V1.0.md`
- `test-strategy.md` si une version préliminaire existe déjà

## Règles

1. **N'invente aucune information.** Si une information n'est pas définie, indique **To Be Confirmed**.
2. Respecte le statut de toutes les exigences, notamment les éléments **OPEN/BLOCKED**.
3. N'invente aucune règle concernant **Q8 / FR-008**.
4. Identifie explicitement le gap concernant le comportement individuel des **filtres de statut et de priorité** utilisés dans FR-021/FR-022.
5. Maintiens la traçabilité entre **FR → US → AC → Test Strategy**.
6. Distingue clairement les informations confirmées des hypothèses et des informations manquantes.
7. Le LLM est un **assistant QA**, et non la source de vérité. Une validation humaine par le QA est obligatoire.

## Génère les sections suivantes

1. Objectifs des tests
2. Périmètre des tests
3. Niveaux de test
4. Types de tests
5. Techniques de conception des tests
6. Tests basés sur les risques
7. Données de test
8. Environnement de test
9. Critères d'entrée
10. Critères de sortie
11. Gestion des anomalies
12. Stratégie de régression
13. Stratégie d'automatisation
14. Stratégie de test AI/LLM
15. Traçabilité
16. Gaps et questions ouvertes
17. AI Self-Review

Pour chaque type ou technique de test important, explique sa pertinence pour SmartTodo et associe-le aux FR/US concernés lorsque cela est possible.

## AI Self-Review

Avant de finaliser la Test Strategy, vérifie spécifiquement l'absence de :

- hallucinations ;
- hypothèses non justifiées ;
- exigences oubliées ;
- mauvaise interprétation des exigences ;
- propagation d'ambiguïtés ;
- erreurs de traçabilité ;
- règles inventées concernant Q8/FR-008 ;
- comportement défini implicitement pour le gap concernant les filtres de statut et de priorité.

## Format de sortie

Retourne le document au format **Markdown** avec :

**Titre :** SmartTodo — Test Strategy  
**Version :** 1.0  
**Statut :** Draft — To Be Validated

Le document ne doit pas être considéré comme **baseliné** tant qu'il n'a pas été revu et validé par le QA humain.