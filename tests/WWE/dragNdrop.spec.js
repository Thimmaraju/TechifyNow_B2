const { test, expect } = require('@playwright/test');


test('drag and drop- example13', async ({ page }) => {
    // Go to the page
    await page.goto('https://kitchen.applitools.com/ingredients/drag-and-drop');

      await page.locator("#menu-fried-chicken").dragTo(page.locator("#plate-items"))   

    //   const firstdraggedItem = await page.locator('#plate-fried-chicken').innerText()

    //   console.log(firstdraggedItem)

    // await expect(page.locator('#plate-fried-chicken')).toHaveText('Fried Chicken')

     await page.locator('#menu-hamburger').dragTo( page.locator('#plate-items'))

     await page.locator('#menu-ice-cream').dragTo( page.locator('#plate-items'))

     const textvalues = await page.locator('//ul[@id="plate-items"]/li').allInnerTexts() //array

     console.log(textvalues)

    // await page.waitForTimeout(5000)

    // const sourceFriedChicken = await page.locator('#menu-fried-chicken');
    // const sourceHamburger = await page.locator('#menu-hamburger');
    // const sourceIceCream = await page.locator('#menu-ice-cream');

    //   const targetPlateItems = await page.locator('#plate-items');

    // await sourceFriedChicken.dragTo(targetPlateItems);
    // await sourceHamburger.dragTo(targetPlateItems);
    // await sourceIceCream.dragTo(targetPlateItems);
    // // // await page.waitForTimeout(5000)

})

test('get all texts', async ({page}) =>{

    await page.goto("https://www.flipkart.com/")

   const menus = await page.locator('._1XjE3T>span').allTextContents()

   console.log(menus)
})