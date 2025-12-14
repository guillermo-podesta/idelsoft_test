# 🚀 Upload Project to GitHub

## Step 1: Initialize Git Repository

Run these commands in your terminal:

```bash
cd /Users/guillermo.podesta/Workspace/idelsoft_test

# Initialize git repository
git init

# Configure git (if not already configured globally)
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

---

## Step 2: Add All Files to Git

```bash
# Add all files to staging area
git add .

# Check what will be committed
git status
```

**You should see:**
- ✅ `src/` folder with tests and pages
- ✅ `playwright.config.ts`
- ✅ `package.json`
- ✅ `tsconfig.json`
- ✅ `README.md`
- ✅ `.gitignore`

**You should NOT see:**
- ❌ `node_modules/` (ignored)
- ❌ `test-results/` (ignored)
- ❌ `playwright-report/` (ignored)

---

## Step 3: Create Initial Commit

```bash
git commit -m "Initial commit: Playwright test automation framework

- Added 14 test cases across 4 modules
- Implemented Page Object Model (POM)
- Added API mocking for UI tests
- Configured TypeScript and Playwright
- Tests: login, home, book-summary, and API tests"
```

---

## Step 4: Create GitHub Repository

### Option A: Using GitHub CLI (Recommended)

If you have GitHub CLI installed:

```bash
# Login to GitHub (if not already logged in)
gh auth login

# Create repository and push
gh repo create idelsoft_test --public --source=. --remote=origin --push

# Or for private repository:
# gh repo create idelsoft_test --private --source=. --remote=origin --push
```

### Option B: Using GitHub Website (Manual)

1. **Go to GitHub:** https://github.com/new

2. **Create Repository:**
   - Repository name: `idelsoft_test`
   - Description: `Playwright Test Automation Framework for BookCart`
   - Choose: Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (you already have them)
   - Click "Create repository"

3. **Connect and Push:**
   ```bash
   # Add GitHub remote (replace YOUR_USERNAME with your GitHub username)
   git remote add origin https://github.com/YOUR_USERNAME/idelsoft_test.git
   
   # Verify remote was added
   git remote -v
   
   # Push to GitHub
   git branch -M main
   git push -u origin main
   ```

---

## Step 5: Verify Upload

Visit your repository:
```
https://github.com/YOUR_USERNAME/idelsoft_test
```

You should see:
- ✅ All your files
- ✅ README.md displayed on home page
- ✅ Green checkmark (if you have GitHub Actions)
- ✅ Correct folder structure

---

## Quick Command Summary

```bash
# 1. Initialize git
git init

# 2. Add files
git add .

# 3. Commit
git commit -m "Initial commit: Playwright test automation framework"

# 4. Add remote (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/idelsoft_test.git

# 5. Push to GitHub
git branch -M main
git push -u origin main
```

---

## Troubleshooting

### Problem: Git not installed
```bash
# Install git (macOS)
brew install git

# Or download from: https://git-scm.com/downloads
```

### Problem: GitHub CLI not installed
```bash
# Install GitHub CLI (macOS)
brew install gh

# Or download from: https://cli.github.com/
```

### Problem: Authentication failed
```bash
# Use SSH instead
git remote set-url origin git@github.com:YOUR_USERNAME/idelsoft_test.git

# Or generate Personal Access Token
# Go to: https://github.com/settings/tokens
# Use token as password when pushing
```

### Problem: "Repository not found"
- Make sure you created the repository on GitHub first
- Check the repository URL is correct
- Verify you're logged into the correct GitHub account

---

## What Gets Uploaded

### ✅ Will be uploaded:
```
idelsoft_test/
├── src/
│   ├── fixtures/
│   ├── pages/
│   └── tests/
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

### ❌ Will NOT be uploaded (ignored by .gitignore):
```
node_modules/          ← Dependencies (too large)
test-results/          ← Test output
playwright-report/     ← HTML reports
playwright/.cache/     ← Playwright cache
.env                   ← Environment variables
*.log                  ← Log files
```

---

## After Uploading

### Clone on another machine:
```bash
git clone https://github.com/YOUR_USERNAME/idelsoft_test.git
cd idelsoft_test
npm install
npx playwright install
npm test
```

### Update README.md
Add GitHub-specific information:
- Installation instructions
- How to run tests
- CI/CD badges (if using GitHub Actions)

---

## Optional: Add GitHub Actions for CI/CD

Create `.github/workflows/playwright.yml`:

```yaml
name: Playwright Tests
on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]
jobs:
  test:
    timeout-minutes: 60
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/setup-node@v3
      with:
        node-version: 18
    - name: Install dependencies
      run: npm ci
    - name: Install Playwright Browsers
      run: npx playwright install --with-deps
    - name: Run Playwright tests
      run: npm test
    - uses: actions/upload-artifact@v3
      if: always()
      with:
        name: playwright-report
        path: playwright-report/
        retention-days: 30
```

---

## Need Help?

Run this command to get started:
```bash
cd /Users/guillermo.podesta/Workspace/idelsoft_test && git init && git add . && git status
```

Then I can help you with the next steps!
