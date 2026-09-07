import { test, expect } from '@playwright/test';

test('Accepter une date d’échéance valide', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche avec échéance');
  await page.locator('#priority-input').selectOption('Moyenne');
  await page.locator('#due-date-input').fill('2026-12-31');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche avec échéance',
  });

  await expect(task).toBeVisible();

  await expect(page.locator('#form-errors')).toBeHidden();
  
});