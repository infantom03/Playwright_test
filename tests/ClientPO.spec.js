//Author: Infantom
const { test , expect} = require('@playwright/test')
const {PageObjectManager } = require('../pageobject/PageObjectManager.js')
const {customtest} =  require('../utils/Fixture.js')
const {TestData} =  require('../utils/test-base.js')
//Json -> String ->Js object
const dataset = JSON.parse(JSON.stringify(require("../utils/ClientPOTestData.json")));

for(const data of dataset)
{
test(`@Web Client App test ${data.productName}`, async ({ page }) => 
{
    const poManager = new PageObjectManager(page);

    // const user = "infantom.sabadotechnologies@gmail.com"
    // const pass = "Hello@123"
    // const productName = "iphone 13 pro";
   

    //login page
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(data.userName, data.passWord);

    //Dashboard page
    const dashboardpage = poManager.getDashBoardPage();
    await dashboardpage.searchProduct(data.productName)
    await dashboardpage.navigateToCart();

    //cart page
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyporudctisDisplay(data.productName);
    await cartPage.checkoutFlow();

    const ordersReviewPage = poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
    await dashboardpage.navigateToOrder();
    const ordersHistoryPage = poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});
}

//Using Fixture

TestData('@Web Client App test Using Fixter', async ({ page,  testDataForOrder}) =>  // @Web means it is completely web test "npx playwr test --grep @Web"
{
    const poManager = new PageObjectManager(page);
    //login page
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.userName, testDataForOrder.passWord);

    //Dashboard page
    const dashboardpage = poManager.getDashBoardPage();
    await dashboardpage.searchProduct(testDataForOrder.productName)
    await dashboardpage.navigateToCart();

    //cart page
    const cartPage = poManager.getCartPage();
    await cartPage.VerifyporudctisDisplay(testDataForOrder.productName);
    await cartPage.checkoutFlow();
});