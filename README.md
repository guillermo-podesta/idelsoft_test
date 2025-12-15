# 📋 BookCart Test Suite

## Overview

This project contains **14 automated test cases** for the BookCart application.

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
│       └── api-mocks.ts           # API mocking setup
├── .github/
│   └── workflows/
│       └── playwright-tests.yml   # CI/CD pipeline
├── playwright.config.ts           # Playwright configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies & scripts
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
- `zod` - TypeScript-first schema validation library
- `dotenv` - Environment variable management

### 4. Configure Environment Variables

Create a `.env` file in the project root (use `.env.example` as reference):

```bash
# BookCart Application URL
BOOKCART_APP_URL=https://bookcart.azurewebsites.net

# Test User Credentials
BOOKCART_TEST_USER_EMAIL=testuser@example.com
BOOKCART_TEST_USER_PASSWORD=TestPassword123

# Test Environment
TEST_ENVIRONMENT=production
```

**Note:** The `.env` file is gitignored. See `.env.example` for the template.

### 5. Install Playwright Browsers
```bash
npx playwright install
```

Or install only Chromium (faster):
```bash
npx playwright install chromium
```

### 6. Verify Installation
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

