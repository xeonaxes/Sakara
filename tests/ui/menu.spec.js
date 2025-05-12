import { test } from '@playwright/test';
import { Menu } from '../../pages/menu.js';
import { BASE_URL } from '../../utils/constants.js';
import { handleCookieBanner } from '../../utils/cookiesBanner.js';
import { handleCountryModal } from '../../utils/shippСountry.js';

test.describe('Adding a product to favorites via the menu', () => {

    test('Adding a product to the Picnic page', async ({ page }) => {
  const menu = new Menu(page);
  await menu.navigate(BASE_URL);
  await handleCookieBanner(page);
  await handleCountryModal(page);
  await menu.openMenu();
  await menu.openNewInSection();
  await menu.selectPicnic();
  await menu.likeProductPicnic();

  
});


});
