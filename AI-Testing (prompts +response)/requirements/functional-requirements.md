# SmartTodo — Functional Requirements

**Document ID:** FR-SMARTTODO-V1.0  
**Version:** 1.0  
**Status:** Requirements Baseline Input  
**Language:** Français

## Purpose

Ce document contient les exigences fonctionnelles SmartTodo dérivées des décisions métier Q1–Q22.

Les exigences FR-001 à FR-007 et FR-009 à FR-022 sont baselinées dans **Requirements Baseline V1.0**.

FR-008 reste bloquée car Q8 n'est pas validée.

---

## FR-001 — Propriété exclusive d'une tâche

Une tâche créée par un utilisateur authentifié est associée exclusivement à l'identifiant unique de cet utilisateur.

**Source:** Q1  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-002 — Accès aux tâches du propriétaire

Un utilisateur authentifié ne peut consulter, modifier ou supprimer que les tâches associées à son propre identifiant.

**Source:** Q2  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-003 — Statuts disponibles

Une tâche peut avoir uniquement l'un des deux statuts suivants :
- À faire
- Terminée

**Source:** Q3  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-004 — Statut par défaut

Lors de sa création, une tâche possède automatiquement le statut « À faire ».

**Source:** Q4  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-005 — Réversibilité du statut

Une tâche au statut « Terminée » peut être modifiée pour repasser au statut « À faire ».

Les transitions autorisées sont :
- À faire → Terminée
- Terminée → À faire

Aucune autre transition de statut n'est autorisée.

**Source:** Q5  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-006 — Titre obligatoire

Le titre d'une tâche est obligatoire.

**Source:** Q6  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-007 — Longueur du titre

Le titre d'une tâche doit comporter entre 1 et 100 caractères inclus.

**Source:** Q7  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-008 — Caractères autorisés dans le titre

**Non formulable en l'état.**

La règle métier relative aux caractères autorisés ou interdits dans le titre n'est pas encore validée.

**Source:** Q8  
**Status:** OPEN / BLOCKED  
**Traceability:** OPEN

> Aucun comportement ne doit être déduit ou inventé tant que Q8 n'est pas validée.

---

## FR-009 — Description facultative

La description d'une tâche est facultative.

**Source:** Q9  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-010 — Longueur maximale de la description

La description d'une tâche ne doit pas dépasser 500 caractères.

**Source:** Q10  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-011 — Valeurs de priorité

Une tâche peut avoir uniquement l'une des trois priorités suivantes :
- Basse
- Moyenne
- Haute

**Source:** Q11  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-012 — Priorité obligatoire

La priorité d'une tâche est obligatoire.

**Source:** Q12  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-013 — Date d'échéance facultative

La date d'échéance d'une tâche est facultative.

**Source:** Q13  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-014 — Date d'échéance passée interdite

La date d'échéance d'une tâche ne peut pas être antérieure à la date du jour.

La date du jour est déterminée selon le fuseau horaire configuré pour l'application.

**Source:** Q14  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-015 — Date d'échéance sans heure

La date d'échéance est enregistrée sans composante horaire.

**Source:** Q15  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-016 — Suppression définitive

Lorsqu'une tâche est supprimée, elle est retirée définitivement.

**Source:** Q16  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-017 — Confirmation avant suppression

Lorsqu'une suppression de tâche est demandée, une confirmation est affichée à l'utilisateur.

Si l'utilisateur confirme, la tâche est supprimée définitivement.

Si l'utilisateur annule, la tâche n'est pas supprimée.

**Source:** Q17  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-018 — Absence de restauration

Une tâche supprimée définitivement ne peut pas être restaurée.

**Source:** Q18  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-019 — Périmètre de recherche

La recherche de tâches porte sur :
- le titre ;
- la description.

**Source:** Q19  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-020 — Recherche insensible à la casse

La recherche de tâches est insensible à la casse.

**Source:** Q20  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-021 — Combinaison des filtres

Les filtres « statut » et « priorité » peuvent être appliqués simultanément.

**Source:** Q21  
**Status:** BASELINED  
**Traceability:** FULL

---

## FR-022 — Combinaison recherche + filtres

La recherche peut être utilisée simultanément avec les filtres « statut » et « priorité ».

**Source:** Q22  
**Status:** BASELINED  
**Traceability:** FULL

---

## Traceability Matrix — Requirements ↔ Business Decisions

| Requirement | Source Decision | Traceability |
|---|---|---|
| FR-001 | Q1 | FULL |
| FR-002 | Q2 | FULL |
| FR-003 | Q3 | FULL |
| FR-004 | Q4 | FULL |
| FR-005 | Q5 | FULL |
| FR-006 | Q6 | FULL |
| FR-007 | Q7 | FULL |
| FR-008 | Q8 | OPEN |
| FR-009 | Q9 | FULL |
| FR-010 | Q10 | FULL |
| FR-011 | Q11 | FULL |
| FR-012 | Q12 | FULL |
| FR-013 | Q13 | FULL |
| FR-014 | Q14 | FULL |
| FR-015 | Q15 | FULL |
| FR-016 | Q16 | FULL |
| FR-017 | Q17 | FULL |
| FR-018 | Q18 | FULL |
| FR-019 | Q19 | FULL |
| FR-020 | Q20 | FULL |
| FR-021 | Q21 | FULL |
| FR-022 | Q22 | FULL |
