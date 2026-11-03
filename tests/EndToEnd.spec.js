const { test, expect } = require('@playwright/test')


test('End to end testing ', async ({ browser }) => {
    //Browerser and Page handling 
    const context = await browser.newContext();
    const page = await context.newPage();

    //Basic details of the application and the element 
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const email = page.locator("#userEmail");
    const pass = page.locator("#userPassword");
    const signbutton = page.locator("[id='login']");
    
    const products = page.locator(".card-body");
    const emailval = "infantom.sabadotechnologies@gmail.com";
    
   
    
    const productName = "iphone 13 pro";

    await email.fill(emailval);
    await pass.fill("Hello@123");
    await signbutton.click();

    await page.waitForLoadState('networkidle');
    await products.first().waitFor();

    const items = await page.locator(".card-body b").allTextContents();
    console.log("All items product " + items);

    const counts = await products.count();

    // 1. Checking the product to select 

    for (let i = 0; i <= counts; i++) {
        if (await products.nth(i).locator("b").textContent() === productName) {
            await products.nth(i).locator("text= Add To Cart").click();
            break;
        }
    }

    // 2. Add to card process and validation 
    await page.locator("[routerlink*='cart']").click();
    await page.locator("div li").first().waitFor();
    const bool = await page.locator("h3:has-text('iphone 13 pro')").isVisible();
    expect(bool).toBeTruthy();

    await page.getByRole('button', {name: 'Checkout'}).click();
    await page.locator("[placeholder*='Country']").pressSequentially("ind");

    const dropdown = await page.locator("div .ta-results ");
    await dropdown.waitFor();
    const dropdownoption = await dropdown.locator("button").count();

    // 3. selecting the inida in the dropdown 

    for (let i = 0; i <= dropdownoption; i++) {
        const text = await dropdown.locator("button").nth(i).textContent();
        if (text === " India") {
            await dropdown.locator("button").nth(i).click();
            break;
        }
    }

    // 4. fill the card and CVV details
    const cardField = await page.locator(".field .text-validated");
    await cardField.clear();
    await cardField.fill("4542 9931 9292 2293");

    await page.locator(".ddl").first().selectOption("03");

    await page.locator(".ddl").nth(1).selectOption("10");
    await page.locator(".small .txt").first().fill("123456");
    await page.locator(".field .txt").nth(2).fill("Master card");

    expect(await page.locator(".user__name [type='text']").first()).toHaveText(emailval);

    //await page.locator(".action__submit").click();
    await page.locator("a:has-text('Place Order ')").click();
    //("h3:has-text('iphone 13 pro')")

    //5. Verifying after ordering the item 

    expect(await page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
    const orderID = await page.locator(".em-spacer-1 .ng-star-inserted").first().textContent();
    console.log(orderID);

    //6. Verify the orders page history

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();


    //7. selecting the ordered product view option 

    const orderRow = await page.locator("tbody tr");

    for (let i = 0; i < await orderRow.count(); i++) {
        const orderIDvaludes =await orderRow.nth(i).locator("th").textContent();
        if(orderID.includes(orderIDvaludes)){
             await orderRow.nth(i).locator("button").first().click();
             break;
        }
    }

    //8. verifying the product is coming in the last page
    const orderIDdetails = await page.locator(".col-text").first().textContent();
    expect(orderID.includes(orderIDdetails)).toBeTruthy();
    
    
    
    //await page.pause();




})