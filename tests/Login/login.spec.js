import { test, expect } from '@playwright/test';

import data from "../../testData/login.json"

test.describe("verify Login functionality", () => {


  test.beforeEach(async ({page}) => {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  })

  test(`Verify Login with Valid Credentials `, async ({ page }) => {

    await page.locator('#app div').filter({ hasText: 'LoginUsername : AdminPassword' }).nth(1).click();
    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(process.env.APP_USERNAME);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(process.env.APP_PASSWORD);
    await page.getByRole('button', { name: 'Login' }).click();
    //await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  });


  //Nagative tests

  test('Verify Login with Valid Username and Invalid Password', async ({ page }) => {
    //Actions 

    //test.fail()

    await page.getByRole('textbox', { name: 'Username' }).click(); //30000
    await page.getByRole('textbox', { name: 'Username' }).fill(data.Username);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(data.wrongpassword);
    await page.getByRole('button', { name: 'Login' }).click();

    //assertion
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('Verify Login with InValid Username and valid Password', async ({ page }) => {

    await page.getByRole('textbox', { name: 'Username' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(data.wrongusername);
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(data.Password);
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });

  test('Verify Login with InValid Username and invalid Password', async ({ page }) => {

    //test.slow()
    const creds = {

      username: "trgjijtrn",
      password: "rjngjnerg"
    }
  
    await page.getByRole('textbox', { name: 'UsernameRaju' }).click();
    await page.getByRole('textbox', { name: 'Username' }).fill(creds.username);
    await page.waitForTimeout(4000)
    await page.getByRole('textbox', { name: 'Password' }).click();
    await page.getByRole('textbox', { name: 'Password' }).fill(creds.password);
    await page.waitForTimeout(4000)
    await page.getByRole('button', { name: 'Login' }).click();
    await expect(page.getByText('Invalid credentials')).toBeVisible();
  });
})

