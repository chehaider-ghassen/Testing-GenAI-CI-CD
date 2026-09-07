import { test, expect } from '@playwright/test';

test('Rechercher une tâche par sa description', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche Description');
  await page.locator('#description-input').fill(
    'Recherche dans le contenu de la description'
  );
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche Description',
  });

  await expect(task).toBeVisible();

  // Recherche avec un mot présent uniquement dans la description
  await page.locator('#search-input').fill('contenu');

  await expect(task).toBeVisible();

  // Vérifier que la recherche est insensible à la casse
  await page.locator('#search-input').fill('DESCRIPTION');

  await expect(task).toBeVisible();
  
});