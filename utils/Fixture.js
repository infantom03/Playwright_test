const base = require('@playwright/test')
const { APIutils } = require('./APIutils.js');
const { request } = require('@playwright/test')


const loginPayload = { userEmail: "infantom.sabadotechnologies@gmail.com", userPassword: "Hello@123" };
const orderPayload = { orders: [{ country: "Cuba", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

exports.customtest = base.test.extend(
    {
        AuthenticatedPage: async ({ browser }, use) => 
        {
            const context = await browser.newContext();
            const page = await context.newPage();
            await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
            await page.locator("#userEmail").fill("infantom.sabadotechnologies@gmail.com");
            await page.locator("#userPassword").fill("Hello@123");
            await page.locator("[id='login']").click();
            await page.waitForLoadState('networkidle');
            await use(page);
        },

        createOrder1: async ({ }, use) => 
        {
            const apiContext = await request.newContext();
            const apiUtils = new APIutils(apiContext, loginPayload);
            const  response = await apiUtils.createOrder(orderPayload);
            await use(response);

        }
    }

)