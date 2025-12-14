# API Mocking System

This directory contains the API mocking infrastructure for the BookCart test suite.

## Overview

Since the live BookCart API is not working reliably, we've implemented a comprehensive mocking system that intercepts API calls and returns mock data. This allows tests to run independently of the external API.

## Files

### `mock-data.ts`
Contains all mock data structures:
- **MOCK_BOOKS**: Array of 5 sample books with realistic data
- **MOCK_CATEGORIES**: List of book categories
- **MockDatabase**: In-memory database class that simulates backend state
- Helper functions for creating mock responses

### `api-mocks.ts`
Contains route handlers that intercept API calls:
- `setupAPIMocks(page)`: Main function to setup all API route interceptors
- `resetMockDatabase()`: Resets the mock database between tests

## How It Works

1. **Route Interception**: Playwright's `page.route()` intercepts HTTP requests to the API
2. **Mock Responses**: Intercepted requests return mock data instead of hitting the real API
3. **Stateful Mocking**: MockDatabase maintains state (users, carts) across requests within a test
4. **Test Isolation**: Database is reset before each test to ensure clean state

## Mocked Endpoints

### Books
- `GET /api/book` - Returns list of all books
- `GET /api/book/:id` - Returns specific book by ID
- `GET /api/book/categories` - Returns list of categories

### Users
- `POST /api/user` - Register new user
- `POST /api/login` - User login (returns mock JWT token)

### Shopping Cart
- `POST /api/shoppingcart/:userId` - Add item to cart
- `GET /api/shoppingcart/:userId` - Get cart items
- `DELETE /api/shoppingcart/:userId` - Clear cart

## Usage in Tests

All test files have been updated to automatically use mocks:

```typescript
import { setupAPIMocks, resetMockDatabase } from '../../fixtures/api-mocks';

test.beforeEach(async ({ page }) => {
  // Reset mock database before each test
  resetMockDatabase();
  
  // Setup API mocks for the page context
  await setupAPIMocks(page);
  
  // Now all API calls will use mock data
  // ...
});
```

## Mock Data Examples

### Sample Book
```json
{
  "bookId": 1,
  "title": "Harry Potter and the Philosopher's Stone",
  "author": "J.K. Rowling",
  "category": "Fantasy",
  "price": 19.99,
  "coverFileName": "harry-potter-1.jpg",
  "description": "The first book in the Harry Potter series"
}
```

### Sample Login Response
```json
{
  "token": "mock-jwt-token-username-1234567890",
  "userId": 1234,
  "username": "testuser",
  "firstName": "Test",
  "lastName": "User",
  "email": "testuser@test.com"
}
```

## Benefits

1. **Reliability**: Tests don't depend on external API availability
2. **Speed**: Mock responses are instant, no network latency
3. **Isolation**: Each test runs with clean, predictable data
4. **Control**: Full control over response data and error scenarios
5. **Offline**: Tests can run without internet connection

## Extending the Mocks

To add new mock endpoints:

1. Add mock data to `mock-data.ts` if needed
2. Add route handler in `api-mocks.ts` using `page.route()`
3. Tests will automatically use the new mock

Example:
```typescript
await page.route(`${baseURL}/new-endpoint`, async (route) => {
  await route.fulfill({
    status: 200,
    contentType: 'application/json',
    body: JSON.stringify({ data: 'mock data' })
  });
});
```

## Testing Error Scenarios

You can easily test error cases by modifying the mock handlers:

```typescript
// Test 404 error
await page.route(`${baseURL}/book/999999`, async (route) => {
  await route.fulfill({ status: 404 });
});

// Test authentication error
await page.route(`${baseURL}/login`, async (route) => {
  await route.fulfill({ 
    status: 401,
    body: JSON.stringify({ error: 'Invalid credentials' })
  });
});
```

## Notes

- Mock database state persists within a single test
- `resetMockDatabase()` must be called in `beforeEach` for test isolation
- For API tests, we use `page.request` instead of standalone `request` to enable route interception
- UI tests automatically benefit from API mocking since they use the same page context

## Switching Between Mock and Real API

To temporarily use the real API (if it becomes available):

1. Comment out the `setupAPIMocks(page)` call in test files
2. Tests will fall back to real API calls

Or create an environment variable:
```typescript
if (process.env.USE_MOCKS !== 'false') {
  await setupAPIMocks(page);
}
```
