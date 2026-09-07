# Conception de l'automatisation des tests avec Playwright

**Projet :** SmartTodo-AI-Testing  
**Version :** 1.1  
**Statut :** Brouillon — À valider  
**Assistance IA :** Oui  
**Validation humaine QA :** Obligatoire  

---

## 1. Objectif

L'objectif de l'automatisation est d'automatiser une partie des cas de test fonctionnels du projet **SmartTodo-AI-Testing** afin de :

- réduire le coût et le temps d'exécution des tests de régression ;
- détecter rapidement les régressions fonctionnelles ;
- garantir une exécution répétable et déterministe des tests ;
- améliorer la couverture des fonctionnalités critiques ;
- démontrer la capacité à concevoir, implémenter et maintenir une automatisation de tests avec Playwright ;
- conserver l'intervention humaine du QA pour les tests exploratoires, les comportements ambigus et l'analyse des résultats.

L'automatisation ne remplace pas la validation humaine du QA.

---

## 2. Application sous test

L'application sous test est **SmartTodo**, une application de gestion de tâches développée dans le cadre du projet.

### Technologies identifiées

**Backend :**
- Python
- Flask
- SQLite

**Frontend :**
- HTML
- CSS
- JavaScript natif

**Communication :**
- API REST via `fetch()`

### Principaux endpoints identifiés

```text
POST   /api/auth/login
GET    /api/tasks
POST   /api/tasks
GET    /api/tasks/<task_id>
PATCH  /api/tasks/<task_id>/status
DELETE /api/tasks/<task_id>
GET    /api/health
```

### Authentification

L'application utilise actuellement une authentification simplifiée basée sur un nom d'utilisateur.

Cette authentification est suffisante pour le projet pédagogique, mais ne doit pas être considérée comme une implémentation d'authentification de production.

---

## 3. Périmètre de l'automatisation

L'automatisation porte prioritairement sur les tests fonctionnels déterministes issus des User Stories et des Test Cases baselinés.

Les fonctionnalités concernées sont notamment :

- gestion de la propriété des tâches ;
- création d'une tâche ;
- gestion de la priorité ;
- gestion de la date d'échéance ;
- changement de statut ;
- suppression ;
- recherche ;
- combinaison des filtres lorsqu'elle est définie.

Les tests associés à **US-003** restent exclus de l'automatisation tant que **FR-008 / Q8** n'est pas défini et validé.

Les comportements non spécifiés ne doivent pas être transformés en exigences uniquement parce qu'ils sont implémentés dans l'application.

---

## 4. Principes d'automatisation

Les principes suivants sont appliqués :

1. **Les exigences baselinées sont la source de référence.**
2. Aucun comportement métier ne doit être inventé par l'automatisation.
3. Chaque test automatisé doit être traçable vers un Test Case.
4. Les tests doivent être indépendants autant que possible.
5. Les tests doivent être déterministes.
6. Les données de test doivent être maîtrisées.
7. Les assertions doivent vérifier le comportement attendu et non uniquement l'absence d'erreur technique.
8. Les sélecteurs doivent être robustes et maintenables.
9. L'automatisation doit rester lisible par un QA fonctionnel.
10. L'IA peut assister la génération ou l'analyse du code, mais toute proposition doit être revue et validée par un humain.

---

## 5. Architecture du projet Playwright

L'automatisation est développée avec **Playwright Test et JavaScript**.

Les fichiers d'automatisation utilisent exclusivement l'extension :

```text
.js
```

Aucun fichier TypeScript (`.ts`) n'est utilisé dans cette architecture.

### Architecture retenue

```text
playwright/
├── tests/
│   ├── us-001-ownership/
│   ├── us-002-task-creation/
│   ├── us-004-priority/
│   ├── us-005-due-date/
│   ├── us-006-status/
│   ├── us-007-deletion/
│   └── us-008-search/
│
├── pages/
│   ├── login.page.js
│   └── smarttodo.page.js
│
├── fixtures/
│   └── ...
│
├── test-data/
│   └── ...
│
├── utils/
│   └── ...
│
├── playwright.config.js
└── package.json
```

Cette architecture sépare les tests, les Page Objects, les données, les fixtures et les utilitaires.

---

## 6. Organisation des tests

Les tests sont organisés principalement par **User Story** afin de conserver une correspondance claire entre les exigences fonctionnelles et l'automatisation.

Exemple :

```text
tests/
├── us-001-ownership/
├── us-002-task-creation/
├── us-004-priority/
├── us-005-due-date/
├── us-006-status/
├── us-007-deletion/
└── us-008-search/
```

Chaque répertoire peut contenir un ou plusieurs fichiers `.spec.js`.

Exemple :

```text
us-002-task-creation/
└── task-creation.spec.js
```

