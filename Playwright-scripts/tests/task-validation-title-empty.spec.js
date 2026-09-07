import { test, expect } from '@playwright/test';

test('Refuser une tâche sans titre', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir le formulaire
  await page.locator('#new-entry-panel > summary').click();

  // Ne pas renseigner le titre
  await page.locator('#priority-input').selectOption('Moyenne');

  // Tenter de créer la tâche
  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Vérifier qu'une erreur est affichée
  await expect(page.locator('#form-errors')).toBeVisible();

  // Vérifier que le message concerne le titre
  await expect(page.locator('#form-errors')).toContainText('titre');

  // Vérifier qu'aucune tâche vide n'a été créée
  await expect(
    page.locator('.log-entry').filter({
      hasText: 'Tâche sans titre',
    })
  ).not.toBeVisible();

  
});