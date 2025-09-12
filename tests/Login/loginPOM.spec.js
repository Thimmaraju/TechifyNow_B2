import { test, expect } from '@playwright/test';

import { loginpage } from "../../pages/loginpage.po"

import data from "../../testData/login.json"

let page
let login

test.describe("verify Login functionality", () => {


    test.beforeEach(async ({ browser }) => {

        page = await browser.newPage()

        login = new loginpage(page)

        await login.LaunchUrl()


    })

    test(`Verify Login with Valid Credentials `, async () => {

        await login.loginWithCreds(data.Username, data.Password)
        await login.loginSuccess()
    })

    test(`Verify Login with Valid username and Invalid Password `, async () => {

        await login.loginWithCreds(data.Username, data.wrongpassword)
        await login.loginError()

    })

    test(`Verify Login with Invalid username and Valid Password `, async () => {

        await login.loginWithCreds(data.wrongusername, data.Password)
        await login.loginError()


    })

    test(`Verify Login with Invalid username and Invalid Password `, async () => {


        await login.loginWithCreds(data.wrongusername, data.wrongpassword)
        await login.loginError()
    })

})