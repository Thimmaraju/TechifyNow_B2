const { browser, test, expect } = require('@playwright/test');


test("Check box Example", async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')


    const checked = await page.locator('//input[@type="checkbox"]').isChecked()

    // checked = false 

    console.log(checked)

    if (!checked) {

        await page.locator('//input[@type="checkbox"]').check()
    }

    await expect(page.locator('//input[@type="checkbox"]')).toBeChecked()

    await page.waitForTimeout(5000)

    await page.locator('//input[@type="checkbox"]').uncheck()

    await expect(page.locator('//input[@type="checkbox"]')).not.toBeChecked()

    await page.waitForTimeout(2000)
})


test("Check box Example -2 ",{tag : "@raju"}, async ({ page }) => {

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/')

   // const checkboxes = ["#checkBoxOption1", "#checkBoxOption2", "#checkBoxOption3"]

    //console.log(checkboxes)

    //    for (let checkbox of checkboxes){

    //        await page.locator(checkbox).check()
    //    }

    //    await page.waitForTimeout(20000)

    //    for (let checkbox of checkboxes){

    //        await page.locator(checkbox).uncheck()
    //    }


     const checkboxes = await page.$$("//div[@id='checkbox-example']/fieldset/label/input")

    for (let checkbox of checkboxes) {

        await checkbox.check()
    }

})


test("click on all matching elements ", async ({page}) =>{

    await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/')

    const buttons  = await page.$$('//div[@class="product-action"]/button')

      for (let button of buttons) {

        await button.click()
    }


    // cy.get(commonloctor).click({multiple :true})

})


test('Working with check box - example 3', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html');


    const checkBoxes = await page.$$('[type="checkbox"]'); // ["checkbox1", "checkbox2"]

    for (let checkbox of checkBoxes) {

        const isChecked = await checkbox.isChecked(); // false 

        // Check the checkbox if it's not already checked
        if (!isChecked) {
            await checkbox.check({ force: true });
        }
    }

    await page.waitForTimeout(5000)

})


// page.$$("xpath")

// saves all the Matching element to Array 