import { test, expect } from '@playwright/test';

test('Changer le statut d’une tâche', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir "Nouvelle entrée"
  await page.locator('#new-entry-panel > summary').click();

  // Créer une tâche
  await page.locator('#title-input').fill('Tâche statut');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Récupérer la tâche
  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche statut',
  });

  await expect(task).toBeVisible();

  // Statut initial
  await expect(task.locator('.pill-status')).toHaveText('À faire');

  // Passer à Terminée
  await task.getByRole('button', {
    name: 'Marquer terminée'
  }).click();

  await expect(task.locator('.pill-status')).toHaveText('Terminée');

  // Revenir à À faire
  await task.getByRole('button', {
    name: 'Rétablir à faire'
  }).click();

  await expect(task.locator('.pill-status')).toHaveText('À faire');
});