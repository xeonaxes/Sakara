import { test, expect } from '@playwright/test';
import { Search } from '../../pages/search.js';
import { BASE_URL } from '../../utils/constants.js';
import { handleCookieBanner } from '../../utils/cookiesBanner.js';
import { handleCountryModal } from '../../utils/shippСountry.js';

test.describe('Search product', () => {
  
  test('Checking the search by partial product name', async ({ page }) => {
    const search = new Search(page);
    await search.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);

    await search.searchWindow('Strawberry');
    await search.selectProduct();
    await search.addToBag();
  });
  
  test('Checking for a non-existent product', async ({ page }) => {
    const search = new Search(page);
    await search.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);
    await search.searchWindow('qwerty1234');
  });

  test('Checking that you can click on a product from the results and get to the product page', async ({ page }) => {
    const search = new Search(page);
    await search.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);
    await search.searchWindow('Strawberry serving bowl. 3 pcs');
    await search.selectProduct();
    await search.addToBag();
  });

});
