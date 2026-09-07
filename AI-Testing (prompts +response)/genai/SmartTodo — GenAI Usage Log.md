# SmartTodo — GenAI Usage Log

> Journal des usages de Generative AI dans le projet SmartTodo  
> Objectif : documenter une démarche d'AI-Assisted Software Testing avec supervision humaine (Human-in-the-Loop).

---

# 1. Objectif du document

Ce document décrit comment la Generative AI est utilisée tout au long du cycle de vie QA du projet SmartTodo.

L'objectif n'est pas de remplacer le travail du QA Engineer par un LLM, mais d'utiliser le LLM comme **assistant** pour :

- analyser les exigences ;
- identifier les ambiguïtés ;
- générer des questions de clarification ;
- assister la formulation des exigences ;
- effectuer des revues de qualité ;
- analyser la traçabilité ;
- préparer la baseline des exigences ;
- générer ultérieurement les User Stories ;
- générer les Acceptance Criteria ;
- assister la conception des cas de test ;
- contribuer à l'automatisation des tests ;
- intégrer les activités QA dans une chaîne CI/CD.

## Principe directeur

```text
Human Input
     ↓
LLM
     ↓
AI-generated Output
     ↓
QA Review
     ↓
Human Decision
     ↓
Validated Artifact
```

Le résultat produit par le LLM n'est jamais considéré comme automatiquement valide.

---

# 2. Projet

## SmartTodo

SmartTodo est une application simple de gestion de tâches.

Les principales fonctionnalités sont :

- création d'une tâche ;
- modification d'une tâche ;
- suppression d'une tâche ;
- gestion du statut ;
- gestion de la priorité ;
- date d'échéance ;
- recherche ;
- filtrage.

Le projet est volontairement simple afin de permettre de se concentrer sur l'utilisation de la GenAI dans les différentes phases du Software Testing Life Cycle.

---

# 3. AI Usage Philosophy

La GenAI est utilisée comme un outil d'assistance au QA.

Elle peut :

- proposer ;
- analyser ;
- reformuler ;
- challenger ;
- identifier des risques ;
- rechercher des incohérences ;
- générer des artefacts candidats.

Elle ne doit pas :

- inventer une règle métier ;
- décider seule d'un comportement fonctionnel ;
- remplacer la validation humaine ;
- transformer une hypothèse en exigence ;
- considérer automatiquement une sortie comme correcte.

---

# 4. Phase 1 — Requirements Analysis

## Objectif

Analyser le besoin métier initial de SmartTodo afin d'identifier :

- les ambiguïtés ;
- les informations manquantes ;
- les règles métier implicites ;
- les hypothèses ;
- les cas limites ;
- les risques fonctionnels ;
- les éléments non directement testables.

## Rôle du LLM

**AI-assisted Requirements Analysis**

Le LLM reçoit le besoin métier initial et produit une analyse structurée.

## Prompt utilisé

```text
Tu es un Senior QA Engineer spécialisé en Requirements Engineering.

Analyse le besoin métier fourni et identifie :

1. Les ambiguïtés
2. Les informations manquantes
3. Les règles métier implicites
4. Les hypothèses nécessaires
5. Les cas limites potentiels
6. Les risques fonctionnels
7. Les éléments qui ne sont pas directement testables

Pour chaque problème identifié, explique pourquoi il constitue
un risque pour la testabilité ou la qualité des exigences.

Ne crée aucune règle métier.
Distingue clairement les faits fournis des hypothèses.
```

## QA Review

Le résultat du LLM a permis d'identifier plusieurs points importants, notamment :

- propriété des tâches ;
- statut ;
- priorité ;
- contraintes du titre ;
- date d'échéance ;
- comportement de suppression ;
- recherche et filtrage.

## Enseignement

Une exigence fonctionnelle peut sembler compréhensible au niveau métier tout en étant insuffisamment précise pour être testée.

---

# 5. Phase 2 — Clarification Questions

## Objectif

Transformer les ambiguïtés et informations manquantes en questions destinées au métier/Product Owner.

## Rôle du LLM

**AI-assisted Clarification Question Generation**

