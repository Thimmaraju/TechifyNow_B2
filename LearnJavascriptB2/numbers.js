//coersion 


console.log(5 + 6 + 7 + "4" + 9 + 2 + 4 + 6) // 1849246

//converting number to string 

num = String(77)

console.log(typeof (num))

str = Number("20")

str2 = "98.9"

num2 = parseInt(str2)

console.log(num2)

num3 = parseFloat(str2)

console.log(num3)

console.log(2 ** 53)

//> 9007199254740992 

// num1 = 90071992547409938998981n  // Indicating Big Integer > 2^53

// num2 = 5n     // 9007199254740998

// n3 = n1+n2

// console.log(n3)


// num = 5.4  // 6

//number
console.log(Math.ceil(5.1))

console.log(Math.floor(5.8))

arr = [2, 34, 55, 22, 65, 98, 234, 1234, 65, 87]

x = Math.max(...arr)

console.log(x)

y = Math.min(2, 34, 55, 22, 65, 98, 234, 1234, 65, 87)

console.log(y)

console.log(Math.sqrt(64))

// 2^5  ==> 2*2*2*22

//      ==> 2**5

console.log(Math.pow(2, 6))

// // OOPS 

// class 
// constructor 
// static 
// this

// JS - OOPS 

// 1. Encapsulation 
// 2. Interitance 
// 3. Polymorphism 
//     Method overloading 
//     Method overriding 
// 4. Prototype 

str = "Javasript"
revstr = str.split("").reverse().join("")

console.log(revstr)

// loop  1 to 100 

// devisible by 3 print fizz 
// devisible by 5 print buzz
// devisible by 3 & 5 print fizzbuzz
// otherwise print number only 

// 1
// 2
// fizz
// 4
// buzz
// fizz
// 7
// 8
// fizz
// buzz
// 11
// fizz
// 13
// 14
// fizzbuzz


for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz")
    }
    else if (i % 3 == 0) {
        console.log("fizz")
    }
    else if (i % 5 == 0) {

        console.log("buzz")
    }
    else {

        console.log(i)
    }
}

// palindrome 

// // str = "madam"

// revstr = "madam"

// if(str == revstr){

// }



// anagrams 

// str1 = "army" 

// s3 = str1.split().sort().join("") // amry
// // str2 = "mary"
// s4 = str2.split().sort().join("") // amry

//    if( s3== s4){


//    }