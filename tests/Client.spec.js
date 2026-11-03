const { test } = require('@playwright/test')

test('New test', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const email = page.locator("#userEmail");
    const pass = page.locator("#userPassword");
    const signbutton = page.locator("[id='login']");
    const items = page.locator(".card-body b");

    await email.fill("infantom.sabadotechnologies@gmail.com");
    await pass.fill("Hello@123");
    await signbutton.click();
    console.log(await items.first().textContent());

    const mulitems = await items.allInnerTexts();
    console.log(mulitems);

})

test.only('My own test', async ({ page }) => {
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login")

    const email = page.locator("#userEmail");
    const pass = page.locator("#userPassword");
    const signbutton = page.locator("[id='login']");
    const items = await page.locator('.card-body b');

    await email.fill("infantom.sabadotechnologies@gmail.com")
    await pass.fill("Hello@123")
    await signbutton.click();

    //    await items.first().textContent();
    //    console.log(await items.allTextContents());

    const count = await items.count();

    for (let i = 0; i < count; i++) {
        const item = await items.nth(i).textContent();
        console.log(item);
    }

})