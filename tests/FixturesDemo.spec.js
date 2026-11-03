const { test, expect, request } = require('@playwright/test')
const { customtest } = require("./utils/Fixture.js")



customtest('Fixtures Demo', async ({ AuthenticatedPage, createOrder1 }) => {

    // Login to the application / Create order and verify it in order history

    await AuthenticatedPage.goto('https://rahulshettyacademy.com/client');
    await AuthenticatedPage.locator("button[routerlink*='myorders']").click();
    await AuthenticatedPage.locator('tbody').waitFor();
    await expect(AuthenticatedPage.getByText(createOrder1.orderId)).toBeVisible();

});