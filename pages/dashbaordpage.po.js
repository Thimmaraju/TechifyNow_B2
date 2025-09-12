import { expect } from "@playwright/test"


exports.dashboardPage = class dashboardPage{

    constructor(page){

        this.page = page

        this.PIMMenu = page.locator('//a[@href="/web/index.php/pim/viewPimModule"]')
      
    }

    async navigatePIM(){

        await this.PIMMenu.click()
    }
}