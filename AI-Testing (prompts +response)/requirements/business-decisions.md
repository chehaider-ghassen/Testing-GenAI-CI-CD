# SmartTodo — Business Decisions

**Document ID:** BD-SMARTTODO-V1.0  
**Version:** 1.0  
**Status:** Working Business Decision Set  
**Language:** Français

## Purpose

Ce document centralise les 22 décisions métier utilisées pour transformer le besoin initial SmartTodo en exigences fonctionnelles testables.

**Important :** Q8 reste OPEN / NON VALIDÉE. Elle ne doit pas être utilisée pour inventer une règle métier.

---

## Q1 — Propriété exclusive de la tâche

**Décision :** Une tâche appartient exclusivement à l'utilisateur qui l'a créée.

**Statut :** VALIDATED

---

## Q2 — Accès aux tâches

**Décision :** Un utilisateur authentifié ne peut consulter, modifier ou supprimer que ses propres tâches.

**Statut :** VALIDATED

---

## Q3 — Statuts disponibles

**Décision :** Une tâche peut avoir uniquement deux statuts :
- À faire
- Terminée

**Statut :** VALIDATED

---

## Q4 — Statut par défaut

**Décision :** Une tâche créée possède automatiquement le statut « À faire ».

**Statut :** VALIDATED

---

## Q5 — Réversibilité du statut

**Décision :** Une tâche terminée peut redevenir « À faire ».

Les transitions autorisées sont :
- À faire → Terminée
- Terminée → À faire

**Statut :** VALIDATED

---

## Q6 — Titre obligatoire

**Décision :** Le titre d'une tâche est obligatoire.

**Statut :** VALIDATED

---

## Q7 — Longueur du titre

**Décision :** Le titre doit contenir entre 1 et 100 caractères inclus.

**Statut :** VALIDATED

---

## Q8 — Caractères autorisés dans le titre

**Décision :** Les règles concernant les caractères autorisés, interdits ou particuliers dans le titre doivent être définies.

**Statut :** OPEN / NON VALIDATED

**Impact :** Aucune exigence normative ne doit être dérivée de Q8 tant que la décision n'est pas validée.

---

## Q9 — Description

**Décision :** La description est facultative.

**Statut :** VALIDATED

---

## Q10 — Longueur de la description

**Décision :** La description peut contenir au maximum 500 caractères.

**Statut :** VALIDATED

---

## Q11 — Valeurs de priorité

**Décision :** Les valeurs de priorité sont :
- Basse
- Moyenne
- Haute

**Statut :** VALIDATED

---

## Q12 — Priorité obligatoire

**Décision :** La priorité est obligatoire pour une tâche.

**Statut :** VALIDATED

---

## Q13 — Date d'échéance

**Décision :** La date d'échéance est facultative.

**Statut :** VALIDATED

---

## Q14 — Date d'échéance passée

**Décision :** Une date d'échéance ne peut pas être antérieure à la date du jour.

La date du jour est déterminée selon le fuseau horaire configuré pour l'application.

**Statut :** VALIDATED

---

## Q15 — Composante horaire

**Décision :** La date d'échéance est gérée sans composante horaire.

**Statut :** VALIDATED

---

## Q16 — Suppression définitive

**Décision :** La suppression d'une tâche est définitive.

**Statut :** VALIDATED

---

## Q17 — Confirmation avant suppression

**Décision :** Une confirmation doit être affichée avant la suppression d'une tâche.

**Statut :** VALIDATED

---

## Q18 — Restauration

**Décision :** Une tâche supprimée définitivement ne peut pas être restaurée.

**Statut :** VALIDATED

---

## Q19 — Périmètre de recherche

**Décision :** La recherche porte sur le titre et la description.

**Statut :** VALIDATED

---

## Q20 — Sensibilité à la casse

**Décision :** La recherche est insensible à la casse.

**Statut :** VALIDATED

---

## Q21 — Combinaison des filtres

**Décision :** Les filtres statut et priorité peuvent être appliqués simultanément.

**Statut :** VALIDATED

---

## Q22 — Combinaison recherche + filtres

**Décision :** La recherche peut être utilisée simultanément avec les filtres statut et priorité.

**Statut :** VALIDATED

---

## Summary

| Decision | Status | Related Requirement |
|---|---|---|
| Q1 | VALIDATED | FR-001 |
| Q2 | VALIDATED | FR-002 |
| Q3 | VALIDATED | FR-003 |
| Q4 | VALIDATED | FR-004 |
| Q5 | VALIDATED | FR-005 |
| Q6 | VALIDATED | FR-006 |
| Q7 | VALIDATED | FR-007 |
| Q8 | OPEN | FR-008 |
| Q9 | VALIDATED | FR-009 |
| Q10 | VALIDATED | FR-010 |
| Q11 | VALIDATED | FR-011 |
| Q12 | VALIDATED | FR-012 |
| Q13 | VALIDATED | FR-013 |
| Q14 | VALIDATED | FR-014 |
| Q15 | VALIDATED | FR-015 |
| Q16 | VALIDATED | FR-016 |
| Q17 | VALIDATED | FR-017 |
| Q18 | VALIDATED | FR-018 |
| Q19 | VALIDATED | FR-019 |
| Q20 | VALIDATED | FR-020 |
| Q21 | VALIDATED | FR-021 |
| Q22 | VALIDATED | FR-022 |
