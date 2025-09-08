// What is callback function 
// Higher order function 
// closure function



// function JSclass(){

//     console.log("This is JS class")
// }


// function PYclass(){

//     console.log("This is Python class")
// }

// function CSharpclass(){

//     console.log("This is C# class")
// }


// function displaycurrentclass( callback){

//     console.log("Hey Hi")

//     callback()
// }

// displaycurrentclass(CSharpclass)

// displaycurrentclass(JSclass)

// displaycurrentclass(PYclass)

// A function passed to another function as an argument is called as Call Back function
//  HIgher order function : A main funtion which is accepting the callback as agument

// Closure function: It s callback function which will accept / access the data from  Higher order function.


// function printclassname(classname) {

//     console.log(`This class name is ${classname}`)
// }


// function displaycurrentclass(callback) {

//     let classname = "Python"
//     console.log("Hey Hi")

//     callback(classname)  // Closure function 
// }


// displaycurrentclass(printclassname)

// // Promises 

// const p = new Promise((resolve, reject) => {

//     let x = 7

//     if (x === 2) {
//         resolve("Raju")
//     }
//     else {
//         reject("Fail")
//     }
// })

// // p = {
// //     firstname: "Raju",
// //     lastname: "G"
// // }



// // p = "Fail"

// console.log(p)

// // Promise - Is an Object 

// //p.then( () => { })
// p.catch( (obj) => console.log(obj))

// .then 
// .catch 

//all playwright method will return a promise 

//await page.goto("URL") // Promise { somevalue }

// p = 

// p.catch((message) => console.log(message))



async function prinMessage(){

   let x =  await Promise.resolve("Jagdish")

   console.log(x)

}

prinMessage()

//Set 

// Map 

// Regualar 


//W3schools 