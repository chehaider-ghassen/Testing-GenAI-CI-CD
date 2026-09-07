import { test, expect } from '@playwright/test';

test('Filtrer les tâches par statut', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Créer une tâche à faire
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche à faire');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Créer une tâche terminée
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche terminée');
  await page.locator('#priority-input').selectOption('Haute');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const taskTodo = page.locator('.log-entry').filter({
    hasText: 'Tâche à faire',
  });

  const taskDone = page.locator('.log-entry').filter({
    hasText: 'Tâche terminée',
  });

  await expect(taskTodo).toBeVisible();
  await expect(taskDone).toBeVisible();

  // Passer la deuxième tâche à "Terminée"
  await taskDone.getByRole('button', {
    name: 'Marquer terminée'
  }).click();

  await expect(taskDone.locator('.pill-status')).toHaveText('Terminée');

  // Filtrer sur "Terminée"
  await page.locator('.filter-status[value="Terminée"]').check();

  await expect(taskDone).toBeVisible();
  await expect(taskTodo).not.toBeVisible();

  
});