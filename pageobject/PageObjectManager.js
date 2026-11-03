const {LoginPage}  = require('../pageobject/LoginPage')
const { DashboardPage } = require('../pageobject/DashBoardPage')
const { CartPage } = require('./CartPage')
const {OrdersHistoryPage} = require('./OrdersHistoryPage');
const {OrdersReviewPage} = require('./OrdersReviewPage');

class PageObjectManager
{
    constructor(page)
    {
          this.page = page;
          this.loginPage = new LoginPage(this.page);
          this.dashboardpage = new DashboardPage(this.page)
          this.cartPage = new CartPage(this.page);
          this.ordersHistoryPage = new OrdersHistoryPage(this.page);
          this.ordersReviewPage = new OrdersReviewPage(this.page);

    }

    getLoginPage()
    {
        return this.loginPage;
    }

    getDashBoardPage()
    {
        return this.dashboardpage;
    }

    getCartPage()
    {
        return this.cartPage;
    }

    getOrdersHistoryPage()
    {
    return this.ordersHistoryPage;
    }

    getOrdersReviewPage()
    {   
    return this.ordersReviewPage;
    }
}

module.exports = {PageObjectManager};