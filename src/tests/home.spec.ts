import { test, expect } from '@playwright/test';
import { setupAPIMocks, resetMockDatabase } from '../fixtures/api-mocks';
import { HomePage } from '../pages/HomePage';

test.describe('Home Page Tests', () => {
  let homePage: HomePage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    
    resetMockDatabase();
    await setupAPIMocks(page);
    
    await homePage.goto();
    await page.locator('mat-card:has-text("Add to Cart")').first().waitFor({ state: 'visible', timeout: 20000 });
  });

  test('TC4: The books amount should be 5 in total @ui @functional @regression', async ({ page }) => {
    test.setTimeout(60000);
    
    const bookCardsLocator = page.locator('mat-card:has-text("Add to Cart")');
    const bookCount = await bookCardsLocator.count();
    
    expect(bookCount).toBe(5);
  });

  test('TC5: The books amount should not be 6 @ui @functional @regression', async ({ page }) => {
    test.setTimeout(60000);
    
    const bookCardsLocator = page.locator('mat-card:has-text("Add to Cart")');
    const bookCount = await bookCardsLocator.count();
    
    expect(bookCount).not.toBe(6);
  });

  test('TC6: Search for a valid book @ui @functional @regression @smoke', async ({ page }) => {
    test.setTimeout(60000);
    const searchResult = page.getByRole('option', { name: '1984' });
    
    await homePage.searchInput.fill('1984');
    
    await searchResult.waitFor({ state: 'visible', timeout: 10000 });
    await searchResult.click();
    
    const bookCardsLocator = page.locator('mat-card:has-text("Add to Cart")');
    const bookCount = await bookCardsLocator.count();
    
    expect(bookCount).toBe(1);
    expect(page.getByRole('link', { name: '1984' })).toBeVisible();
  });

  test('TC8: Validate each book price @ui @functional @regression', async ({ page }) => {
    await expect(page.getByRole('paragraph').filter({ hasText: '₹19.99' })).toBeVisible();
    await expect(page.getByRole('paragraph').filter({ hasText: '₹29.99' })).toBeVisible();
    await expect(page.getByRole('paragraph').filter({ hasText: '₹14.99' })).toBeVisible();
    await expect(page.getByRole('paragraph').filter({ hasText: '₹12.99' })).toBeVisible();
    await expect(page.getByRole('paragraph').filter({ hasText: '₹10.99' })).toBeVisible();
  });
});
