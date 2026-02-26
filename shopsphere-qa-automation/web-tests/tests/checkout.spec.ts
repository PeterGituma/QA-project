import { test, expect } from '@playwright/test';
import { CheckoutPage } from '../pages/CheckoutPage';

test('User can complete checkout', async ({ page }) => {
  await page.goto('/products');
  await page.click('.add-to-cart');
  
  const checkoutPage = new CheckoutPage(page);
  await checkoutPage.completeCheckout();
  
  await expect(page.locator('#orderSuccess')).toBeVisible();
});