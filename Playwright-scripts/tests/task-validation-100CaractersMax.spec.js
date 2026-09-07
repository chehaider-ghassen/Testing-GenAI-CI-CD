import { test, expect } from '@playwright/test';

test('Refuser un titre de plus de 100 caractères', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir le formulaire
  await page.locator('#new-entry-panel > summary').click();

  // Titre de 101 caractères
  const longTitle = 'A'.repeat(101);

  await page.locator('#title-input').fill(longTitle);
  await page.locator('#priority-input').selectOption('Moyenne');

  // Vérifier que le champ est limité à 100 caractères
  await expect(page.locator('#title-input')).toHaveValue('A'.repeat(100));

  // Vérifier le compteur
  await expect(page.locator('#title-count')).toHaveText('100');
  
});