Le nommage doit permettre d'identifier facilement la fonctionnalité testée.

---

## 7. Correspondance Test Case → Test automatisé

Chaque test automatisé doit correspondre à un Test Case existant.

Exemple :

```text
TC-005
   ↓
Test Playwright
   ↓
US-002
   ↓
AC-01
   ↓
FR-006 / FR-007
```

Le nom du test doit idéalement contenir l'identifiant du Test Case.

Exemple :

```javascript
test('TC-005 - créer une tâche avec des données valides', async ({ page }) => {
    // ...
});
```

Cette convention facilite :

- la traçabilité ;
- l'analyse des résultats ;
- le diagnostic des échecs ;
- la maintenance ;
- la génération des rapports.

---

## 8. Stratégie de localisation des éléments

Les éléments de l'interface doivent être identifiés avec des locators Playwright robustes.

La priorité est donnée aux éléments permettant une identification stable et compréhensible.

Exemples de sélecteurs disponibles dans l'application :

```text
#username-input
#login-form
#search-input
#title-input
#description-input
#priority-input
#due-date-input
#new-entry-form
#log-list
#logout-btn
```

Pour les éléments possédant un identifiant unique, les locators correspondants peuvent être utilisés.

Exemple :

```javascript
page.locator('#title-input')
```

Pour les éléments répétitifs, notamment les tâches, les locators doivent être suffisamment précis pour cibler la tâche concernée.

---

## 9. Stratégie de locators sémantiques

Lorsque cela est possible, Playwright doit privilégier les locators sémantiques tels que :

```javascript
page.getByRole()
page.getByLabel()
page.getByText()
```

Exemple :

```javascript
await page.getByRole('button', { name: 'Supprimer' }).click();
```

Cette approche améliore la lisibilité et rapproche le test de l'utilisation réelle de l'application.

Cependant, un locator sémantique ne doit pas être utilisé artificiellement s'il est moins stable ou moins précis qu'un identifiant existant.

La priorité est donc :

1. locator accessible et stable ;
2. `data-testid` lorsqu'il existe et est pertinent ;
3. ID ou attribut stable ;
4. locator CSS précis ;
5. XPath uniquement en dernier recours.

---

## 10. Page Object Model

Le projet utilise le **Page Object Model (POM)** afin de séparer :

- la logique de navigation et d'interaction avec l'interface ;
- la logique de test ;
- les assertions fonctionnelles.

Les Page Objects sont placés dans :

```text
playwright/pages/
```

Architecture initiale :

```text
pages/
├── login.page.js
└── smarttodo.page.js
```

### `login.page.js`

Responsable notamment de :

- l'accès à l'écran de connexion ;
- la saisie du nom d'utilisateur ;
- la validation du formulaire ;
- la vérification de l'accès à l'application.

### `smarttodo.page.js`

Responsable notamment de :

- la création d'une tâche ;
- la récupération des tâches ;
- la modification du statut ;
- la suppression ;
- la recherche ;
- les filtres ;
- les interactions avec les éléments principaux de SmartTodo.

---

## 11. Exemple de Page Object en JavaScript

Exemple simplifié :

```javascript
class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#username-input');
        this.loginForm = page.locator('#login-form');
    }

    async login(username) {
        await this.usernameInput.fill(username);
        await this.loginForm.getByRole('button').click();
    }
}

module.exports = { LoginPage };
```

Le Page Object encapsule les détails techniques de l'interface.

Le test peut alors rester centré sur le comportement fonctionnel.

---

## 12. Exemple de test en JavaScript

Les tests utilisent **CommonJS** dans l'architecture actuelle.

Exemple :

```javascript
const { test, expect } = require('@playwright/test');

test('TC-005 - créer une tâche avec des données valides', async ({ page }) => {

    await page.goto('/');

    await page.locator('#username-input').fill('qa-user');
    await page.locator('#login-form').getByRole('button').click();

    await page.locator('#title-input').fill('Préparer les tests QA');
    await page.locator('#description-input').fill('Préparer les tests fonctionnels');
    await page.locator('#priority-input').selectOption('Haute');

    await page.locator('#new-entry-form').getByRole('button').click();

    await expect(page.getByText('Préparer les tests QA')).toBeVisible();
});
```

Le code réel sera ensuite refactorisé vers les Page Objects afin d'éviter la duplication.

---

## 13. Gestion des données de test

Les données de test doivent être séparées du code lorsque cela améliore la lisibilité et la maintenance.

Répertoire prévu :

```text
playwright/test-data/
```

Les données doivent être cohérentes avec les données définies dans :

```text
test-data/test-data.md
```

Exemples de données :

```javascript
const validTask = {
    title: 'Préparer les tests QA',
    description: 'Préparer les tests fonctionnels',
    priority: 'Haute'
};
```