Le LLM génère puis classe les questions selon leur impact :

- CRITIQUE ;
- IMPORTANTE ;
- SECONDAIRE.

## Exemple

Question critique :

> Une tâche appartient-elle exclusivement à l'utilisateur qui l'a créée ?

Question importante :

> Peut-on appliquer plusieurs filtres simultanément ?

Question secondaire :

> La recherche est-elle sensible à la casse ?

## QA Review

Les questions générées ont ensuite été examinées afin de vérifier :

- leur pertinence ;
- leur absence de redondance ;
- leur impact réel sur les tests ;
- leur caractère métier.

## Enseignement

La GenAI peut accélérer la découverte des questions de clarification, mais le QA doit déterminer leur priorité.

---

# 6. Phase 3 — Business Decisions

Les questions de clarification ont été transformées en décisions métier.

Les décisions Q1 à Q22 constituent la source de traçabilité des exigences.

## État actuel

```text
Q1 → Q7      VALIDATED
Q8           OPEN
Q9 → Q22     VALIDATED
```

### Q8

Q8 concerne les caractères autorisés dans le titre.

Cette décision reste ouverte.

Aucune règle n'est inventée pour compléter Q8.

## Enseignement

Une information manquante ne doit pas être remplacée silencieusement par une hypothèse générée par l'IA.

---

# 7. Phase 4 — Requirements Generation

## Objectif

Transformer les décisions métier validées en exigences fonctionnelles claires et testables.

## Rôle du LLM

**AI-assisted Requirements Formulation**

Le LLM propose une formulation structurée des exigences.

## Principes appliqués

- conserver les identifiants ;
- conserver le sens métier ;
- ne pas créer de fonctionnalité ;
- ne pas inventer de règle ;
- produire des exigences testables ;
- maintenir la traçabilité Decision → Requirement.

## Exemple

```text
Business Decision:
Q7 — Titre : 1 à 100 caractères

↓

Requirement:
FR-007 — Le titre d'une tâche doit comporter entre 1 et
100 caractères inclus.
```

## QA Review

Chaque exigence est examinée avant validation.

---

# 8. Phase 5 — Requirements Quality Review

## Objectif

Évaluer la qualité des exigences générées.

## Critères utilisés

Chaque requirement est évalué selon :

- Clarté ;
- Atomicité ;
- Cohérence ;
- Complétude ;
- Testabilité ;
- Non-ambiguïté ;
- Traçabilité ;
- Dépendances ;
- Redondance.

## Rôle du LLM

**AI-assisted Requirements Quality Review**

Le LLM analyse chaque requirement et attribue :

```text
PASS
WARNING
FAIL
```

## Exemple

FR-001 a initialement été identifié comme WARNING car la notion d'identification de l'utilisateur n'était pas définie.

FR-002 présentait également un WARNING concernant le terme "accéder" et son chevauchement conceptuel avec FR-001.

FR-014 présentait une ambiguïté autour de la notion de "date du jour".

FR-016 présentait un chevauchement conceptuel avec FR-018.

## QA Review

Le QA ne valide pas automatiquement les classifications produites par le LLM.

## Exemple d'erreur détectable

Le LLM peut produire un résumé numérique incohérent avec sa propre analyse détaillée.

Cela démontre l'importance de la vérification humaine des sorties de GenAI.

## Enseignement

```text
LLM Review ≠ QA Review
```

Le LLM peut aider à identifier les défauts mais sa propre sortie doit également être contrôlée.

---

# 9. Phase 6 — Requirements Refinement

## Objectif

Améliorer les exigences identifiées comme WARNING ou nécessitant une clarification.

## Rôle du LLM

**AI-assisted Requirements Refinement**

Le LLM propose une nouvelle formulation à partir :

- des requirements existants ;
- des problèmes détectés ;
- des décisions métier validées.

## Exemple — FR-001

Formulation proposée :

```text
Une tâche créée par un utilisateur authentifié est associée
exclusivement à l'identifiant unique de cet utilisateur.
```

## Exemple — FR-002

