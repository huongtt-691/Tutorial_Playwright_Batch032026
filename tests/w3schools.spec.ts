import { test, expect } from '@playwright/test';

test ('Search on W3Schools', async ({ page }) => {
  //go to page
  await page.goto('https://www.w3schools.com/');
  await expect(page).toHaveTitle(/W3Schools/);

  // search function
  const searchBox = page.locator ('#tnb-google-search-input');
  await expect(searchBox).toBeVisible();

  await searchBox.fill ('HTML');
  await searchBox.press ('Enter');
  await expect(page).toHaveTitle(/HTML/);
});