Les données utilisées doivent permettre notamment de couvrir :

- les valeurs nominales ;
- les valeurs limites ;
- les valeurs invalides ;
- les transitions de statut ;
- les recherches ;
- les combinaisons définies.

Aucune règle métier non spécifiée ne doit être créée uniquement pour générer des données.

---

## 14. Isolation des tests

Chaque test doit pouvoir être exécuté indépendamment des autres autant que possible.

Un test ne doit pas dépendre :

- de l'ordre d'exécution d'un autre test ;
- d'une tâche créée par un test précédent ;
- d'un état résiduel non contrôlé ;
- d'une donnée modifiée par un autre test.

Lorsque l'état initial est important, le test doit le préparer explicitement.

L'objectif est d'éviter les tests de type :

```text
Test A → crée une tâche
Test B → suppose que la tâche du Test A existe
```

Le Test B doit pouvoir préparer lui-même les conditions nécessaires.

---

## 15. Gestion de l'authentification

L'application utilise une authentification simplifiée par nom d'utilisateur.

Les tests doivent donc commencer par établir explicitement le contexte utilisateur nécessaire.

Pour les tests liés à la propriété des tâches, plusieurs utilisateurs doivent être utilisés lorsque nécessaire.

Exemple conceptuel :

```text
Utilisateur A
    ↓
Crée une tâche
    ↓
Utilisateur B
    ↓
Tente d'accéder à la tâche de A
```

Cette approche permet de tester la règle :

> Un utilisateur authentifié ne peut consulter, modifier ou supprimer que ses propres tâches.

L'utilisation d'un état d'authentification partagé pourra être envisagée ultérieurement si elle apporte un réel gain de performance sans compromettre l'isolation des tests.

---

## 16. Tests de propriété et d'isolation des données

Les tests liés à **US-001** vérifient notamment que :

- une tâche créée par un utilisateur lui est associée ;
- un autre utilisateur ne peut pas consulter cette tâche ;
- un autre utilisateur ne peut pas la modifier ;
- un autre utilisateur ne peut pas la supprimer.

Ces tests sont particulièrement importants car ils couvrent une règle de confidentialité et d'autorisation.

Ils ne doivent pas être réduits à une simple vérification de l'interface.

Lorsque cela est pertinent, les résultats observables côté application et API peuvent être utilisés pour confirmer le comportement attendu.

---

## 17. Assertions

Les assertions doivent vérifier le résultat fonctionnel attendu.

Exemple :

```javascript
await expect(
    page.getByText('Préparer les tests QA')
).toBeVisible();
```

Une assertion doit être directement liée au comportement attendu du Test Case.

Il faut éviter les assertions faibles telles que :

```javascript
expect(true).toBeTruthy();
```

ou les vérifications qui ne démontrent pas réellement que l'exigence est satisfaite.

Les assertions doivent couvrir notamment :

- présence ou absence d'une tâche ;
- valeur du statut ;
- valeur de la priorité ;
- présence de la date d'échéance ;
- message d'erreur ;
- confirmation de suppression ;
- résultat d'une recherche ;
- résultat d'une combinaison de filtres.

---

## 18. Diagnostics en cas d'échec

Lorsqu'un test échoue, les informations nécessaires au diagnostic doivent être conservées autant que possible.

Playwright pourra notamment fournir :

- screenshot ;
- trace ;
- vidéo selon la configuration ;
- logs ;
- erreur d'assertion ;
- étape ayant échoué.

La configuration initiale doit permettre de faciliter l'analyse des échecs sans générer inutilement des artefacts volumineux.

Un échec de test automatisé ne doit pas être immédiatement interprété comme un défaut applicatif.

Il peut également correspondre à :

- un problème d'environnement ;
- une donnée incorrecte ;
- un locator devenu obsolète ;
- une erreur dans le test automatisé ;
- un changement fonctionnel ;
- un véritable défaut applicatif.

L'analyse humaine du QA reste donc nécessaire.

---

## 19. Exécution des tests et stratégie de régression

Les tests doivent pouvoir être exécutés :

### Exécution de tous les tests

```bash
npx playwright test
```

### Exécution d'un fichier spécifique

```bash
npx playwright test tests/us-002-task-creation/task-creation.spec.js
```

### Exécution avec interface utilisateur

```bash
npx playwright test --ui
```

### Exécution avec navigateur visible

```bash
npx playwright test --headed
```

La suite de régression automatisée doit être composée prioritairement des Test Cases :

- déterministes ;
- répétables ;
- stables ;
- suffisamment spécifiés ;
- présentant une valeur de régression.

Les tests exploratoires et les comportements dont les exigences restent ambiguës doivent rester sous contrôle manuel.

L'objectif n'est donc pas d'automatiser **le maximum de tests**, mais d'automatiser **les bons tests**.