import { test, expect } from '@playwright/test';

test('Recipe Card', async ({ page }) => {
  await page.goto('http://localhost:3000/recipeFinder');
  await expect(page).toHaveTitle(/Recipe Finder App/);
  await page.click('#Breakfast');
  await expect(page).toHaveURL(/\/recipeFinder\/category\/Breakfast/);

  await page.click('#Smoked\\ Haddock\\ Kedgeree');
  await expect(page).toHaveURL(/\/recipeFinder\/meal\/52964/);
  await page.waitForSelector('h2:has-text("Smoked Haddock Kedgeree")', { timeout: 5000 });
});
