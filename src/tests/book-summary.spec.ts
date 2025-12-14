import { test, expect } from '@playwright/test';
import { setupAPIMocks, resetMockDatabase } from '../fixtures/api-mocks';
import { HomePage } from '../pages/HomePage';
import { BookSummaryPage } from '../pages/BookSummaryPage';

test.describe('Book Summary Page Tests', () => {
  let homePage: HomePage;
  let bookSummaryPage: BookSummaryPage;

  test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    bookSummaryPage = new BookSummaryPage(page);
    
    resetMockDatabase();
    await setupAPIMocks(page);
    
    await homePage.goto();
    await page.locator('mat-card:has-text("Add to Cart")').first().waitFor({ state: 'visible', timeout: 20000 });
  });

  test('TC7: Validate book elements from summary page @ui @functional @regression', async () => {
    await homePage.clickAtBookCard("1984");
    
    await bookSummaryPage.bookTitle.waitFor({ state: 'visible', timeout: 10000 });
    
    expect(bookSummaryPage.bookTitle).toBeVisible();
    expect(bookSummaryPage.bookAuthor).toBeVisible();
    expect(bookSummaryPage.bookPrice).toBeVisible();
    expect(bookSummaryPage.bookCategory).toBeVisible();
    expect(bookSummaryPage.addToCartButton).toBeVisible();
  });

  test('TC9: Add book to cart from summary page @ui @functional @regression @integration @smoke', async ({ page }) => {
    await homePage.clickAtBookCard("1984");
    await bookSummaryPage.bookTitle.waitFor({ state: 'visible', timeout: 10000 });

    await bookSummaryPage.addToCartButton.click();

    await expect(page.getByText('One Item added to cart')).toBeVisible();
  });

  test('TC10: Validate that the summary page url is correct @ui @functional @regression @smoke', async ({ page, baseURL }) => {
    await homePage.clickAtBookCard("1984");
    
    await expect(page).toHaveURL(`${baseURL}/books/details/3`);
  });
});
