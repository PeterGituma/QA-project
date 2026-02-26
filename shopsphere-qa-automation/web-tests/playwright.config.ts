import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://demo.shopsphere.com',
    headless: true,
    screenshot: 'only-on-failure'
  }
});