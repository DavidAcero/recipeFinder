import { test, expect } from '@playwright/test';

const CARD_TITLES = [
  'Beef', 'Chicken', 'Dessert', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast' 
];

test('Initial Cards', async ({ page }) => {
  await page.goto('http://localhost:3000/recipeFinder');
  await expect(page).toHaveTitle(/Recipe Finder App/);

  for (let index = 0; index < CARD_TITLES.length; index++) {
    const TITLE = CARD_TITLES[index];
    const FOOD_BOX_SELECTOR = `.food-box:nth-of-type(${index + 1})`;
    // Hover by title
    await page.hover(`#${TITLE}`);
    await page.waitForSelector(`text=${TITLE}`, { timeout: 5000 });
    // Hover by selector
    await page.hover(FOOD_BOX_SELECTOR, { timeout: 5000 });
    await page.waitForSelector(`text=${TITLE}`, { timeout: 5000 });
  }
});
