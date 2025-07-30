import { test, expect } from '@playwright/test';

test('Checkboxes - verify default state and toggle behavior', async ({ page }) => {
  // Pause the test and open Playwright Inspector for step-by-step debugging.
  // Comment out or remove this line if you don’t want the inspector to open.
  await page.pause();

  // Go to the Checkboxes page
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const firstCheckbox = page.getByRole('checkbox').first();
  const secondCheckbox = page.getByRole('checkbox').nth(1);

  // Assert initial checkbox states
  await expect(firstCheckbox).not.toBeChecked(); // Should be unchecked
  await expect(secondCheckbox).toBeChecked();    // Should be checked

  // Interact: check the first checkbox, uncheck the second
  await firstCheckbox.check();
  await expect(firstCheckbox).toBeChecked();

  await secondCheckbox.uncheck();
  await expect(secondCheckbox).not.toBeChecked();
});
