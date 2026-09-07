import { test, expect } from '@playwright/test';

test('Accepter les trois niveaux de priorité', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Priorité Basse
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche priorité basse');
  await page.locator('#priority-input').selectOption('Basse');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const taskBasse = page.locator('.log-entry').filter({
    hasText: 'Tâche priorité basse',
  });

  await expect(taskBasse.locator('.pill-priority')).toHaveText('Basse');

  // Priorité Moyenne
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche priorité moyenne');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const taskMoyenne = page.locator('.log-entry').filter({
    hasText: 'Tâche priorité moyenne',
  });

  await expect(taskMoyenne.locator('.pill-priority')).toHaveText('Moyenne');

  // Priorité Haute
  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche priorité haute');
  await page.locator('#priority-input').selectOption('Haute');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const taskHaute = page.locator('.log-entry').filter({
    hasText: 'Tâche priorité haute',
  });

  await expect(taskHaute.locator('.pill-priority')).toHaveText('Haute');
});