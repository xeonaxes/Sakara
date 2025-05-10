import { test, expect } from '@playwright/test';
import { Home } from '../../pages/home.js';
import { BASE_URL } from '../../utils/constants.js';
import { handleCookieBanner } from '../../utils/cookiesBanner.js';
import { handleCountryModal } from '../../utils/shippСountry.js';

test('Opening the home page', async ({ page }) => {
  const home = new Home(page);
      await home.navigate(BASE_URL);
      await handleCookieBanner(page);
      await handleCountryModal(page);

  await expect(page).toHaveURL(/flyingtiger\.com/);
});
