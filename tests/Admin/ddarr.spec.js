const { test, expect } = require('@playwright/test');

test.describe('Admin DDARR Tests', () => {

    const arr = ["CEO 1", "CXO", "CFO"]

    for (let jobtitle of arr) {

        test(`Verify User can create Job title - ${jobtitle} `, async ({ page }) => {
            await page.goto('/web/index.php/auth/login');

            await page.getByRole('textbox', { name: 'Username' }).fill("Admin");
            await page.getByRole('textbox', { name: 'Password' }).fill("admin");
            await page.getByRole('button', { name: 'Login' }).click();

            await page.getByRole('link', { name: 'Admin' }).click();
            await page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i').click();
            await page.getByRole('menuitem', { name: 'Job Titles' }).click();
            await page.getByRole('button', { name: ' Add' }).click();
            await page.getByRole('textbox').nth(1).fill(jobtitle);
            await page.getByRole('textbox', { name: 'Type description here' }).fill("company activities");
            await page.getByRole('textbox', { name: 'Add note' }).fill('Notes');
            await page.getByRole('button', { name: 'Save' }).click();
            await expect(page.getByRole('heading', { name: 'Job Titles' })).toBeVisible({ timeout: 40000 });

        });

    }


});