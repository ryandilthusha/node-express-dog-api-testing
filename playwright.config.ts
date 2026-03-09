import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for API and E2E tests
 * See https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  
  /* Test timeout */
  timeout: 30000,
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,
  
  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,
  
  /* Reporter to use */
  reporter: 'html',
  
  /* Shared settings for all the projects below */
  use: {
    /* Base URL for API tests */
    baseURL: 'http://localhost:5000',
    
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
  },

  /* Configure projects for different test types */
  projects: [
    {
      name: 'API Tests',
      testMatch: /.*\.api\.test\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
    
    {
      name: 'E2E Tests',
      testMatch: /.*\.e2e\.test\.ts/,
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  /* 
   * Web Servers Configuration - OPTIONAL
   * If servers are already running, Playwright will use them (reuseExistingServer: true)
   * For UI mode, start servers manually before running: npm run test:ui
   * - Backend API: cd server && npm start
   * - Frontend Vite: npm run dev
   */
  // Uncomment to auto-start servers (can cause UI mode to hang)
  /*
  webServer: [
    {
      command: 'cd server && npm start',
      url: 'http://localhost:5000/api/health',
      reuseExistingServer: true,
      timeout: 30 * 1000,
    },
    {
      command: 'npm run dev',
      url: 'http://localhost:5173',
      reuseExistingServer: true,
      timeout: 30 * 1000,
    },
  ],
  */
});
