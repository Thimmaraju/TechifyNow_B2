const { test, expect } = require('@playwright/test');

test.describe('Conditional Test Suite', () => {
    test('should run a basic test', async ({ page }) => {

        await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

        await page.locator('input[type="checkbox"]').check()

        await page.waitForTimeout(5000)

        const status_Of_Checkbox = await page.locator('input[type="checkbox"]').isChecked()

        console.log(status_Of_Checkbox)

        // true - if checkbox is cheked it will give you true 
        // false  - if checkbox is uncheked it will give you false 

        if (!status_Of_Checkbox) {
            console.log("When checkbox not checked i will check the checkbox")

            await page.locator('input[type="checkbox"]').check()
        }
    });


    test('should run based on browser name', async ({ page, browserName }) => {

        switch (browserName) {
            case "chromium":

                await page.goto("https://www.flipkart.com/")

                break;

            case "firefox":

                await page.goto("https://www.myntra.com/")

                break;

            case "webkit":

                await page.goto("https://www.snapdeal.com/")

                break;
        }


    });
});