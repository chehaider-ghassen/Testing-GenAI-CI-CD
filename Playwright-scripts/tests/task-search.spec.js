import { test, expect } from '@playwright/test';

test('Rechercher une tâche par son titre', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir "Nouvelle entrée"
  await page.locator('#new-entry-panel > summary').click();

  // Créer une tâche de test
  await page.locator('#title-input').fill('Tâche Recherche Playwright');
  await page.locator('#description-input').fill(
    'Description pour tester la recherche'
  );
  await page.locator('#priority-input').selectOption('Haute');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Vérifier que la tâche est créée
  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche Recherche Playwright',
  });

  await expect(task).toBeVisible();

  // Effectuer la recherche
  await page.locator('#search-input').fill('Recherche Playwright');

  // Vérifier que la tâche est toujours visible
  await expect(task).toBeVisible();
  
  

  // Tester la recherche insensible à la casse
  await page.locator('#search-input').fill('RECHERCHE PLAYWRIGHT');

  await expect(task).toBeVisible();

});