```text
Un utilisateur authentifié ne peut consulter, modifier ou supprimer
que les tâches associées à son propre identifiant.
```

## Exemple — FR-017

```text
Lorsqu'une suppression de tâche est demandée, une confirmation
est affichée à l'utilisateur. Si l'utilisateur confirme, la tâche
est supprimée définitivement. Si l'utilisateur annule, la tâche
n'est pas supprimée.
```

## FR-008

FR-008 reste bloquée car Q8 n'est pas validée.

Le LLM n'est pas autorisé à inventer les caractères autorisés.

---

# 10. Phase 7 — Requirements Traceability Analysis

## Objectif

Vérifier la traçabilité bidirectionnelle :

```text
Business Decision
       ↓
Requirement
```

et :

```text
Requirement
       ↓
Business Decision
```

## Rôle du LLM

**AI-assisted Traceability Analysis**

Le LLM identifie :

- les requirements correctement tracés ;
- les décisions non couvertes ;
- les requirements sans source métier ;
- les relations discutables ;
- les éléments ouverts.

## Résultat

```text
Q1 → Q7       FULL
Q8            OPEN
Q9 → Q22      FULL
```

FR-008 reste bloquée.

## Enseignement

La traçabilité permet d'éviter la création d'exigences "orphelines" ou de décisions métier non implémentées.

---

# 11. Phase 8 — Baseline Readiness Assessment

## Objectif

Déterminer si les exigences sont suffisamment mûres pour constituer une Requirements Baseline.

## Critères

Une exigence doit être :

- claire ;
- testable ;
- suffisamment complète ;
- traçable ;
- sans problème bloquant.

## Rôle du LLM

**AI-assisted Baseline Readiness Assessment**

Le LLM classe chaque requirement :

```text
READY
NOT READY
```

## Résultat

```text
21 Requirements → READY
1 Requirement  → NOT READY

FR-008 → NOT READY
Q8     → OPEN
```

## Décision QA

Une baseline complète contenant FR-008 n'est pas approuvée.

Pour le projet SmartTodo, nous retenons une baseline partielle :

```text
Requirements Baseline V1.0

FR-001 → FR-007
FR-009 → FR-022

FR-008 exclue
Reason: Q8 OPEN
```

## Enseignement

Une baseline peut avoir un périmètre explicitement défini.

---

# 12. Human-in-the-Loop

Le processus SmartTodo suit le modèle :

```text
                  ┌─────────────┐
                  │    INPUT    │
                  └──────┬──────┘
                         ↓
                  ┌─────────────┐
                  │     LLM     │
                  └──────┬──────┘
                         ↓
                  AI-generated
                     Artifact
                         ↓
                  ┌─────────────┐
                  │  QA REVIEW  │
                  └──────┬──────┘
                         ↓
                  ┌─────────────┐
                  │   DECISION  │
                  │   HUMAN     │
                  └──────┬──────┘
                         ↓
                 Validated Artifact
```

Le QA reste responsable de la décision finale.

---

# 13. AI Risks Observed

Les travaux réalisés sur SmartTodo ont déjà permis d'identifier plusieurs risques liés à l'utilisation d'un LLM.

## 13.1 Hallucination

Le LLM pourrait inventer une règle métier manquante.

Exemple :

```text
Q8 = caractères autorisés
```

Le LLM ne doit pas décider lui-même quels caractères sont autorisés.

---

## 13.2 Inconsistent Output

Le LLM peut produire un résumé numérique qui ne correspond pas à son analyse détaillée.

Action QA :

```text
Generated result
       ↓
Manual consistency check
```

---

## 13.3 Context contamination

Le LLM peut réutiliser une information présente dans son contexte sans vérifier si elle est toujours valide.

Action QA :

Vérifier systématiquement la source des décisions métier.

---

## 13.4 Over-specification

Le LLM peut ajouter des détails techniquement plausibles mais non décidés par le métier.

Exemple :

- mécanisme d'authentification ;
- comportement technique ;
- format interne ;
- règles de stockage.

Ces éléments doivent être identifiés comme hypothèses et non comme exigences validées.

---

# 14. GenAI Governance Rules

