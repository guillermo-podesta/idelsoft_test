import { test, expect } from '@playwright/test';
import { setupAPIMocks, resetMockDatabase } from '../fixtures/api-mocks';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login Tests', () => {
  let homePage: HomePage;
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    loginPage = new LoginPage(page);
    
    resetMockDatabase();
    await setupAPIMocks(page);
    
    await homePage.goto();
    await page.locator('mat-card:has-text("Add to Cart")').first().waitFor({ state: 'visible', timeout: 20000 });
  });

  test('TC1: Username blank in Login @ui @functional @regression', async ({ page }) => {
    await loginPage.clickAtLoginButton();
    await loginPage.usernameInput.waitFor({ state: 'visible', timeout: 10000 });

    await loginPage.usernameInput.click();
    await loginPage.passwordInput.fill('Luna1234');
    await loginPage.clickAtLoginSubmitButton();
    
    await expect(page.getByText('Username is required')).toBeVisible();
  });

  test('TC2: Password blank in Login @ui @functional @regression', async ({ page }) => {
    await loginPage.clickAtLoginButton();
    await loginPage.usernameInput.waitFor({ state: 'visible', timeout: 10000 });
    
    await loginPage.passwordInput.click();
    await loginPage.usernameInput.fill('testuser');
    await loginPage.clickAtLoginSubmitButton();
    
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('TC3: Login button is enabled @ui @functional @regression @smoke', async () => {
    await loginPage.clickAtLoginButton();
        
    await expect(loginPage.loginSubmitButton).toBeEnabled();
  });
});
