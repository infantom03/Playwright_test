const { test, expect } = require('@playwright/test');
const { time } = require('node:console');


1. /*step level wait
2. global level wait using the (config file)
3. Test level wait */ 


test("Playwright special locator ", async ({ page }) => {
    const slowExpect = expect.configure({timeout:10000});
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Student").click();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("Hello@123");
    await page.getByRole("button",{name:'Submit'}).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();

    //in config file we have given the time in the expect function
    await slowExpect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({timeout:10000});

    await page.getByRole("link",{name: "Shop"}).click();
    await page.locator("app-card").filter({hasText:"Nokia Edge"}).getByRole("button").click();


})