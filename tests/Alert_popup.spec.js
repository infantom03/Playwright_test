const { test, expect } = require('@playwright/test')

test("Test the popup and alert", async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/")
    await page.pause();
    await page.locator("#confirmbtn").click();
    await page.on('dialog', dialog => dialog.accept());   // To handle the popup and alert
   // await page.locator('dialog',dialog => dialog.dismiss());
    await page.pause();
})