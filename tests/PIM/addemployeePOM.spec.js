import { test, expect } from '@playwright/test';

import { loginpage } from "../../pages/loginpage.po"
import { dashboardPage } from "../../pages/dashbaordpage.po"
import { addemployeePage } from "../../pages/addemployeepage.po"

import logindata from "../../testData/login.json"
import empdata from "../../testData/PIM/addemployee.json"

let page
let login
let dashboard
let emp

test.describe("verify Add Employee functionality", () => {


    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()

        login = new loginpage(page)
        dashboard = new dashboardPage(page)
        emp = new addemployeePage(page)

        await login.LaunchUrl()
        await login.loginWithCreds(logindata.Username, logindata.Password)
        await login.loginSuccess()
    })

    test(`Verify Add Employee `, async () => {

        await dashboard.navigatePIM()
        await emp.navigateAddEmployeePage()
        await emp.createEmployee(empdata.firstname, empdata.lastname)
        await emp.empCreateSuccess()
    })

})