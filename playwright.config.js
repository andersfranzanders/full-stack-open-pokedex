const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './e2e-tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  webServer: {
    command: 'npm start',
    url: 'http://127.0.0.1:8080',
    timeout: 5 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:8080/',
    headless: true,
    browserName: 'chromium',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    } 
  ]
});