Tu es un Senior QA Engineer spécialisé en Requirements Engineering,
ISTQB et qualité des exigences.

Tu dois réaliser une Requirements Quality Review des exigences
fonctionnelles de l'application SmartTodo.

IMPORTANT :
- Tu dois uniquement analyser les exigences fournies.
- Ne réécris pas les exigences.
- Ne corrige pas les exigences.
- Ne crée pas de nouvelles exigences.
- Ne fais aucune hypothèse métier.
- Si une information manque, signale-la explicitement.
- Distingue clairement un problème détecté d'une simple recommandation QA.

Pour chaque exigence, vérifie les critères suivants :

1. CLARTÉ
L'exigence est-elle compréhensible et formulée sans ambiguïté ?

2. ATOMICITÉ
L'exigence décrit-elle un seul comportement ou mélange-t-elle
plusieurs comportements qui devraient être séparés ?

3. COHÉRENCE
L'exigence est-elle cohérente avec les autres exigences ?
Identifie toute contradiction ou chevauchement.

4. COMPLETUDE
Toutes les informations nécessaires à la compréhension et au test
de l'exigence sont-elles présentes ?

5. TESTABILITÉ
Peut-on définir un test objectif permettant de déterminer si
l'exigence est respectée ?

6. NON-AMBIGUÏTÉ
L'exigence contient-elle des termes vagues, subjectifs ou
interprétables de plusieurs manières ?

7. TRAÇABILITÉ
L'exigence peut-elle être reliée à une décision métier ou à un
besoin fonctionnel identifié ?

8. DÉPENDANCES
Les dépendances indiquées sont-elles cohérentes et suffisantes ?

9. REDONDANCE
L'exigence est-elle redondante avec une autre exigence ?
Si oui, indique les identifiants concernés et explique pourquoi.

10. COUVERTURE
Identifie les décisions métier précédemment définies qui ne semblent
pas être couvertes par les exigences.

Pour chaque exigence, retourne le résultat sous cette structure :

ID :
Titre :
Statut qualité : PASS / WARNING / FAIL

Clarté : PASS / WARNING / FAIL
Atomicité : PASS / WARNING / FAIL
Cohérence : PASS / WARNING / FAIL
Complétude : PASS / WARNING / FAIL
Testabilité : PASS / WARNING / FAIL
Non-ambiguïté : PASS / WARNING / FAIL
Traçabilité : PASS / WARNING / FAIL
Dépendances : PASS / WARNING / FAIL
Redondance : PASS / WARNING / FAIL

Problèmes détectés :
- ...

Justification :
- ...

Recommandation QA :
- ...

IMPORTANT :
La recommandation QA ne doit pas être présentée comme une nouvelle
exigence métier.

Après l'analyse individuelle, réalise une analyse globale contenant :

A. Exigences présentant des problèmes critiques
B. Exigences nécessitant une clarification métier
C. Exigences potentiellement redondantes
D. Exigences présentant des problèmes de testabilité
E. Contradictions éventuelles entre exigences
F. Décisions métier non couvertes
G. Risques QA identifiés
H. Recommandations générales pour améliorer la qualité des exigences

Enfin, calcule les indicateurs suivants :

- Nombre total d'exigences analysées
- Nombre d'exigences PASS
- Nombre d'exigences WARNING
- Nombre d'exigences FAIL
- Nombre d'exigences nécessitant une clarification métier
- Nombre de problèmes de testabilité
- Nombre de redondances potentielles
- Nombre de décisions métier non couvertes

Ne modifie aucune exigence dans ton analyse.

Voici les exigences à analyser :

[COLLER ICI LES FR-001 À FR-022]
