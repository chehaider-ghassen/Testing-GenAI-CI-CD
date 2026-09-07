import { test, expect } from '@playwright/test';

test('Afficher aucun résultat si la recherche ne correspond à aucune tâche', async ({ page }) => {
  await page.goto('/');

  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  await page.locator('#new-entry-panel > summary').click();

  await page.locator('#title-input').fill('Tâche existante');
  await page.locator('#description-input').fill('Description existante');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche existante',
  });

  await expect(task).toBeVisible();

  // Recherche d'un terme inexistant
  await page.locator('#search-input').fill('TâcheQuiNExistePas');

  await expect(task).not.toBeVisible();
  await expect(page.locator('.log-entry')).toHaveCount(0);
  
});