// class A {

//     m1() {

//         console.log("This Is Method from Parent  class")
//     }

//     add(num1, num2) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num1 + num2)
//     }
// }


// class B extends A {

//     m1() {

//         console.log("This Is Method from clild  class")
//     }

//     add(num1, num2, num3) {

//         console.log(num1)
//         console.log(num2)
//         console.log(num3)
//         console.log(num1 + num2 + num3)
//     }
// }


// const obja = new A()

// obja.m1()  // Method Overrding 
// obja.add(2, 6, 9)  // Method Overloading 

//=====================================================================

//Prototyping 



class A {

    m1() {

        console.log("This Is Method from Parent  class")
    }

    add(num1, num2) {

        console.log(num1)
        console.log(num2)
        console.log(num1 + num2)
    }
}




A.prototype.m2 = function () {

    console.log("This Method is Outside of The class") 

    // this is prototyped method
}

A.prototype.stname = "Raju" // this varibale out side of the class - Prototyped Variable 

const a  = new A()

const b = new A()

a.m1()
a.add(3,8)

b.add(3,9)
b.m1()

console.log(a.stname)

console.log(b.stname)

a.m2()

b.m2()