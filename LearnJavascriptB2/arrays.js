


arrayname = [] // empty array without elements 

arr = [1,3,4,5,6,67,78] 

arr2 = ["Raju", 23, true, undefined, null]

str1 = "Raju"
 str2 = "G"

 finalstr = str1+str2
 console.log(finalstr)

 //concat 

 arr3 = arr.concat(arr2)


 console.log(arr3)

 // sort ()

 arr4 = ["Raju", 'arun', "bushan", "charan", "kiran", 'yasin', 2,7,3,9, true, false]

 arr4 = arr4.sort()

  console.log(arr4)

  //join()

  //converts the array elemts to single string 


//str3 = arr5.join("")

//console.log(str3)

arr6 = [2,4,5,6,7,8,9]

ar7 = arr6.join("")

console.log(ar7)

// split()

//converts string to array 

str = "this is js class"

arr8 = str.split(' ')

console.log(arr8)

//push 

 //add element at end of the array

 ar1 = ["wake up", 'eat', "work"]

 ar1.push("Sleep")
 ar1.push("Read")

 console.log(ar1)

 // pop()

// it will remove  1 eleement at end 
ar1.pop()

ar1.pop()

ar1.pop()
 console.log(ar1)

 //unshift 
 // this method will add the elements beginning 

 ar2 = ["wake up", 'eat', "work"]

 ar2.unshift("Sleep")
  ar2.unshift("read")

 console.log(ar2)

 // shift()

 //this method will remove the 1st element 

 ar2.shift()

  ar2.shift()


  console.log(ar2)

  ar3 = ["Admin", "admin123"]

  //index always starts from 0 

  console.log(typeof(ar3 ))// Admin



 ar2 = ["wake up", 'eat', "work"]

 ar2[2] = "sleep"


console.log(ar2)

//indexOf


 ar2 = ["wake up", 'eat', "work"]

 console.log(ar2.indexOf("eat")) //1

// includes 

 // if element is present true other wise false 

console.log( ar2.includes('raju'))  // true

arr2 =  ["wake up", 'eat', "work"]

if(arr2.includes("raju")){

    console.log("Elemet is present")
}
else{

      console.log("Elemet is not present")
}


//====================================

arr = ["Admin", "PIM", "Leave", "Recruitment" ]

// for of  // es6 

// forEach  // es6

// for(let element of arr){

//     console.log('Loop starts')
//     console.log(element)
//     console.log('Loop ends')
// }


arr.forEach(element => {
    
        console.log('Loop starts')
    console.log(element)
    console.log('Loop ends')
});

//===========================================

// filter 

// Map

// reduce 

arr = [1,2,3,4,5,6,7,8,9]

arr2 = arr.filter( element => element%2 === 0)

console.log(arr2)

// Filter odd numbers from arr
arr3 = arr.filter(element => element % 2 !== 0);
//arr3 = arr.filter(element => element !=== 0); // This will cause a syntax error

// The strict inequality operator in JavaScript is !== (not !===).
// Example usage:
arr3 = arr.filter(element => element !== 0);
console.log(arr3);

arr4 = ["raju", "arjun", "akhil"]

arr5 = arr4.filter(element => element=="raju")

console.log(arr5)

//map 

arr6 = [5,10,15,20,25]

arr7 = arr6.map(element => element/2)

console.log(arr7)

// reduce 

numbers = [1,2,3,4,5,6]
console.log(numbers.length)  //6

sumofelements = numbers.reduce( (acc , cur) =>acc+cur, 5 )

console.log(sumofelements)

