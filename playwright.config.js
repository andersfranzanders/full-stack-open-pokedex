import { defineConfig } from '@playwright/test';
export default defineConfig({
  webServer: {
    command: 'npm start',
    url: 'http://127.0.0.1:8080',
    timeout: 5 * 1000,
    reuseExistingServer: true,
  },
  use: {
    baseURL: 'http://localhost:8080/',
    browserName: 'chromium', // Default browser to use
  },
});