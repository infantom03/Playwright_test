const { test , expect} = require('@playwright/test')
const {PageObjectManager } = require('../pageobject/PageObjectManager.js')

test('New test', async ({ page }) => 
{
    const poManager = new PageObjectManager(page);

    const user = "infantom.sabadotechnologies@gmail.com"
    const pass = "Hello@123"
    const productName = "iphone 13 pro";
   

    //login page
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(user,pass);

    //Dashboard page
    const dashboardpage = poManager.getDashBoardPage();
    await dashboardpage.searchProduct(productName)
    await dashboardpage.navigateToCart();

    //cart page
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyporudctisDisplay(productName);
    await cartPage.checkoutFlow();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    await dashboardpage.navigateToOrder();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
})
