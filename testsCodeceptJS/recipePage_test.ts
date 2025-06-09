const { I } = inject();

Feature('Recipe Card');

Scenario('Verify recipe card details', ({ I }) => {
  I.amOnPage('http://localhost:3000/recipeFinder');
  I.seeInTitle('Recipe Finder App');
  I.waitForElement('#Breakfast', 10);
  I.click('#Breakfast');
  I.seeInCurrentUrl('/recipeFinder/category/Breakfast');
  I.waitForText('Smoked Haddock Kedgeree', 10);
  I.click('#Smoked\\ Haddock\\ Kedgeree');
  // I.click('#Smok\\ Haddock\\ Kedgeree');
  I.seeInCurrentUrl('/recipeFinder/meal/52964');
  I.waitForElement('h2:has-text("Smoked Haddock Kedgeree")', 10);
  I.see('Smoked Haddock Kedgerees');
  I.waitForElement('h2:has-text("Smoked Haddock Kedgeree2")', 10);
});
