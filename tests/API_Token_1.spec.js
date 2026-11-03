const { test, request, expect } = require('@playwright/test');
const { APIutils } = require('./utils/APIutils.js');
const loginPayload = { userEmail: "infantom.sabadotechnologies@gmail.com", userPassword: "Hello@123" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };
let responce;


test.beforeAll(async () => {

    //Store the token by hitting the login API and store the TOken in the responce

    const apiContext = await request.newContext();
    const apiUtils = new APIutils(apiContext, loginPayload);
    response = await apiUtils.createOrder(orderPayload);

})

test("@ API TEST PLACE THE ORDER", async ({ page }) => {

    //Use the stored Toekn here and bypass the login page 

    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, responce.token);
    //-----------------------------------------


    const email = "";
    const productName = 'ZARA COAT 3';
    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();


    const orderRow = await page.locator("tbody tr");

    for (let i = 0; i < await orderRow.count(); i++) {
        const orderIDvaludes = await orderRow.nth(i).locator("th").textContent();
        if (responce.orderID.includes(orderIDvaludes)) {
            await orderRow.nth(i).locator("button").first().click();
            break;
        }
    }

    const orderIDdetails = await page.locator(".col-text").first().textContent();
    await page.pause();
    expect(responce.orderID.includes(orderIDdetails)).toBeTruthy();
});