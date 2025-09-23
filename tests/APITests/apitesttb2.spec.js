import { expect, test } from "@playwright/test";

let empid ;
// test("Verify List of users Get APi", async ({ request }) => {

//     const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=1&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC"

//     const headersinfo = {
//         'cookie': "orangehrm=popee4qrto895u40ajok8afcts"
//     }

//     const getAllEmployees = await request.get(url, { headers: headersinfo })

//     expect(getAllEmployees.ok()).toBeTruthy()

//     expect(getAllEmployees.status()).toBe(200)

//     const jsonresponse = await getAllEmployees.json()

//     console.log(jsonresponse)

// })

// test("Get request automation in reqres", async ({ request }) => {

//     const url = "https://reqres.in/api/users?page=2"
//     const headersinfo = {
//         "x-api-key": "reqres-free-v1"
//     }

//     const GetAllusers = await request.get(url, { headers: headersinfo })

//     expect(GetAllusers.ok()).toBeTruthy()

//     expect(GetAllusers.status()).toBe(200)

//     const jsonresponse = await GetAllusers.json()

//     console.log(jsonresponse)

//     expect(jsonresponse.page).toBe(2)

//     expect(jsonresponse.per_page).toBe(6)

//     expect(jsonresponse.total).toBe(12)


//     expect(jsonresponse.total_pages).toBe(2)

//     expect(jsonresponse.data[0].id).toBe(7)

//     expect(jsonresponse.data[0].email).toBe("michaelraju.lawson@reqres.in")


// })

test("Verify Creation of Employee", async ({ request }) => {

    const url = "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees"
    const headersinfo = {
        "cookie": process.env.APP_COOKIE,
        "referer": "https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee"
    }

    let ranmchars = (Math.random() + 1).toString(36).substring(7);
    const body = {
        "firstName": `Priyanka${ranmchars}`,
        "middleName": "",
        "lastName": `Pakala${ranmchars}`,
        "empPicture": null,
        "employeeId": `${ranmchars}`
    }

    const createEmployee = await request.post(url, { headers: headersinfo, data: body })


    expect(createEmployee.ok()).toBeTruthy()

    expect(createEmployee.status()).toBe(200)

    const jsonresponse = await createEmployee.json()

    console.log(jsonresponse)

    empid = jsonresponse.data.empNumber

    console.log(empid)
    

})


test("Verify Get Single Employee ", async ({ request }) => {

    const url = `https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees/${empid}/personal-details`
    const headersinfo = {
        "cookie": "orangehrm=popee4qrto895u40ajok8afcts",
    }

    const GetSingleEMP= await request.get(url, { headers: headersinfo})


    expect(GetSingleEMP.ok()).toBeTruthy()

    expect(GetSingleEMP.status()).toBe(200)

    const jsonresponse = await GetSingleEMP.json()

    console.log(jsonresponse)


})

