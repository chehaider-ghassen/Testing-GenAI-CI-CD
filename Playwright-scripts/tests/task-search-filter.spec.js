import { test, expect } from '@playwright/test';

test('Combiner recherche et filtre de priorité', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Créer une tâche Haute
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Projet Alpha');
  await page.locator('#description-input').fill('Description Alpha');
  await page.locator('#priority-input').selectOption('Haute');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Créer une tâche Basse
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Projet Beta');
  await page.locator('#description-input').fill('Description Beta');
  await page.locator('#priority-input').selectOption('Basse');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const taskAlpha = page.locator('.log-entry').filter({
    hasText: 'Projet Alpha',
  });

  const taskBeta = page.locator('.log-entry').filter({
    hasText: 'Projet Beta',
  });


  await expect(taskAlpha).toBeVisible();
  await expect(taskBeta).toBeVisible();

 

  // Recherche "Alpha"
  await page.locator('#search-input').fill('Alpha');

  await expect(taskAlpha).toBeVisible();
  await expect(taskBeta).not.toBeVisible();

 

  // Ajouter le filtre Haute
  await page.locator('.filter-priority[value="Haute"]').check();

  await expect(taskAlpha).toBeVisible();
  await expect(taskBeta).not.toBeVisible();

 
 
  // Effacer les filtres
  await page.locator('#clear-filters-btn').click();



  // Les deux tâches doivent réapparaître
  await expect(taskAlpha).toBeVisible();
  await expect(taskBeta).toBeVisible();
});