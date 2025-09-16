const { test, expect } = require('@playwright/test');

test('Working with Radio button - example', async ({ page }) => {

    await page.goto('https://register.rediff.com/register/register.php?FormName=user_details')

    //await page.locator('select[name^="DOB_Month"]').selectOption("04")

    //await page.locator('select[name^="DOB_Month"]').selectOption({index : 9})

    // await expect(page.locator('input[value="m"]')).toBeChecked()
    
    // await expect(page.locator('input[value="f"]')).not.toBeChecked()

    // await page.locator('input[value="f"]').check()

    // await expect(page.locator('input[value="m"]')).not.toBeChecked()
    // await expect(page.locator('input[value="f"]')).toBeChecked()

    // const isChecked = await page.locator('input[value="f"]').isChecked() // true / false

    // console.log(isChecked)

    
    const optionText = "JUL"

    const option = await page.locator(`//select[starts-with(@name,"DOB_Month")]/Option[text()=${optionText}]`)


    //true 

    //flase 

    if(option){

      console.log("Option is Present")
    }
    else{

      
      console.log("Option is not Present")
    }
    await page.waitForTimeout(5000)

})


test('Working with Radio button - example 2', async ({ page }) => {

    await page.goto('https://demo.guru99.com/test/radio.html')
    
    await page.locator('input[value="Option 2"]').check()

  //  await page.locator('input[value="Option 2"]').uncheck()

    await page.waitForTimeout(5000)

})