Les règles suivantes sont appliquées au projet :

### Rule 1

Ne jamais considérer une sortie LLM comme une source de vérité métier.

### Rule 2

Toute nouvelle règle métier proposée par l'IA doit être validée par le métier.

### Rule 3

Toute exigence générée doit conserver sa traçabilité.

### Rule 4

Les résultats du LLM doivent être vérifiés pour :

- cohérence ;
- exactitude ;
- complétude ;
- testabilité.

### Rule 5

Les éléments non définis doivent rester explicitement ouverts.

### Rule 6

Le QA doit pouvoir expliquer pourquoi une proposition IA a été :

```text
ACCEPTED
UPDATED
REJECTED
```

---

# 15. AI Usage Metrics

Les métriques suivantes seront suivies au fur et à mesure du projet.

| Metric | Description |
|---|---|
| AI-generated artifacts | Nombre d'artefacts générés avec assistance IA |
| AI accepted suggestions | Suggestions acceptées |
| AI modified suggestions | Suggestions modifiées |
| AI rejected suggestions | Suggestions rejetées |
| AI-detected issues | Problèmes détectés par le LLM |
| Human-detected issues | Problèmes détectés uniquement par le QA |
| Hallucinations | Informations inventées par le LLM |
| Traceability coverage | Pourcentage d'artefacts traçables |
| Requirements coverage | Requirements couverts par les tests |

Ces métriques seront complétées pendant les phases suivantes.

---

# 16. Current Project Status

```text
✅ Requirements Analysis
✅ Clarification Questions
✅ Business Decisions
✅ Requirements Generation
✅ Requirements Quality Review
✅ Requirements Refinement
✅ Requirements Traceability
✅ Baseline Readiness Assessment
🟢 Requirements Baseline V1.0

⬜ User Stories
⬜ Acceptance Criteria
⬜ Test Strategy
⬜ Test Plan
⬜ Test Design
⬜ AI-assisted Test Case Generation
⬜ AI Test Evaluation
⬜ Test Automation
⬜ CI/CD
```

---

# 17. Next GenAI Activity

## User Story Generation

Objectif :

Transformer les requirements baselinés en User Stories candidates tout en conservant :

```text
Requirement
     ↓
User Story
```

Le LLM devra notamment être contrôlé sur :

- absence d'invention ;
- respect du requirement source ;
- traçabilité ;
- valeur métier ;
- qualité INVEST ;
- testabilité.

Les Acceptance Criteria ne seront pas générés à cette étape.

Ils feront l'objet d'une étape GenAI distincte.

---

# 18. Target AI-Assisted QA Workflow

À terme, SmartTodo suivra :

```text
                    REQUIREMENTS
                         │
                         ▼
                Requirements Analysis
                         │
                         ▼
              Clarification Questions
                         │
                         ▼
                 Business Decisions
                         │
                         ▼
              Requirements Generation
                         │
                         ▼
             Requirements Quality Review
                         │
                         ▼
              Requirements Refinement
                         │
                         ▼
               Traceability Analysis
                         │
                         ▼
                Requirements Baseline
                         │
                         ▼
                   USER STORIES
                         │
                         ▼
                ACCEPTANCE CRITERIA
                         │
                         ▼
                  TEST STRATEGY
                         │
                         ▼
                    TEST PLAN
                         │
                         ▼
                 TEST CASE DESIGN
                         │
                         ▼
                 AI TEST ASSISTANCE
                         │
                         ▼
                    AUTOMATION
                         │
                         ▼
                       CI/CD
```

Chaque étape conserve une supervision humaine.

---

# 19. Key Learning

Le principal enseignement du projet SmartTodo est que l'utilisation de GenAI en QA ne consiste pas simplement à demander :

> "Génère-moi des cas de test."

Une utilisation professionnelle de la GenAI consiste à l'intégrer progressivement dans le cycle QA :

```text
Analyze
→ Clarify
→ Formulate
→ Review
→ Refine
→ Trace
→ Baseline
→ Design
→ Test
→ Automate
→ Integrate
```

avec une validation humaine à chaque étape critique.