const { test, expect } = require('@playwright/test');

test.describe('Verify PIM calls Spying', () => {
  test('Spying class example', async ({ page }) => {
    // Set up wait-for-response promises for each endpoint
    const getAnniversaryPromise = page.waitForResponse(request =>
      request.url().includes('/api/v2/buzz/anniversaries') &&
      request.request().method() === 'GET'
    );
   

    // Navigate to the app and perform login
    await page.goto('https://opensource-demo.orangehrmlive.com');
    await page.fill('input[name="username"]', 'Admin');
    await page.fill('input[name="password"]', 'admin123');
    await page.click('button[type="submit"]');

   // Verify the main menu item is visible
    await expect(page.locator('a.oxd-main-menu-item.active')).toBeVisible();

    // Navigate to the PIM module
    await page.click('//a[@href="/web/index.php/buzz/viewBuzz"]');
  
    await page.waitForTimeout(1000)

    
    // Wait for and verify the responses
    const ann = await getAnniversaryPromise;
    expect(ann.status()).toBe(200);
    
  });
});
