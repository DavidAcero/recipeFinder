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

Feature('Breakfast Category Cards');

Scenario('Verify breakfast category cards', ({ I }) => {
  I.amOnPage('http://localhost:3000/recipeFinder');
  I.seeInTitle('Recipe Finder App');
  I.click('#Breakfast');
  I.seeInCurrentUrl('/recipeFinder/category/Breakfast');

  BREAKFAST_OPTION.forEach((title, index) => {
    const FOOD_BOX_SELECTOR = `.meal-box:nth-of-type(${index + 1})`;
    // Hover by selector
    I.moveCursorTo(FOOD_BOX_SELECTOR);
    I.waitForText(title, 5);
  });
});
