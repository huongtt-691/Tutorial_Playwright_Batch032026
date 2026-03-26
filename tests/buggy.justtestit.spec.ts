import { test, expect } from '@playwright/test';

test ('Login function', async ({ page }) =>{
//go to page
await page.goto ('https://buggy.justtestit.org/');
await expect(page).toHaveTitle(/Buggy Cars Rating/);

//Login
await page.getByRole('textbox', { name: 'Login' }).fill('huongtt');
await page.locator('input[name="password"]').fill('Aa@123456');
await page.getByRole('button', { name: 'Login' }).click();

// open product detail screen
await page.getByRole('link', {name:'Lamborghini'}).click();
await expect(page).toHaveURL(/\/make\//);
//
});