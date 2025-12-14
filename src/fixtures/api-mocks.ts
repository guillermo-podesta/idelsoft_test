/**
 * API Mock Handlers for Playwright Tests
 * 
 * These mocks intercept API calls made by the browser and return mock data.
 * Used by UI tests (TC4-TC8) that need predictable book data.
 */

import { Page } from '@playwright/test';
import { MOCK_BOOKS, MOCK_CATEGORIES } from './mock-data';

/**
 * Setup API mocks for books and categories
 * Intercepts fetch/XHR requests made by the webpage
 */
export async function setupAPIMocks(page: Page) {
  // Mock GET /api/book//GetCategoriesList
  await page.route('**/api/book//GetCategoriesList', async (route) => {
    await route.fulfill({
      status: 200,
      contentType: 'application/json',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(MOCK_CATEGORIES)
    });
  });

  // Mock GET /api/book/* - Get all books or specific book by ID
  await page.route('**/api/book/*', async (route) => {
    const url = route.request().url();
    const method = route.request().method();
    
    if (method === 'GET') {
      // If URL ends with /api/book/, return all books
      if (url.endsWith('/api/book/')) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(MOCK_BOOKS)
        });
        return;
      }
      
      // Extract book ID from URL
      const parts = url.split('/');
      const lastPart = parts[parts.length - 1];
      const bookId = parseInt(lastPart || '0');
      
      // If bookId is 0 and wasn't actually "0", return all books
      if (bookId === 0 && lastPart !== '0') {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(MOCK_BOOKS)
        });
        return;
      }
      
      // Find specific book
      const book = MOCK_BOOKS.find(b => b.bookId === bookId);

      if (book) {
        await route.fulfill({
          status: 200,
          contentType: 'application/json',
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(book)
        });
      } else {
        await route.fulfill({
          status: 404,
          contentType: 'application/json',
          headers: {
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify({ error: 'Book not found' })
        });
      }
    } else {
      await route.fallback();
    }
  });
}

/**
 * Reset mock database between tests
 * Currently a no-op since we only mock static book data
 */
export function resetMockDatabase() {
  // No state to reset - books are static
}
