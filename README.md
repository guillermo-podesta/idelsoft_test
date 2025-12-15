# 📋 BookCart Test Suite

## Overview

This project contains **14 automated test cases** for the BookCart application, following the test plan specified in `Test cases for book site - Hoja 1.csv`.

---

## 🎯 Test Cases

All tests are organized in: `src/tests/`

| ID | Test Case | Type | Tags | File |
|----|-----------|------|------|------|
| TC1 | Username blank in Login | UI, Functional, Regression | `@ui @functional @regression` | login.spec.ts |
| TC2 | Password blank in Login | UI, Functional, Regression | `@ui @functional @regression` | login.spec.ts |
| TC3 | Login button is enabled | UI, Functional, Regression | `@ui @functional @regression @smoke` | login.spec.ts |
| TC4 | Books amount = 5 | UI, Functional, Regression | `@ui @functional @regression` | home.spec.ts |
| TC5 | Books amount ≠ 6 | UI, Functional, Regression | `@ui @functional @regression` | home.spec.ts |
| TC6 | Search for valid book | UI, Functional, Regression | `@ui @functional @regression @smoke` | home.spec.ts |
| TC7 | Validate book elements | UI, Functional, Regression | `@ui @functional @regression` | book-summary.spec.ts |
| TC8 | Validate book prices | UI, Functional, Regression | `@ui @functional @regression` | home.spec.ts |
| TC9 | Add book to cart | UI, Functional, Regression, Integration | `@ui @functional @regression @integration @smoke` | book-summary.spec.ts |
| TC10 | Validate URL | UI, Functional, Regression | `@ui @functional @regression @smoke` | book-summary.spec.ts |
| TC11 | api/book returns 500 | API | `@api` | api.spec.ts |
| TC12 | api/login returns 401 | API | `@api` | api.spec.ts |
| TC13 | GetCategoriesList API | API | `@api @smoke` | api.spec.ts |
| TC14 | Create user API | API | `@api @smoke` | api.spec.ts |

---

## 🚀 Running Tests

### Run All Tests:
```bash
npm test
# or
npx playwright test
```

### Run Tests by Tag:
```bash
# Run all UI tests (10 tests)
npm run test:ui

# Run all API tests (4 tests)
npm run test:api

# Run smoke tests only (6 tests - quick validation)
npm run test:smoke

# Run regression tests (10 tests)
npm run test:regression

# Run functional tests (11 tests)
npm run test:functional

# Run integration tests (1 test)
npm run test:integration
```

### Run Specific Test File:
```bash
npx playwright test src/tests/login.spec.ts
npx playwright test src/tests/api.spec.ts
npx playwright test src/tests/home.spec.ts
npx playwright test src/tests/book-summary.spec.ts
```

### Run Specific Test by Name:
```bash
# By test case ID
npx playwright test -g "TC1"
npx playwright test -g "TC13"

# Run multiple specific tests
npx playwright test -g "TC1|TC3|TC6"
```

### Development & Debugging:
```bash
# Run with UI Mode (visual test runner)
npx playwright test --ui

# Run in headed mode (see browser)
npm run test:headed

# Debug mode (step through tests)
npm run test:debug

# Run specific test in debug mode
npx playwright test --debug -g "TC1"
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
├── src/
│   ├── tests/                     # Test files
│   │   ├── login.spec.ts          # TC1-TC3: Login tests
│   │   ├── home.spec.ts           # TC4-TC6, TC8: Home page tests
│   │   ├── book-summary.spec.ts   # TC7, TC9-TC10: Book detail tests
│   │   └── api.spec.ts            # TC11-TC14: API tests
│   ├── pages/                     # Page Object Model
│   │   ├── BasePage.ts            # Base class for all pages
│   │   ├── HomePage.ts            # Home page objects
│   │   ├── LoginPage.ts           # Login modal objects
│   │   └── BookSummaryPage.ts     # Book detail page objects
│   └── fixtures/
│       ├── mock-data.ts           # Mock book & category data
│       ├── api-mocks.ts           # API mocking setup
│       └── README.md              # Mocking documentation
├── .github/
│   └── workflows/
│       └── playwright-tests.yml   # CI/CD pipeline
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies & scripts
├── Test cases for book site - Hoja 1.csv  # Test plan
└── README.md                      # This file
```

---

## ✅ Prerequisites & Installation

### 1. Requirements
- **Node.js** v18 or higher
- **npm** or **yarn**

