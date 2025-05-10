import { expect } from '@playwright/test';

export async function handleCookieBanner(page) {
  const acceptButton = page.locator('button[aria-label="deny cookies"]');
    await acceptButton.click();
    await expect(page.locator('#cookie-banner')).toBeHidden();
}