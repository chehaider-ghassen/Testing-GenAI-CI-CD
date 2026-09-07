import { test, expect } from '@playwright/test';

test('Créer une tâche', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir "Nouvelle entrée"
  const newEntryPanel = page.locator('#new-entry-panel');

  await newEntryPanel.locator('summary').click();

  // Vérifier que le formulaire est maintenant visible
  await expect(page.locator('#title-input')).toBeVisible();

  // Remplir le formulaire
  await page.locator('#title-input').fill('Tâche Playwright');

  await page.locator('#description-input').fill(
    'Tâche créée automatiquement par Playwright'
  );

  await page.locator('#priority-input').selectOption('Haute');

  // Ajouter
  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Vérifier la tâche
  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche Playwright',
  });

  await expect(task).toBeVisible();

  await expect(task.locator('.entry-title'))
    .toHaveText('Tâche Playwright');

  await expect(task.locator('.entry-description'))
    .toHaveText('Tâche créée automatiquement par Playwright');

  await expect(task.locator('.pill-priority'))
    .toHaveText('Haute');

  await expect(task.locator('.pill-status'))
    .toHaveText('À faire');
});