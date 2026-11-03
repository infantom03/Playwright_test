class DashboardPage
{
    constructor(page)
    {
        this.page = page;
        this.products =  page.locator(".card-body");
        this. productText =  page.locator(".card-body b")
        this.cart = page.locator("[routerlink*='cart']")
        this.order = page.locator("button[routerlink*='myorders']")
    }

    async searchProduct(productName)
    {
        await this.products.first().waitFor({ state : 'visible'});
        const titles = await this.productText.allTextContents();
        console.log("All titles product " + titles);
        const counts = await this.products.count();

            for (let i = 0; i < counts; i++) 
            {
                  if (await this.products.nth(i).locator("b").textContent() === productName)
                    {
                        //Add to cart
                       await this.products.nth(i).locator("text= Add To Cart").click();
                       break;
                    }
            }

    }

   async navigateToCart()
    {
         await this.cart.click();
    }

    async navigateToOrder()
    {
        await this.order.click();
    }
}

module.exports = {DashboardPage};