const {Given,  When , Then }  = require('@cucumber/cucumber');
const { PageObjectManager } = require('../../pageobject/PageObjectManager');
const { expect} = require('@playwright/test')
const playwright = require('@playwright/test')


Given('A login with Ecommerce Application with {string} and {string}',async function (userName, passWord) 
{
    const products = this.page.locator(".card-body")
    const loginPage = this.poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(userName, passWord);
});

When('Add {string} to Cart',{timeout:100*1000}, async function (productName) 
{
    this.dashboardpage = this.poManager.getDashBoardPage();
    await this.dashboardpage.searchProduct()
    await this.dashboardpage.navigateToCart();
});


Then('Verify {string} is displayed in the Cart',{timeout:100*1000},async function (productName) 
{
    const cartPage = this.poManager.getCartPage();
    await cartPage.VerifyporudctisDisplay(productName);
    await cartPage.checkoutFlow();
});

When('Enter valid details and place the order',async function () 
{
    const ordersReviewPage = this.poManager.getOrdersReviewPage();
    await ordersReviewPage.searchCountryAndSelect("ind","India");
    const orderId = await ordersReviewPage.SubmitAndGetOrderId();
    console.log(orderId);
});


Then('Verify order is precent in OrderHistory',async function () 
{
    await this.dashboardpage.navigateToOrder();
    const ordersHistoryPage = this.poManager.getOrdersHistoryPage();
    await ordersHistoryPage.searchOrderAndSelect(orderId);
    expect(orderId.includes(await ordersHistoryPage.getOrderId())).toBeTruthy();
});

Given ('A login with Ecommerce2 Application with {string} and {string}',async function(userName, passWord){

   await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const userNameField  = this.page.locator("#username")
    const passwordField  = this.page.locator("#password")
    const signbutton = this.page.locator("[id='signInBtn']");
    const cardTitle =  this.page.locator(".card-body a");

    await userNameField .fill(userName);
    await passwordField .fill(passWord);
    await signbutton.click();
});


Then('Verify error message is displayed',{timeout: 100*1000}, async function () {
    const errorMessage = this.page.locator("[style*='block']");
    await expect(errorMessage).toContainText("Incorrect");
    console.log(await errorMessage.textContent());
});
