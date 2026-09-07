import { test, expect } from '@playwright/test';

test('Refuser une tâche sans priorité', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir le formulaire
  await page.locator('#new-entry-panel > summary').click();

  // Renseigner uniquement le titre
  await page.locator('#title-input').fill('Tâche sans priorité');

  // Vérifier qu'aucune priorité n'est sélectionnée
  await expect(page.locator('#priority-input')).toHaveValue('');

  // Tenter de créer la tâche
  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Vérifier qu'une erreur est affichée
  await expect(page.locator('#form-errors')).toBeVisible();

  // Vérifier que l'erreur concerne la priorité
  await expect(page.locator('#form-errors')).toContainText('priorité');

  
});