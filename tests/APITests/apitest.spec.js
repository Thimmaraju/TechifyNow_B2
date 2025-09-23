const { test, expect } = require('@playwright/test');

test('Reqres post API', async ({ request }) => {

    const AddUser = await request.post("https://reqres.in/api/users", {
        headers: {
            "x-api-key": "reqres-free-v1",
        },
        data: {
            "name": "Raju",
            "job": "Trainer"
        }
    })

    console.log(await AddUser.json())
})



test('Orange HRM Get  API', async ({ request }) => {

    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/subunits'

    const headerspart = {

        "cookie": process.env.COOKIVALUE
    }

    const sububits = await request.get(url, { headers: headerspart })

    expect(sububits.ok()).toBeTruthy();
    expect(sububits.status()).toBe(200);
    console.log(await sububits.json())


})


test('Orange HRM POST  API', async ({ request }) => {

    const url = 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees'

    const headerspart = {

        "cookie": process.env.Raju

    }

    let randomtext = (Math.random() + 1).toString(36).substring(7); 

    console.log(randomtext)
    addempdata.employeeId = randomtext


    const createEmployee = await request.post(url, {
        headers: headerspart, 
        data: addempdata
    })

    //expect(createEmployee.ok()).toBeTruthy();
     expect(createEmployee.status()).toBe(401)
    console.log(await createEmployee.json())


})