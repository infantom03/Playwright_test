const { test, chromium, expect } = require('@playwright/test')


test("launch the browser", async ({ page }) => {
    // const brow = await chromium.launch();


    // Example of Getby Locator

    page.getByRole('button', { 'name': 'Login' });
    page.getByText('Add to Card', { expect: true }).click();


    // How to donwload the file

    await page.goto("https://www.httrack.com/");
    await page.getByText('download section').click();
    const downloadPromise = page.waitForEvent('download');
    await page.pause();
    await page.getByText('httrack_x64-3.50.5.exe').click();
    const download = await downloadPromise;
    await download.saveAs('downloads/file.pdf');


    // How to upload the file 

    await page.locator("#uploadFile").setInputFiles("test.pdf");
    await page.locator('#uploadFile').setInputFiles(["test.pdf", "dev.pdf"]);

    // How to handle the popup

    await page.on('dialog', dialog => dialog.accept());
    await page.on('dialog', dialog => dialog.message());

    // How to handle iframe

    const frame = page.frameLocator('#payment-frame');

    await frame.getByLabel('Card Number')
        .fill('123456789');


    // How to hover a element

    page.locator('#button').hover();

    // Keyboard action

    await page.keyboard.press('Enter');
    await page.keyboard.press('Control+A');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Escape');


    // How do verify title

    await expect(page.locator('#title')).toHaveTitle("/Dashboard");

    
    // How to verify URL

    await expect(page.locator('#title')).toHaveURL("/Dashboard");



})