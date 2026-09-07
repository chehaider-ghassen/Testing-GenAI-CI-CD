import { test, expect } from '@playwright/test';

test('Filtrer les tâches par priorité', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Créer une tâche Haute
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche Haute');
  await page.locator('#priority-input').selectOption('Haute');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Créer une tâche Basse
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche Basse');
  await page.locator('#priority-input').selectOption('Basse');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Vérifier que les deux tâches existent
  await expect(
    page.locator('.log-entry').filter({ hasText: 'Tâche Haute' })
  ).toBeVisible();

  await expect(
    page.locator('.log-entry').filter({ hasText: 'Tâche Basse' })
  ).toBeVisible();

  

  // Appliquer le filtre Haute
  await page.locator('.filter-priority[value="Haute"]').check();

  // La tâche Haute doit être visible
  await expect(
    page.locator('.log-entry').filter({ hasText: 'Tâche Haute' })
  ).toBeVisible();

  // La tâche Basse doit être masquée
  await expect(
    page.locator('.log-entry').filter({ hasText: 'Tâche Basse' })
  ).not.toBeVisible();
  
});