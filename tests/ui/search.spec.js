import { test, expect } from '@playwright/test';
import { Search } from '../../pages/search.js';
import { BASE_URL } from '../../utils/constants.js';
import { handleCookieBanner } from '../../utils/cookiesBanner.js';
import { handleCountryModal } from '../../utils/shippСountry.js';

test.describe('Search product and Proceed to checkout', () => {
  
  test('Search and open existing product, then add to bag', async ({ page }) => {
    const search = new Search(page);
    await search.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);

    await search.searchWindow('Strawberry serving bowl. 3 pcs');
    await search.selectProduct();
    await expect(page).toHaveURL(/strawberry-serving-bowl/);
    await search.addToBag();



  });
  
  test('Search for a non-existent product', async ({ page }) => {
    const search = new Search(page);
    await search.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);
     
    await search.searchWindow('qwerty1234');
    const productItem = page.locator('qwerty1234');
    await expect(productItem).toHaveCount(0);
  });
});

