import { test, expect } from '@playwright/test';

import logindata from "../../testData/login.json"
import addemployeedata from "../../testData/PIM/addemployee.json"

const credentials = ["Admin", "admin123"]
test('Verify User can Create Employee', async ({page}) => {

  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(credentials[0]);
  await page.getByRole('textbox', { name: 'Password' }).fill(credentials[1]);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(addemployeedata.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(addemployeedata.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
  await expect(page.getByRole('heading', { name: 'Personal Details' })).toBeVisible();
});

