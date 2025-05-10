import { Base } from './base.js';

export class Account extends Base {
  constructor(page) {
    super(page);
    this.authButton = page.locator('a.icon-desktop.header__icon--account[href*="/account"]');
    this.emailInput = page.locator('input#CustomerEmail');
    this.passwordInput = page.locator('input#CustomerPassword');
    this.submitButton = page.locator('button:has-text("Log in")'); 
  }

  async authAccount(email,password) {
    await this.authButton.waitFor({ state: 'visible' });
    await this.authButton.click(); 
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
    await this.submitButton.click();
  }
}