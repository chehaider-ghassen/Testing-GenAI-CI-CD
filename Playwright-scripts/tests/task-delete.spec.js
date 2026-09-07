import { test, expect } from '@playwright/test';

test('Supprimer une tâche avec confirmation', async ({ page }) => {
  await page.goto('/');

  // Connexion
  await page.locator('#username-input').fill('testeur');
  await page.getByRole('button', { name: 'Entrer' }).click();

  await expect(page.locator('#app-shell')).toBeVisible();

  // Ouvrir "Nouvelle entrée"
  await page.locator('#new-entry-panel > summary').click();

  // Créer une tâche
  await page.locator('#title-input').fill('Tâche à supprimer');
  await page.locator('#priority-input').selectOption('Moyenne');

  await page.getByRole('button', {
    name: 'Ajouter au journal'
  }).click();

  // Récupérer la tâche
  const task = page.locator('.log-entry').filter({
    hasText: 'Tâche à supprimer',
  });

  await expect(task).toBeVisible();

  // Cliquer sur Supprimer
  await task.getByRole('button', {
    name: 'Supprimer'
  }).click();

  

  // Vérifier la confirmation
  await expect(
    task.getByRole('button', { name: 'Confirmer' })
  ).toBeVisible();

 

  // Confirmer la suppression
  await task.getByRole('button', {
    name: 'Confirmer'
  }).click();

  // Vérifier que la tâche a disparu
  await expect(task).not.toBeVisible();

  // Vérifier le message de succès
  await expect(page.locator('#toast')).toHaveText(
    'Tâche supprimée définitivement.'
  );

  
});