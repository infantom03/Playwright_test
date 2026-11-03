const { test, expect } = require('@playwright/test')


test('End to end testing ', async ({ browser }) => {
    //Browerser and Page handling 
    const context = await browser.newContext();
    const page = await context.newPage();

    //Basic details of the application and the element 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const email = page.getByPlaceholder("email@example.com");
    const pass = page.getByPlaceholder("enter your passsword");
    const signbutton = page.getByRole("button", { name: "Login" });

    const products = page.locator(".card-body");
    const emailval = "infantom.sabadotechnologies@gmail.com";
    const productName = "iphone 13 pro";

    // Action start from
    await email.fill(emailval);
    await pass.fill("Hello@123");
    await signbutton.click();
    await page.waitForLoadState('networkidle');
    await products.first().waitFor();

    // 1. Checking the product to select 
    await page.locator(".card-body").filter({ hasText: "ZARA COAT 3" }).getByRole("button",{name:" Add to Cart"}).click();

    // 2. Add to card process and validation 
    page.getByRole("listitem").getByRole("button", { name: "Cart" }).click();
    await page.locator("div li").first().waitFor();
    await expect(page.getByText("ZARA COAT 3")).toBeVisible();

    await page.getByRole("button", { name: "Checkout" }).click();
    await page.getByPlaceholder('Select Country').pressSequentially("ind");

    const dropdown = await page.locator("div .ta-results ");
    await dropdown.waitFor();

    // 3. selecting the inida in the dropdown 

    await page.getByRole("button", { name: "India" }).nth(1).click();
    await page.getByText("PLACE ORDER").click();
    //("h3:has-text('iphone 13 pro')")
})