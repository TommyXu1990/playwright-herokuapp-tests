import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.pause();
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  await expect(page.getByRole('checkbox')).toBeVisible();
  await expect(page.getByRole('checkbox')).not.toBeChecked();
  await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();
  await page.getByRole('checkbox').check();
  await expect(page.getByRole('checkbox')).toBeChecked();
  await page.getByRole('button', { name: 'Remove' }).click();
  await expect(page.getByRole('button', { name: 'Add' })).toBeVisible();
  await expect(page.getByText('It\'s gone!')).toBeVisible();
  await page.getByRole('button', { name: 'Add' }).click();
  await expect(page.getByText('A checkbox')).toBeVisible();
  await expect(page.getByRole('textbox')).toBeEmpty();
  await expect(page.getByRole('button', { name: 'Enable' })).toBeVisible();
  await page.getByRole('button', { name: 'Enable' }).click();
  await expect(page.getByRole('button', { name: 'Disable' })).toBeVisible();
  await expect(page.getByText('It\'s enabled!')).toBeVisible();
  await page.getByRole('textbox').click();
  await page.getByRole('textbox').fill('Hello!');
  await expect(page.getByRole('textbox')).toHaveValue('Hello!');
  await page.getByRole('button', { name: 'Disable' }).click();
  await expect(page.getByRole('button', { name: 'Enable' })).toBeVisible();
  await expect(page.getByText('It\'s disabled!')).toBeVisible();
});