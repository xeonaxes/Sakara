import { test, expect } from '@playwright/test';
import { Cart } from '../../pages/cart.js';
import { BASE_URL } from '../../utils/constants.js';
import { handleCookieBanner } from '../../utils/cookiesBanner.js';
import { handleCountryModal } from '../../utils/shippСountry.js';

test.describe('Search product and Proceed to checkout', () => {

test('Adding a product to the cart', async ({ page }) => {
  const cart = new Cart(page);
  await cart.navigate(BASE_URL);

  await handleCookieBanner(page);
  await handleCountryModal(page);

  await cart.openCart();
  await cart.addProductToCart();
  await cart.proceedToCheckout();
  await cart.enterEmail('lizatest@gmail.com');
  await expect(cart.emailInput).toHaveValue('lizatest@gmail.com');

  const shippingData = {
    country: 'PL',
    firstName: 'Liza',
    lastName: 'Test',
    company: 'TestCompany',
    address: 'Pszenna 5',
    city: 'Gdansk',
    postcode: '70-749',
    phone: '+48571282525'
  };

  await cart.fillShippingForm(shippingData);
  await cart.continueToShipping();
 
});
test('Removing an item from the cart', async ({ page }) => {
  const cart = new Cart(page);
  await cart.navigate(BASE_URL);
  await handleCookieBanner(page);
  await handleCountryModal(page);

  await cart.openCart();
  await cart.addProductToCart();
  await cart.removeItemFromCart();
  await cart.closeModal();
}
);
});