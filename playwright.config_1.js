// @ts-check
import { defineConfig, devices } from '@playwright/test';



/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  retries : 1,                  // Retry the test case if get failed it will try once 
  workers : 2,            // Parallel execution defalue 5 worker will open 
  timeout: 10 * 5000,

  expect: {
    timeout: 10000,
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
    trace : 'on',//only-on-failure'
    //...devices ['iPhone 15 Pro Max']              -> open the application in the mobile device level
    //ignoreHTTPSErrors : true                       -> to ignore the SSL certificate error message use this
    //permissions: ['geolocation']                  -> to handle the allow location popup in the browser level 
    //video: 'retain-on-failure'                      -> only when the test failes it will record the execution           
  },

});



