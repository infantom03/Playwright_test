const { PageObjectManager } = require('../../pageobject/PageObjectManager');
const { Before, After, AfterStep, Status } = require('@cucumber/cucumber');
const playwright = require('@playwright/test');
const path = require('node:path');

//setDefaultTimeout(60 * 1000);

Before(async function(){
    //Below 3 line is required becaseu by default page will not recoganize we have to explicity tell the page that is the 3 line
        const browser =await playwright.chromium.launch({
          headless: false
        });

        const context =await browser.newContext();
        this.page =await context.newPage()
        this.poManager = new PageObjectManager(this.page);
});

// BeforeStep({ tags: '@foo' }, function () {
//    console.log("Before every step");
// })

AfterStep(async function ({ result }) {
  
  if (result.status === Status.FAILED) {
    await this.page.screenshot({path: "screenshot1.png"});
  }
})

After(function(){
    console.log("End")
})