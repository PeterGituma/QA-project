import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test('User can login successfully', async ({ page }) => {
  const loginPage = new LoginPage(page);
  
  await loginPage.navigate();
  await loginPage.login('testuser@gmail.com', 'Password123');
  
  await expect(page).toHaveURL(/dashboard/);
});