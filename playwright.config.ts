import { defineConfig, devices } from '@playwright/test';
import os from "node:os";

export default defineConfig({
  testDir: './src/tests',
  
  fullyParallel: true,
  
  forbidOnly: !!process.env.CI,
  
  retries: process.env.CI ? 2 : 0,
  
  workers: os.cpus().length,
  
  reporter: [
    ['html', { outputFolder: 'playwright-report', open: 'never' }],
    ['json', { outputFile: 'test-results/results.json' }],
    ['junit', { outputFile: 'test-results/junit.xml' }],
    ['list']
  ],
  
  use: {
    baseURL: 'https://bookcart.azurewebsites.net',
    
    trace: 'on-first-retry',
    
    screenshot: 'only-on-failure',
    
    video: 'retain-on-failure',
    
    viewport: { width: 1280, height: 720 },
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment for cross-browser testing
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  timeout: 30000,
  expect: {
    timeout: 5000
  }
});

