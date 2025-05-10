import { expect } from '@playwright/test';

export async function handleCountryModal(page) {
  const modal = page.locator('.md-modal__container');
  await page.locator('button#md-form__select__country').click();
  await page.locator('ul#orbeCountryList >> text=United Kingdom').click();
  await page.locator('button#md-form__select__language').click();
  await page.locator('ul#orbeLanguageList >> li[data-locale="en"]').click();
  await page.locator('button#md-btn__form__onSubmit').click();
  await expect(modal).toBeHidden();
}