import { test, expect } from '@playwright/test';

const credentials = ["Admin", "admin123"]
test('Verify User can Create Employee', async ({page}) => {

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(credentials[0]);
  await page.getByRole('textbox', { name: 'Password' }).fill(credentials[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();

  await page.waitForTimeout(4000)

  await page.screenshot({ path:'tests/screenshots/'+Date.now()+'Leavepage.png'})

  await page.locator('(//input[@placeholder="yyyy-dd-mm"])[1]').fill('2025-19-09')

})