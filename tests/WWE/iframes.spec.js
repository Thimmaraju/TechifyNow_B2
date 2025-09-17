const { test, expect } = require('@playwright/test');
test.describe('Automation - Working With Elements', () => {

    test('Working with Iframes',{tag : [ "@smoke", "@raju"]}, async ({ page }) => {

        await page.goto('https://jqueryui.com/checkboxradio/')

        //await page.locator('//label[@for="checkbox-1"]').click()
        
        await page.frameLocator('//iframe[@class="demo-frame"]').locator('label[for="checkbox-1"]').click()

        //await checkbox.click()
        await page.waitForTimeout(5000)

    })

     test("Nested Ifrmaes example ", async ({page}) =>{


        await page.goto('https://www.dezlearn.com/nested-iframes-example/')
        

        await page.frameLocator('#parent_iframe').frameLocator('#iframe1').locator('//button[@type="button"][@id="u_5_6"]').click()

    })


})