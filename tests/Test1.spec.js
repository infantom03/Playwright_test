const { test, expect } = require('@playwright/test')

test('New test', async ({ page }) => {
    await page.goto("https://compendiumdev.co.uk/");
    const title = await page.title();
    console.log(title);
    await expect(page).toHaveTitle('Software Development, Testing and Marketing Consultancy');
    page.locator('.social-media-icons img').first().textContent();
   // const alltext = await page.locator('.social-media-icons img').allTextContents();
    //console.log(alltext);

    //Alter way 
    const element = await page.locator('.social-media-icons img')

    const count =await element.count();

    for(let i=0; i<count;i++){
       const alt = await element.nth(i).getAttribute('alt');

       console.log(alt);
    }
})