// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  timeout: 10 * 5000,

  expect: {
    timeout: 5000,
  },
  reporter: [
    ['html'],
    ['list']
  ],


  use: {
    actionTimeout: 10 * 1000,
    navigationTimeout: 30 * 1000,
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace : 'retain-on-failure'
  },

});



