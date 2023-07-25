import { test, expect } from '@playwright/test';

test('demo', async ({ page }) => {
  await page.goto('https://www.simdif.com/en/');
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('link', { name: 'website builder,website builder app for Android, website builder app for iPhone and iPad' }).click();
  await page.getByRole('link', { name: 'Try the Demo' }).click();
  // const startButton = page.locator('#sd-editor-loading-page div').filter({ hasText: 'START' }).first();
  // await expect(startButton).toHaveClass('loading-start-button-active', {timeout: 10000});
  await page.locator('.loading-start-button-active').first().click();
  await page.locator('li').filter({ hasText: 'A topic page' }).locator('span').click();
  await page.getByText('Next').click();
  await page.locator('.sd-colors-preset-item').nth(3).click();
  await page.getByText('Next').click();
  await page.locator('#sd-editor-loader-icon').click();
  await page.getByRole('heading', { name: 'Title of this Website' }).click();
  await page.locator('.note-editable').click();
  await page.locator('.note-editable').fill('Test title');

  // try to active Apply button
  await page.locator('.sd-set-site-title-size-down').first().click();

  await page.locator('#popup-bottom-right-button').click();
  await page.locator('#sd-block-content').getByText('Tell your visitor what this block is about. Use words and vocabulary you are sur').click();
  await page.locator('.note-editable').click();
  await page.locator('.note-editable').fill('Write some text with Text Editor');

  // try to active Apply button
  await page.locator('.sd-editor-text-editor-button').first().click();

  await page.locator('#popup-bottom-right-button').click();
  await page.locator('#sd-btn-icon-preview span').click();
  await page.locator('#preview-toggle-mobile span').click();
  await page.locator('#preview-toggle-mobile span').click();
  await page.locator('#sd-btn-icon-preview span').click();

  await page.locator('#sd-editor-top-panel-account-preferences').click();
  await page.locator('#popup-bottom-middle-button').click();
  await page.locator('#sd-editor-top-panel-site-settings span').click();
  await page.locator('#sd-ss-tool-settings div').nth(1).click();
  await page.getByText('Site Address - Domain Name', { exact: true }).click();
  await page.locator('#popup-bottom-left-button').click();

  await page.locator('#sd-editor-top-panel-account-preferences').click();
  await page.locator('.view_account_logOut').first().click();
  await expect(page).toHaveURL("https://simdif-edt.simple-different.com/sd_editor.php");
});
