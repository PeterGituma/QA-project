import { Page } from '@playwright/test';

export class CheckoutPage {
  constructor(private page: Page) {}

  async completeCheckout() {
    await this.page.click('#checkout');
    await this.page.click('#confirmOrder');
  }
}