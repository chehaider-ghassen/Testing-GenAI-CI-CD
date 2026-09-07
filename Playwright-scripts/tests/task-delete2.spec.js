import { test, expect } from '@playwright/test';

test('Annuler la suppression d’une tâche', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche à conserver');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche à conserver',
  });

  await expect(task).toBeVisible();

  // Demander la suppression
  await task.getByRole('button', {
    name: 'Supprimer'
  }).click();

  // Vérifier la confirmation
  await expect(
    task.getByRole('button', { name: 'Confirmer' })
  ).toBeVisible();

  // Annuler la suppression
  await task.getByRole('button', {
    name: 'Annuler'
  }).click();

  // La tâche doit toujours être présente
  await expect(task).toBeVisible();
  await expect(task.locator('.entry-title')).toHaveText(
    'Tâche à conserver'
  );
});