import { test } from '@playwright/test';
import { Account } from '../../pages/account.js';
import { BASE_URL } from '../../utils/constants.js';
import { handleCookieBanner } from '../../utils/cookiesBanner.js';
import { handleCountryModal } from '../../utils/shippСountry.js';

test.describe('User authorization', () => {
  
  test('Authorization with existent user', async ({ page }) => {
    const account = new Account(page);
    await account.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);

    await account.authAccount('vlason05@gmail.com', 'lizaveta228');
  });


  test('Authorization with non-existent user', async ({ page }) => {
    const account = new Account(page);
    await account.navigate(BASE_URL);
    await handleCookieBanner(page);
    await handleCountryModal(page);

    await account.authAccount('testtest@gmail.com', 'testetstets');
  });
});