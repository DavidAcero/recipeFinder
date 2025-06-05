import { test, expect } from '@playwright/test';

const BREAKFAST_OPTION = [
  'Bread omelette',
  'Breakfast Potatoes',
  'English Breakfast',
  'Fruit and Cream Cheese Br',
  'Full English Breakfast',
  'Home-made Mandazi',
  'Salmon Eggs Eggs Benedict',
  'Smoked Haddock Kedgeree'
];

test('Breakfast Category Cards', async ({ page }) => {
  await page.goto('http://localhost:3000/recipeFinder');
  await expect(page).toHaveTitle(/Recipe Finder App/);
  await page.click('#Breakfast');
  await expect(page).toHaveURL(/\/recipeFinder\/category\/Breakfast/);
  
  for (let index = 0; index < BREAKFAST_OPTION.length; index++) {
    const TITLE = BREAKFAST_OPTION[index];
    const FOOD_BOX_SELECTOR = `.meal-box:nth-of-type(${index + 1})`;
    // Hover by selector
    await page.hover(FOOD_BOX_SELECTOR, { timeout: 5000 });
    await page.waitForSelector(`text=${TITLE}`, { timeout: 5000 });
  }
});
