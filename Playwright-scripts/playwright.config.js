import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  retries: process.env.CI ? 2 : 0,

  reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:8080',

    
  launchOptions: {
    slowMo: 500,
  },
  
    trace: 'on-first-retry',


  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});