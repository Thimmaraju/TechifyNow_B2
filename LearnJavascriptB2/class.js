// class 

// constructor 

// this

// static 



//add(4,7)


class calculator {


    x = 10

    y = 20

    m1() {

        console.log("this is simple Method")
    }

    constructor(fistname, lastname) {

        console.log(fistname)

        console.log(lastname)
    }


    add(num1, num2) {

        console.log(num1 + num2)
    }

    substract(num1, num2) {

        console.log(num1 - num2)

    }


    multiply(num1, num2) {

        console.log(num1 * num2)
    }

    devide(num1, num2) {

        console.log(num1)

        console.log(num2)

        console.log(num1 / num2)
    }

    displayvalues() {

        console.log(this.x)

        console.log(this.y)

        this.add(4, 8)
    }

}


//class will have methods 

// class will have variables 


// //Instance / Objects 

//  const cal1 = new calculator("Raju", "G")  // creation object for a class

//  cal1.add(5,8)

// console.log(cal1.x )  // 10

// const cal2 = new calculator()

// cal2.devide(4,"Raju")  

// Typescript and Javascript

// constructor 

// its is method 
// it will automatically invoked when you create object of the class 

const cal3 = new calculator("Jagdish", "R")



// this 
//cal3.displayvalues()

// static 



class student {


    fname = "Raju"    // Non static varibale
    static lname = "G"  // static varibale 

    m1() {

        console.log("This is M1 Method")  // Non static method 
    }



    static m2() {

        console.log("This is M2 Method") // Static method 

        this.m4()
    }



    m3() {

        console.log("This is M3 Method")
    }


    static m4() {

        console.log("This is M4 Method")
    }

}

 const stu1 = new student()

//  stu1.m1() //

// const stu2 = new student()

// stu2.m1()

student.m2()

//student.m1()// this is not allowed 


//OOPS 

// Object Oriented Programming 


//  Encapsulation 

// Inheritance 

// Polymorphism 
   // Method overrding 
   //Method Overloading 

// Prototyping 

