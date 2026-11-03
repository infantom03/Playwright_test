const { expect } = require("@playwright/test");

class CartPage
{
    constructor(page)
    {
        this.page = page;
        this.checoutbtn = page.getByRole('button', { name: 'Checkout' });
        this.cartProduct = page.locator("div li").first();
        this. productText =  page.locator(".card-body b")
        this.cart = page.locator("[routerlink*='cart']")
        this.ordersbtn = page.locator("button[routerlink*='myorders']")

    }

    async VerifyporudctisDisplay(productName)
    {
        await this.cartProduct.waitFor();
        const bool =await this.getProductLocator(productName).isVisible();
        expect(bool).toBeTruthy();
    }

    getProductLocator(productName)
    {
        return  this.page.locator("h3:has-text('"+productName+"')");
    }

   async checkoutFlow()
    {
        await this.checoutbtn.click();
    }
}

module.exports = {CartPage};