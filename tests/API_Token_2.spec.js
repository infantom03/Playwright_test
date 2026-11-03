const { test } = require('@playwright/test')
let webcontext;

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    await page.locator("#userEmail").fill("infantom.sabadotechnologies@gmail.com");
    await page.locator("#userPassword").fill("Hello@123");
    await page.locator("[id='login']").click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webcontext = await browser.newContext({ storageState: 'state.json' });
})


test("@ API TEST PLACE THE ORDER", async () => {

    const page = await webcontext.newPage();

    await page.goto('https://rahulshettyacademy.com/client/');

    await page.waitForLoadState('networkidle');

    const items = page.locator('.card-body b');
    const productNames = await items.allInnerTexts();

    console.log(productNames);
});