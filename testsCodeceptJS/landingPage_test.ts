let cardTitles = [
  'Beef', 'Chicken', 'Dessert', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian', 'Breakfast'
];

Feature('Initial Cards');

Scenario('Verify initial cards', ({ I }) => {
  I.amOnPage('http://localhost:3000/recipeFinder');
  I.seeInTitle('Recipe Finder App');
  I.waitForText('Beef', 10);
  cardTitles.forEach((title, index) => {
    const FOOD_BOX_SELECTOR = `.food-box:nth-of-type(${index + 1})`;
    // Hover by title
    I.moveCursorTo(`#${title}`);
    I.waitForText(title, 5);
    // Hover by selector
    I.moveCursorTo(FOOD_BOX_SELECTOR);
    I.waitForText(title, 5);
  });
  I.waitForElement('#categoryContainer', 5);
  I.click('#categoryContainer #Chicken');
  I.see('Chicken Handi');
  I.click('[locatorlabel="Return to Home Recipe"]');
  I.waitForURL('http://localhost:3000/recipeFinder', 5);
});
