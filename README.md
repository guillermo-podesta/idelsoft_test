# 📋 BookCart Test Suite

## Overview

This project contains **11 automated test cases** for the BookCart application, following the test plan specified in `Test cases for book site - Hoja 1.csv`.

---

## 🎯 Test Cases

All tests are located in: `tests/bookcart.spec.ts`

| ID | Test Case | Type | Uses Mocks |
|----|-----------|------|------------|
| TC1 | Username blank in Login | UI, Functional, Regression | No |
| TC2 | Password blank in Login | UI, Functional, Regression | No |
| TC3 | Login button is enabled | UI, Functional, Regression | No |
| TC4 | The books amount should be 5 in total | UI, Functional, Regression | ✅ Yes |
| TC5 | The books amount should not be 6 | UI, Functional, Regression | ✅ Yes |
| TC6 | Search for a valid book | UI, Functional, Regression | ✅ Yes |
| TC7 | Search for an invalid book | UI, Functional, Regression | ✅ Yes |
| TC8 | Validate each book price | UI, Functional, Regression | ✅ Yes |
| TC9 | Shopping cart is empty | UI, Functional, Regression | No |
| TC10 | Click at Continue Shopping button from Cart | UI, Functional, Regression | No |
| TC11 | api/book should return 200 | API | No |

---

## 🚀 Running Tests

### Run All Tests:
```bash
npx playwright test
```

### Run Specific Test:
```bash
# By test name
npx playwright test -g "TC1"
npx playwright test -g "TC4"

# Run only mocked tests (TC4-TC8)
npx playwright test -g "TC[4-8]"

# Run only login tests (TC1-TC3)
npx playwright test -g "TC[1-3]"
```

### Run with UI Mode (Visual):
```bash
npx playwright test --ui
```

### Run in Headed Mode (See Browser):
```bash
npx playwright test --headed
```

### Run Single Test File:
```bash
npx playwright test tests/bookcart.spec.ts
```

---

## 📊 Mocked Books

Tests TC4-TC8 use mocked book data for consistent, reliable testing:

| Book Title | Price |
|-----------|-------|
| Harry Potter and the Philosopher's Stone | ₹19.99 |
| The Lord of the Rings | ₹29.99 |
| 1984 | ₹14.99 |
| To Kill a Mockingbird | ₹12.99 |
| The Great Gatsby | ₹10.99 |

**Total Books: 5**

The mocking system is configured in:
- `fixtures/mock-data.ts` - Mock book data
- `fixtures/api-mocks.ts` - API mocking setup

---

## 🎭 Test Details

### TC1-TC3: Login Validation Tests
- Validate form field requirements
- Check button states
- No external dependencies

### TC4-TC8: Book Display & Search Tests
- **Uses MOCKED data** for reliability
- Tests book count, search, and prices
- Independent of BookCart API

### TC9-TC10: Shopping Cart Tests
- Empty cart validation
- Navigation flow testing
- Uses actual BookCart UI

### TC11: API Health Check
- Validates BookCart API endpoint
- Checks HTTP 200 response
- Direct API call (no UI)

---

## 📁 Project Structure

```
idelsoft_test/
├── tests/
│   └── bookcart.spec.ts          # All 11 test cases
├── fixtures/
│   ├── mock-data.ts               # Mocked book data
│   └── api-mocks.ts               # API mocking setup
├── pages/                         # Page Object Model classes
├── config/
│   └── api.config.ts              # API configuration
├── playwright.config.ts           # Playwright configuration
├── Test cases for book site - Hoja 1.csv  # Test plan source
└── README.md                      # This file
```

---

## ✅ Prerequisites

1. **Node.js** installed (v16 or higher)
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Install Playwright browsers:**
   ```bash
   npx playwright install
   ```

---

## 📈 Viewing Test Results

### HTML Report:
```bash
npx playwright show-report
```

### View Traces:
```bash
npx playwright show-trace test-results/[trace-file].zip
```

---

## 🔍 Test Configuration

- **Browser**: Chromium, Firefox, WebKit (all tested)
- **Timeouts**: 30s default, 60s for mocked tests
- **Retries**: 2 retries on failure
- **Parallel**: Tests run in parallel by default

Configuration file: `playwright.config.ts`

---

## ✨ Key Features

- ✅ **11 comprehensive test cases** covering UI, Functional, and API
- ✅ **Mocked data** for tests TC4-TC8 (reliable, fast)
- ✅ **Page Object Model** for maintainability
- ✅ **Clear test IDs** matching CSV test plan
- ✅ **Detailed logging** with console output
- ✅ **Cross-browser** support

---

## 📝 Notes

- Tests TC1-TC3, TC9-TC11 require the BookCart website to be accessible
- Tests TC4-TC8 use mocked data and are independent of the actual API
- All test cases match the specifications in `Test cases for book site - Hoja 1.csv`

---

## 🎯 Test Execution Summary

**Total Tests: 11**
- **Login Tests**: 3 (TC1-TC3)
- **Book Display Tests**: 5 (TC4-TC8) with mocks
- **Cart Tests**: 2 (TC9-TC10)
- **API Tests**: 1 (TC11)

Run them all with:
```bash
npx playwright test
```
