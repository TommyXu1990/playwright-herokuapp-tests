import { test, expect } from '@playwright/test';

test('Dynamic Controls - checkbox and input field behavior', async ({ page }) => {
  // Pause the test and open Playwright Inspector for step-by-step debugging.
  // Comment out or remove this line if you don’t want the inspector to open.
  await page.pause();

  // Navigate to page
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // --- CHECKBOX SECTION ---

  // Assert checkbox is visible and not checked
  const checkbox = page.getByRole('checkbox');
  await expect(checkbox).toBeVisible();
  await expect(checkbox).not.toBeChecked();

  // Check the checkbox
  await checkbox.check();
  await expect(checkbox).toBeChecked();

  // Click "Remove" button and wait for confirmation
  const removeBtn = page.getByRole('button', { name: 'Remove' });
  await expect(removeBtn).toBeVisible();
  await removeBtn.click();

  // Wait for the "It's gone!" message and for checkbox to be gone
  await expect(page.getByText("It's gone!")).toBeVisible();
  await expect(checkbox).toBeHidden({ timeout: 5000 });

  // Click "Add" and verify checkbox is back
  const addBtn = page.getByRole('button', { name: 'Add' });
  await expect(addBtn).toBeVisible();
  await addBtn.click();
  await expect(page.getByText('A checkbox')).toBeVisible({ timeout: 5000 });
  await expect(checkbox).toBeVisible();

  // --- TEXT INPUT SECTION ---

  // Confirm textbox is disabled and empty
  const input = page.getByRole('textbox');
  const enableBtn = page.getByRole('button', { name: 'Enable' });
  await expect(input).toBeEmpty();
  await expect(enableBtn).toBeVisible();

  // Click "Enable" and wait for it to become enabled
  await enableBtn.click();
  await expect(page.getByRole('button', { name: 'Disable' })).toBeVisible({ timeout: 5000 });
  await expect(page.getByText("It's enabled!")).toBeVisible({ timeout: 5000 });

  // Fill input with text
  await input.fill('Hello!');
  await expect(input).toHaveValue('Hello!');

  // Click "Disable" and verify
  const disableBtn = page.getByRole('button', { name: 'Disable' });
  await disableBtn.click();
  await expect(page.getByRole('button', { name: 'Enable' })).toBeVisible({ timeout: 5000 });
  await expect(page.getByText("It's disabled!")).toBeVisible({ timeout: 5000 });
});
