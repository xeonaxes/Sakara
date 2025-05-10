import { Base } from './base.js';

export class Search extends Base {
  constructor(page) {
    super(page);
    this.searchIcon = page.locator('summary[aria-label="Search for products"]');
    this.inputField = page.locator('input#Search-In-Modal-1');
    this.searchButton = page.locator('button.search__button');
    this.productLink = page.locator('li.klevuProduct a[title="Strawberry serving bowl. 3 pcs"]');
    this.addProductButton = page.locator('button.product-form__submit');
  }

  async searchWindow(text) {
    await this.searchIcon.click();
    await this.inputField.fill(text);
    const isVisible = await this.searchButton.isVisible();
    isVisible ? await this.searchButton.click() : await this.inputField.press('Enter');
  }

  async selectProduct() {
    await this.productLink.waitFor({ state: 'visible' });
    await this.productLink.click();
  }

  async addToBag() {
    await this.addProductButton.waitFor({ state: 'visible' });
    await this.addProductButton.click();
  }
}

