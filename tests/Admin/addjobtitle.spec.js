import { test, expect } from '@playwright/test';

//import jobtitledata from "../../testData/Admin/jobtitle.json"

const creds = {

  username: "Admin",
  password: "admin123"
}

const jobtitles = {

  title1: "CEO I",
  title2: "CFO I",
  title3: "SDETI",
  title4: "SDETII"
}

for (let jobtitle in jobtitles) {

  test(`Verify User can create Job title - ${jobtitle} `, async ({ page }) => {
    await page.goto('/web/index.php/auth/login');

    await page.getByRole('textbox', { name: 'Username' }).fill(creds.username);
    await page.getByRole('textbox', { name: 'Password' }).fill(creds.password);
    await page.getByRole('button', { name: 'Login' }).click();

    await page.getByRole('link', { name: 'Admin' }).click();
    await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
    await page.getByRole('menuitem', { name: 'Job Titles' }).click();
    await page.getByRole('button', { name: ' Add' }).click();
    await page.getByRole('textbox').nth(1).fill(jobtitles[jobtitle]);
    await page.getByRole('textbox', { name: 'Type description here' }).fill("company activities");
    await page.getByRole('textbox', { name: 'Add note' }).fill('Notes');
    await page.getByRole('button', { name: 'Save' }).click();
    await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible({ timeout: 40000 });

  });


}



test('Verify Error Message for Mandatory', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.locator("//span[text()='Required']")).toBeVisible()

});