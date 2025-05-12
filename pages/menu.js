import { Base } from './base.js';

export class Menu extends Base{
    constructor(page) {
    super(page);
    this.page = page;
    this.menuIcon = page.locator('.menu-icons__container'); 
    this.newIn = page.locator('li.menu-drawer__menu-item summary span', { hasText: 'New in' }); 
    this.picnicLink = page.locator('#Details-menu-drawer-menu-item-1 a:has-text("Picnic")'); 
    this.wishlistPicnicButton = page.locator('[data-product-handle="strawberry-mug-200-ml-3054296"]');


  }

  async openMenu() {
    await this.menuIcon.click();
  }

  async openNewInSection() {
    await this.newIn.click();
  }

  async selectPicnic() {
    await this.picnicLink.click();
  }

  async likeProductPicnic() {
    await this.wishlistPicnicButton.click();
  }

    async openshopAllSection() {
    await this.shopAll.click();
  }

  
}
