const { test, expect } = require('@playwright/test')


// test.describe.configure({ mode: 'parallel' });  // To Run this test in the parallel mode 
// test.describe.configure({ mode: 'serial'});     // TO Run this in the Serial mood if any test faile 

test("Screenshot & Visual comparision", async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await expect(page.locator("#displayed-text")).toBeVisible();

    //only the element sreenshot
    await page.locator("#displayed-text").screenshot({ path: 'partialScreen.png', timeout: 15000 });

    await page.locator("#hide-textbox").click();

    //Tack full page screenshot 
    await page.screenshot({ path: 'Screenshot.png' });

    await expect(page.locator("#displayed-text")).toBeHidden();


    //screenshot store compare the new screenshot with old one


})

test("Store the screenshot", async ({ page }) => {
    await page.goto("https://www.google.com/");
     await expect(page).toHaveScreenshot('Login.png');
   // expect(await page.screenshot()).toMatchSnapshot('Login.png')    // When you run this first time it will faile beacuse Login.png not there it will faile same time it will take the snap of login page when you run this in second time it will store the snap of it then it will compare the two screenshot.
})