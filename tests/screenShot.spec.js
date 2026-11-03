const { test, expect } = require('@playwright/test')

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

test.only("Store the screenshot", async ({ page }) => {
    await page.goto("https://www.google.com/");
    expect(await page.screenshot()).toMatchSnapshot('Login.png')
})