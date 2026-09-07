# SmartTodo — User Stories

**Version:** 1.1  
**Status:** Updated Draft — corrected after User Story Quality Review  
**Source:** Requirements Baseline V1.0

## US-001 — Propriété et confidentialité des tâches

**Traceability:** FR-001, FR-002 — Q1, Q2

### User Story
En tant qu'utilisateur authentifié, je veux que mes tâches soient exclusivement associées à mon compte afin que seul moi puisse y accéder et les gérer.

### Acceptance Criteria
- **AC-01:** Lorsqu'un utilisateur authentifié crée une tâche, celle-ci est associée à son propre identifiant.
- **AC-02:** Lorsqu'un utilisateur authentifié tente de consulter, modifier ou supprimer une tâche qui ne lui appartient pas, l'action est refusée.

**Status:** READY

## US-002 — Création d’une tâche avec titre et description

**Traceability:** FR-004, FR-006, FR-007, FR-009, FR-010 — Q4, Q6, Q7, Q9, Q10

### User Story
En tant qu'utilisateur authentifié, je veux créer une tâche avec un titre obligatoire et une description optionnelle afin d'enregistrer mes tâches.

### Acceptance Criteria
- **AC-01:** Si aucun titre n'est fourni, la création de la tâche est refusée.
- **AC-02:** Si le titre contient moins de 1 caractère ou plus de 100 caractères, la création est refusée.
- **AC-03:** Si aucune description n'est fournie, la tâche peut être créée sans description.
- **AC-04:** Si la description contient plus de 500 caractères, la création est refusée.
- **AC-05:** Lorsqu'une tâche est créée avec succès, son statut est automatiquement défini à « À faire ».

**Status:** READY

## US-003 — Caractères autorisés dans le titre

**Traceability:** FR-008 — Q8

### User Story
En tant qu'utilisateur authentifié, je veux connaître les caractères autorisés dans le titre afin de pouvoir saisir un titre conforme.

### Acceptance Criteria
Aucun critère d'acceptation n'est défini à ce stade, car la décision métier Q8 n'est pas validée.

**Status:** BLOCKED

**Reason:** FR-008 dépend de Q8, qui reste ouverte/non validée. Aucun comportement ne doit être inventé.

## US-004 — Définir la priorité d’une tâche

**Traceability:** FR-011, FR-012 — Q11, Q12

### User Story
En tant qu'utilisateur authentifié, je veux définir une priorité pour ma tâche afin de distinguer son niveau d'importance.

### Acceptance Criteria
- **AC-01:** Si aucune priorité n'est fournie, la création de la tâche est refusée.
- **AC-02:** Si la priorité fournie n'est pas « Basse », « Moyenne » ou « Haute », la création est refusée.

**Status:** READY

## US-005 — Définir une date d’échéance

**Traceability:** FR-013, FR-014, FR-015 — Q13, Q14, Q15

### User Story
En tant qu'utilisateur authentifié, je veux définir une date d'échéance pour ma tâche afin de pouvoir suivre sa date limite.

### Acceptance Criteria
- **AC-01:** Si aucune date d'échéance n'est fournie, la tâche peut être créée sans date d'échéance.
- **AC-02:** Si la date d'échéance est antérieure à la date courante déterminée selon le fuseau horaire configuré par l'application, la création ou l'enregistrement de la date est refusé.
- **AC-03:** La date d'échéance est enregistrée sans composante horaire.

**Status:** READY

## US-006 — Faire évoluer le statut d’une tâche

**Traceability:** FR-003, FR-005 — Q3, Q5

### User Story
En tant qu'utilisateur authentifié, je veux faire évoluer le statut de ma tâche entre « À faire » et « Terminée » afin de refléter son avancement.

### Acceptance Criteria
- **AC-01:** Le statut d'une tâche existante est toujours « À faire » ou « Terminée ».
- **AC-02:** Une tâche au statut « À faire » peut être transitionnée vers « Terminée ».
- **AC-03:** Une tâche au statut « Terminée » peut être transitionnée vers « À faire ».
- **AC-04:** Toute transition autre que « À faire » → « Terminée » ou « Terminée » → « À faire » est refusée.

**Status:** READY

## US-007 — Supprimer une tâche

**Traceability:** FR-016, FR-017, FR-018 — Q16, Q17, Q18

### User Story
En tant qu'utilisateur authentifié, je veux supprimer définitivement une tâche après confirmation afin de retirer une tâche dont je n'ai plus besoin.

### Acceptance Criteria
- **AC-01:** Lorsqu'une suppression est demandée, une confirmation est affichée avant la suppression.
- **AC-02:** Si l'utilisateur confirme la suppression, la tâche est supprimée définitivement.
- **AC-03:** Si l'utilisateur annule la confirmation, la tâche n'est pas supprimée.
- **AC-04:** Une tâche supprimée définitivement ne peut pas être restaurée.

**Status:** READY

## US-008 — Rechercher des tâches

**Traceability:** FR-019, FR-020 — Q19, Q20

### User Story
En tant qu'utilisateur authentifié, je veux rechercher mes tâches à partir de leur titre ou de leur description afin de retrouver rapidement une tâche.

### Acceptance Criteria
- **AC-01:** Un terme de recherche présent dans le titre ou la description permet de retrouver la tâche correspondante.
- **AC-02:** Une recherche dont le terme diffère uniquement par la casse permet également de retrouver la tâche.

**Status:** READY

## US-009 — Combiner les filtres statut et priorité

**Traceability:** FR-021 — Q21

### User Story
En tant qu'utilisateur authentifié, je veux pouvoir appliquer simultanément les filtres de statut et de priorité afin de réduire les résultats aux tâches correspondant aux deux critères.

### Acceptance Criteria
- **AC-01:** Lorsque les filtres de statut et de priorité sont actifs simultanément, seules les tâches satisfaisant les deux critères sont affichées.

**Status:** READY WITH OBSERVATION

**Observation:** Le comportement détaillé des filtres de statut et de priorité pris individuellement n'est pas explicitement défini dans les exigences fonctionnelles. Aucun comportement supplémentaire n'est inventé ici.

## US-010 — Combiner recherche et filtres

**Traceability:** FR-022 — Q22

### User Story
En tant qu'utilisateur authentifié, je veux utiliser simultanément la recherche et les filtres de statut et de priorité afin d'affiner mes résultats.

### Acceptance Criteria
- **AC-01:** Lorsque la recherche et les filtres sont actifs simultanément, seuls les résultats satisfaisant à la fois le critère de recherche et les critères de filtrage sont affichés.

**Status:** READY WITH OBSERVATION

**Observation:** Cette User Story dépend du comportement des filtres de statut et de priorité, qui n'est pas complètement spécifié individuellement dans les exigences fonctionnelles.

# User Story Quality Review — Corrections intégrées

1. **US-006:** ajout explicite des transitions « À faire → Terminée », « Terminée → À faire » et du rejet de toute autre transition.
2. **US-007:** ajout explicite du comportement d'annulation de la confirmation de suppression.
3. **US-005:** explicitation de la dépendance au fuseau horaire configuré par l'application pour déterminer la date courante.
4. **US-003:** maintien du statut BLOCKED ; aucune règle sur les caractères du titre n'est inventée.
5. **US-009 / US-010:** conservation de l'observation concernant l'absence de définition explicite des filtres individuels.
