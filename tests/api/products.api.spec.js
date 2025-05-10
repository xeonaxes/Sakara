import { test, expect } from '@playwright/test';

test.describe('FlyingTiger API checks', () => {
  
  test('Homepage is reachable', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/');
    expect(res.status()).toBe(200);
  });

  test('Non-existent page is not found', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/non-existent-page');
    expect(res.status()).toBe(404);
  });

  test('New collection page is accessible', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/en-gb/collections/new');
    expect(res.status()).toBe(200);
  });

  test('Wishlist page is accessible', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/pages/wish-list');
    expect(res.status()).toBe(200);
  });

  test('Help page is accessible', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/en-gb/pages/help');
    expect(res.status()).toBe(200);
  });

  test('School collection page is accessible', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/en-gb/collections/new');
    expect(res.status()).toBe(200);
  });

  test('Contact form page is accessible', async ({ request }) => {
    const res = await request.get('https://flyingtiger.com/pages/enquiry-form');
    expect(res.status()).toBe(200);
  });

});
