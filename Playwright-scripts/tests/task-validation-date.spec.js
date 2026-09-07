import { test, expect } from '@playwright/test';

test('Refuser une date d’échéance dans le passé', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche date passée');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.locator('#due-date-input').fill('2026-09-03');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  await expect(page.locator('#form-errors')).toBeVisible();

  await expect(page.locator('#form-errors')).toContainText('date');

  await expect(
    page.locator('.log-entry').filter({
      hasText: 'Tâche date passée',
    })
  ).not.toBeVisible();

 
});