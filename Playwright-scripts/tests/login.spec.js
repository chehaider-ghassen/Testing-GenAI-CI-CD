import { test, expect } from '@playwright/test';

test('Connexion à SmartTodo', async ({ page }) => {
  await page.goto('/');

  // Vérifier que l'écran de connexion est affiché
  await expect(page.locator('#login-screen')).toBeVisible();

  // Saisir le nom utilisateur
  await page.locator('#username-input').fill('testuser');

  // Cliquer sur Entrer
  await page.getByRole('button', { name: 'Entrer' }).click();

  // Vérifier que l'application est affichée
  await expect(page.locator('#app-shell')).toBeVisible();

  // Vérifier que le nom utilisateur est affiché
  await expect(page.locator('#username-display')).toHaveText('testuser');
});