const { test, expect } = require('@playwright/test')


/*
1. Static dropdown selection
2. Radio button Selection 
3. Checkbox selection */


test('Drop donw', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username")
    const password = page.locator("#password")
    const dropdown = page.locator("select.form-control");
    const checkbox = page.locator("//span[text()=' User']")
    const termbtn = page.locator("#terms");
    const documentLink = page.locator("[href*='documents']");

    await checkbox.click();                 // Radio button
    await page.locator("#okayBtn").click(); // Popup button
    console.log(await checkbox.isChecked());
    await expect(checkbox).toBeChecked();

    await dropdown.selectOption('Consultant');  // TO select the static dropdown use this selectOption

    await termbtn.click();
    await expect(termbtn).toBeChecked();
    await termbtn.uncheck();
    expect(await termbtn.isChecked()).toBeFalsy();

    await expect(documentLink).toHaveAttribute("class", "blinkingText");
    documentLink.click();
    await page.pause();

})