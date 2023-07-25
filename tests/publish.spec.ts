import { test, expect } from '@playwright/test';

test('publish', async ({ page }) => {
  await page.goto('https://www.simdif.com/en/');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('textbox', { name: 'Email address:' }).click();
  await page.getByRole('textbox', { name: 'Email address:' }).fill(process.env.USERNAME);
  await page.getByRole('textbox', { name: 'Email address:' }).press('Tab');
  await page.getByLabel('Password:').fill(process.env.PASSWORD);
  await page.locator('#sd-login-remember-me').check();
  await page.getByRole('button', { name: 'Login' }).click();
  await page.locator('.sd-listsite-item-active').click();
  await page.locator('.sd-block-title').nth(0).click();
  const date = new Date();
  await page.locator('#sd-editor-text-editor .note-editable').fill('Tested on ' + date.toISOString());
  await page.getByRole('button', { name: '' }).click();
  await page.locator('#popup-bottom-right-button').click();
  await page.locator('#publish-button').click();
  await page.getByText('Publish Now').click();
  await page.getByText('Back', { exact: true }).click();
  await page.locator('#sd-editor-top-panel-account-preferences span').click();
  await page.locator('#sd-editor-account-preferences div').filter({ hasText: 'Log Out' }).nth(3).click();
});
