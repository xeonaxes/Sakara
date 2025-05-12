import { Base } from './base.js';

export class Account extends Base {
  constructor(page) {
    super(page);
    this.authButton = page.locator('a.icon-desktop.header__icon--account[href*="/account"]');
    this.emailInput = page.locator('input#CustomerEmail');
    this.passwordInput = page.locator('input#CustomerPassword');
    this.submitButton = page.locator('button:has-text("Log in")'); 
    this.resetPasswordLink = page.locator('.forgot-password a');
    this.recoverEmailInput = page.locator('input#RecoverEmail');
    this.recoverSubmitButton = page.locator('button.button-primary:has-text("Submit")');
  }

  async authAccount(email,password) {
    await this.authButton.waitFor({ state: 'visible' });
    await this.authButton.click(); 
    await this.emailInput.fill(email);
    await this.passwordInput.fill(password);
  }
  
  async submitButtonAccount() {
    await this.submitButton.click();
 }

  async resetPasswordAccount(email) {
    await this.resetPasswordLink.click();
    await this.recoverEmailInput.fill(email);
    await this.recoverSubmitButton.click();
}
}