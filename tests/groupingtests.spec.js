const { test, expect } = require('@playwright/test');


    test.afterAll(() =>{

     console.log("All tests Are Executed")

    })

        test.beforeEach( () =>{

         console.log("test Execution Started")
    })

          test.afterEach( () =>{

         console.log("Test Execution completed ")
    })

    
    test.beforeAll(() =>{

     console.log("Executionn started")

    })

test.describe("Suite Name 1", () => {



    test("test case 1", () => {

        //test.slow() // timeout will tripled 45*3 - = 135 
        console.log("test case 1")

      

    })

    test("test case 2", () => {

        
        console.log("test case 2")
    })


    test("test case 3", () => {

        
        console.log("test case 3")
    })


})
test.describe("Group 2 ", () => {


    test("test case 4", () => {

        
        console.log("test case 4")
    })

    test("test case 5", () => {

        
        console.log("test case 5")
    })

    test("test case 6", () => {
      //test.fixme()
        
        console.log("test case 6")
    })

})