### 2. Clone the Repository
```bash
git clone https://github.com/YOUR_USERNAME/idelsoft_test.git
cd idelsoft_test
```

### 3. Install Dependencies
```bash
npm install
```

This will install all required packages including:
- `@playwright/test` - Playwright testing framework
- `@estruyf/github-actions-reporter` - GitHub Actions reporter for CI/CD
- `typescript` - TypeScript compiler
- `@types/node` - Node.js type definitions

### 4. Install Playwright Browsers
```bash
npx playwright install
```

Or install only Chromium (faster):
```bash
npx playwright install chromium
```

### 5. Verify Installation
Run the test suite to ensure everything is set up correctly:
```bash
npm test
```

You should see output like:
```
Using GitHub Actions reporter
Running 14 tests using 10 workers
✓ 14 passed
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

- ✅ **14 comprehensive test cases** covering UI, Functional, and API
- ✅ **Organized test structure** - modular spec files by feature
- ✅ **Tag-based test execution** - run by `@ui`, `@api`, `@smoke`, etc.
- ✅ **Page Object Model** - maintainable and reusable page classes
- ✅ **API mocking** - reliable tests with mock data
- ✅ **TypeScript** - type-safe test code
- ✅ **CI/CD ready** - GitHub Actions workflow included
- ✅ **GitHub Actions Reporter** - enhanced test results in CI
- ✅ **Multiple reporters** - HTML, JSON, JUnit, List
- ✅ **Cross-browser support** - Chromium, Firefox, WebKit

---

## 📝 Notes

- Tests TC1-TC3, TC9-TC11 require the BookCart website to be accessible
- Tests TC4-TC8 use mocked data and are independent of the actual API
- All test cases match the specifications in `Test cases for book site - Hoja 1.csv`

---

## 🎯 Test Execution Summary

**Total Tests: 14**
- **UI Tests**: 10 (TC1-TC10)
  - Login Tests: 3 (TC1-TC3)
  - Home Page Tests: 4 (TC4-TC6, TC8)
  - Book Summary Tests: 3 (TC7, TC9-TC10)
- **API Tests**: 4 (TC11-TC14)
- **Smoke Tests**: 6 (TC3, TC6, TC9, TC10, TC13, TC14)
- **Integration Tests**: 1 (TC9)

### Quick Commands:

```bash
# Run all tests
npm test

# Quick smoke test (6 tests, ~8s)
npm run test:smoke

# Run UI tests only
npm run test:ui

# Run API tests only
npm run test:api

# View HTML report
npm run test:report
```

---

## 🔧 CI/CD Integration

### GitHub Actions Reporter

This project uses the `@estruyf/github-actions-reporter` package to provide enhanced test reporting in GitHub Actions:

**Features:**
- ✅ Beautiful formatted test results in GitHub Actions logs
- ✅ Expandable detail sections for failed tests
- ✅ Inline error annotations in PRs
- ✅ Quick test summary at the top of workflow runs

**Setup (already included):**
```json
{
  "devDependencies": {
    "@estruyf/github-actions-reporter": "^1.10.0"
  }
}
```

**Configuration** in `playwright.config.ts`:
```typescript
[
  "@estruyf/github-actions-reporter",
  {
    title: "Tests Results",
    useDetails: true,
    showError: true
  }
]
```

### Running in CI/CD

The GitHub Actions workflow (`.github/workflows/playwright-tests.yml`) automatically:
- Runs on pull requests to `main`
- Runs daily at 2 AM UTC (scheduled)
- Can be manually triggered
- Generates and uploads test reports as artifacts
- Shows formatted test results with the GitHub Actions reporter

---

## 🐛 Troubleshooting

### Missing Package Error

If you see:
```
Error: Cannot find module '@estruyf/github-actions-reporter'
```

**Solution:**
```bash
npm install --save-dev @estruyf/github-actions-reporter
```

### Browser Not Installed

If tests fail with browser errors:
```bash
npx playwright install
```

### TypeScript Errors

If you see TypeScript compilation errors:
```bash
npm install
npx tsc --noEmit
```

---

## 📚 Additional Resources

- [Playwright Documentation](https://playwright.dev)
- [GitHub Actions Reporter](https://github.com/estruyf/playwright-github-actions-reporter)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 👥 Contributing

1. Clone the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm test`
5. Commit and push
6. Open a pull request

---

## 📄 License

ISC
