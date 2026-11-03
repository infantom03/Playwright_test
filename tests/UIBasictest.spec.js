const { test, expect } = require('@playwright/test');

test('browser context Playwright test', async ({ browser }) => { //fictures {browser, page, context,}
    const context = await browser.newContext();   //use to open the brower in incognito mood
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userName = page.locator("#username")
    const password = page.locator("#password")
    const signbutton = page.locator("[id='signInBtn']");
    const cardTitle =  page.locator(".card-body a");

    await userName.fill("rahulshettyacademy");
    await password.fill("Learning@830$3mK2");
    await signbutton.click();
    //console.log(await page.locator("[style*='block']").textContent());
   // await expect(page.locator("[style*='block']")).toContainText('Incorrect');
    console.log(await cardTitle.nth(1).textContent());
    console.log(await cardTitle.first().textContent());
    console.log(await cardTitle.last().textContent());
    const alltitle = await cardTitle.allTextContents();
    console.log(alltitle);
})

test("page playwright test", async ({ page }) => {
    await page.goto("https://www.facebook.com/login/");
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle("Facebook");
})