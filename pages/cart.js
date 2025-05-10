import { Base } from './base.js';

export class Cart extends Base {
  constructor(page) {
    super(page);
    this.page = page;
    this.cartIcon = page.locator('a#cart-icon-bubble');
    this.addToBagButton = page.locator('#quick-add-template--54171181089116__featured_collection54171181089116-submit');
    this.checkoutButton = page.locator('button#CartDrawer-Checkout');
    this.emailInput = page.locator('input#email');

    this.countrySelect = page.locator('select[name="countryCode"]');
    this.firstNameInput = page.locator('input[name="firstName"]:not([type="hidden"])');
    this.lastNameInput = page.locator('input[name="lastName"]:not([type="hidden"])');
    this.companyInput = page.locator('input[name="company"]:not([type="hidden"])');
    this.addressInput = page.locator('input[name="address1"]:not([type="hidden"])');
    this.cityInput = page.locator('input[name="city"]:not([type="hidden"])');
    this.postcodeInput = page.locator('input[name="postalCode"]:not([type="hidden"])');
    this.phoneInput = page.locator('input[name="phone"]:not([type="hidden"])');
    this.continueToShippingButton = page.getByRole('button', { name: 'Continue to shipping' });
  
    this.removeFromCartButton = page.locator('cart-remove-button#CartDrawer-Remove-1 button');
    this.closeModalButton = page.locator('button.drawer__close[aria-label="Schließen"]');
  }
 

  async openCart() {
    await this.cartIcon.click();
  }

  async addProductToCart() {
    await this.addToBagButton.waitFor({ state: 'visible' });
    await this.addToBagButton.click();
  }

  async proceedToCheckout() {
    await this.checkoutButton.waitFor({ state: 'visible' });
    await this.checkoutButton.click();
  }

  async enterEmail(email) {
    await this.emailInput.waitFor({ state: 'visible' });
    await this.emailInput.fill(email);
  }

  async fillShippingForm(data) {
    await this.countrySelect.selectOption(data.country);
    await this.firstNameInput.fill(data.firstName);
    await this.lastNameInput.fill(data.lastName);
    await this.companyInput.fill(data.company);
    await this.addressInput.fill(data.address);
    await this.cityInput.fill(data.city);
    await this.postcodeInput.fill(data.postcode);
    await this.phoneInput.fill(data.phone);
  }

  async continueToShipping() {
    await this.continueToShippingButton.waitFor({ state: 'visible' });
    await this.continueToShippingButton.click();
  }

  async removeItemFromCart() {
    await this.removeFromCartButton.waitFor({ state: 'visible' });
    await this.removeFromCartButton.click();
  }

  async closeModal() {
  await this.page.keyboard.press('Escape');
}

  }


