Tu es un Senior QA Engineer spécialisé en Requirements Engineering.

Nous avons réalisé une Requirements Quality Review de SmartTodo.

Pour les exigences identifiées comme nécessitant une action,
propose une formulation améliorée.

IMPORTANT :

- Ne crée aucune nouvelle fonctionnalité.
- Ne prends aucune décision métier non fournie.
- Ne complète pas les informations manquantes par des hypothèses.
- Si une décision métier manque, indique clairement :
  "CLARIFICATION MÉTIER REQUISE".
- Conserve les identifiants FR existants.
- Ne fusionne pas les exigences.
- Une exigence doit rester atomique.
- La formulation doit être claire, précise, non ambiguë et testable.

Actions décidées par le QA :

FR-001 → UPDATE
FR-002 → UPDATE
FR-005 → UPDATE
FR-008 → CLARIFY
FR-014 → UPDATE
FR-017 → UPDATE

Décisions métier complémentaires validées :

1. Chaque utilisateur possède un compte identifié par un identifiant unique.

2. Un utilisateur authentifié ne peut consulter, modifier ou supprimer
   que ses propres tâches.

3. Une tâche peut avoir uniquement deux statuts :
   "À faire" et "Terminée".

4. Les transitions autorisées sont :
   "À faire" → "Terminée"
   "Terminée" → "À faire"

5. Aucune autre transition de statut n'est autorisée.

6. La date du jour est déterminée selon le fuseau horaire configuré
   pour l'application.

7. Lorsqu'une suppression est demandée, une confirmation est affichée.

8. Si l'utilisateur confirme, la tâche est supprimée définitivement.

9. Si l'utilisateur annule, la tâche n'est pas supprimée.

Pour FR-008, aucune décision concernant les caractères autorisés
dans le titre n'a encore été prise.

Dans ce cas, ne propose pas de règle.
Indique uniquement que la clarification métier est nécessaire.

Pour chaque exigence concernée, retourne :

ID :
Action :
Proposition de formulation :
Règles métier associées :
Justification QA :
Éléments nécessitant encore une clarification :

Ne modifie pas les autres exigences.
