import { test, expect } from '@playwright/test';

test('Verify Text Box DemoQA ', async ({ page }) => {

    await page.goto("https://demoqa.com/text-box")
    await page.locator('#userName').fill("Raju G")

    await page.locator('#userEmail').fill("rajutester2673@gmail.com")
    
    await page.locator('#currentAddress').fill("Bangalore")
    await page.locator('#permanentAddress').fill("Anantapur")

    await page.locator('#submit').click()
    
    await expect(page.locator("#name")).toBeVisible()
})