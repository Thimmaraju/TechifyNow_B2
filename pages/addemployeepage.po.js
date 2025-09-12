const { expect } = require("@playwright/test")


exports.addemployeePage = class addemployeePage{

    constructor(page){

        this.page = page
        this.addemployeesubmenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.locator('//input[@name="firstName"]')
        this.lastnameInput = page.locator('//input[@name="lastName"]')
        this.saveBtn = page.locator('//button[@type="submit"]')
        this.personalDetailsHeader = page.locator("//h6[text()='Personal Details']")
      
    }

    async navigateAddEmployeePage(){

        await this.addemployeesubmenu.click()
    }

    async createEmployee(firstName, lastName){

        await this.firstnameInput.fill(firstName)
        await this.lastnameInput.fill(lastName)
        await this.saveBtn.click()
    }

    async empCreateSuccess(){

     await expect(this.personalDetailsHeader).toBeVisible({timeout:40000})
    }

   
}