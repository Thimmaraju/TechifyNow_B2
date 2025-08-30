
//  Encapsulation 

// Inheritance 

// Polymorphism 
// Method overrding 
//Method Overloading 

// Prototyping 



class employee {


    empdetails(fname, lname, place) {


        this.Empfirstname = fname

        this.Emplastname = lname

        this.EmpPlace = place  // setter 
    }


    displayempdetails() {

        console.log(this.Empfirstname, this.Emplastname, this.EmpPlace)  // getter 
    }

}

const emp1 = new employee()

emp1.empdetails("Akhil", "T", "Hyd")

emp1.displayempdetails()

// Encapsulation  - Binding the data between the methods in a class 

// Inheritance 

//  single Inheritance 
//  multilevel Inheritance
//  multiple Inheritance
//  Hirachical Inheritance
//  Hybrid Inheritance


class A {


    m1() {

        console.log("This is a M1 Method")
    }

    m2() {

        console.log("This is a M2 Method")
    }

    m3() {

        console.log("This is a M3 Method")
    }

}


class B extends A {


    m4() {

        console.log("This is a M4 Method")
    }

    m5() {

        console.log("This is a M5 Method")
    }

    m6() {

        console.log("This is a M6 Method")
    }

}


const obj = new B()

obj.m1()  // A
obj.m5()   // B