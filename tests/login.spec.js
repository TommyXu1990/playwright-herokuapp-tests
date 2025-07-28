import { test, expect } from '@playwright/test';

test('Login and logout flow', async ({ page }) => {
  // Pause the test and open Playwright Inspector for step-by-step debugging.
  // Comment out or remove this line if you don’t want the inspector to open.
  await page.pause();

  //Go to login page
  await page.goto('https://the-internet.herokuapp.com/login');

  //Fills in username and password 
  await page.getByRole('textbox', { name: 'Username' }).fill('tomsmith');
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');

  //Click the login button 
  await page.getByRole('button', { name: ' Login' }).click();

  //Assert the success message 
  await expect(page.locator('h4')).toContainText('Welcome to the Secure Area. When you are done click logout below.');

  //Click logout
  await page.getByRole('link', { name: 'Logout' }).click();

  //Assert the logout message 
  await page.getByText('You logged out of the secure area!').click();
});