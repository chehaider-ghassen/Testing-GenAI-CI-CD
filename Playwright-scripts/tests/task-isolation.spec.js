import { test, expect } from '@playwright/test';

test('Isoler les tâches entre utilisateurs', async ({ browser }) => {
  // Utilisateur 1
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();

  await page1.goto('/');

  await page1.locator('#username-input').fill('testeur');
  await page1.getByRole('button', { name: 'Entrer' }).click();

  await expect(page1.locator('#app-shell')).toBeVisible();

  await page1.locator('#new-entry-panel > summary').click();

  await page1.locator('#title-input').fill('Tâche privée testeur');
  await page1.locator('#priority-input').selectOption('Haute');

  await page1.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  await expect(
    page1.locator('.log-entry').filter({
      hasText: 'Tâche privée testeur',
    })
  ).toBeVisible();

await page1.pause();

  // Utilisateur 2
  const context2 = await browser.newContext();
  const page2 = await context2.newPage();

  await page2.goto('/');

  await page2.locator('#username-input').fill('autre-utilisateur');
  await page2.getByRole('button', { name: 'Entrer' }).click();

  await expect(page2.locator('#app-shell')).toBeVisible();

  // La tâche du premier utilisateur ne doit pas apparaître
  await expect(
    page2.locator('.log-entry').filter({
      hasText: 'Tâche privée testeur',
    })
  ).not.toBeVisible();



await page2.pause();

  await context1.close();
  await context2.close();
});