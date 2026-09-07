import { test, expect } from '@playwright/test';

test('Limiter la description à 500 caractères', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir le formulaire
  await page.locator('#new-entry-panel > summary').click();

  // Description de 501 caractères
  const longDescription = 'A'.repeat(501);

  await page.locator('#title-input').fill('Tâche description longue');
  await page.locator('#description-input').fill(longDescription);
  await page.locator('#priority-input').selectOption('Moyenne');

  // Vérifier la limitation à 500 caractères
  await expect(page.locator('#description-input'))
    .toHaveValue('A'.repeat(500));

  // Vérifier le compteur
  await expect(page.locator('#description-count')).toHaveText('500');
  
});