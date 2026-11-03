const { test } = require('@playwright/test');
const { promises } = require('node:dns');


test('child window handle', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    const userName = page.locator("#username");
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents']");

   const [newPage] = await Promise.all([

    context.waitForEvent('page'),
    documentLink.click(),
    ]);

    const text =await newPage.locator('.red').first().textContent();
    console.log(text);

   const finalText = text.split("@")[1].split(" ")[0];

    
    console.log(finalText);

    await userName.fill(finalText);
    await page.pause();
    console.log( await userName.inputValue());

})