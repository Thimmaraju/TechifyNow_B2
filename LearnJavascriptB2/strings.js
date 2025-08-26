

//strings 

//coersion 


console.log(-5+"7") // only in case of + number converted strings 

console.log(-5-"7") // - /* %  string will converted to number 

console.log(5-null) // NaN

//true = 1

// false = 0

// null = 0



str = "javascript"

console.log(str.length)

//str[index]

console.log(str[0] )  //j

//charAt()

console.log(str.charAt(0))

st2 = Number("88")  // 88

console.log(st2)

console.log(typeof(st2))

arr  = [1,4,5,8]

console.log(arr[5])


//literals 


str1 = "Raju"

str2 = "blr"


str3 =  `${str1}'s Place is ${str2}`

console.log(str3)


//concat 

str4 = "Java"

str5 = "script"

str6 = str4.concat(str5)

console.log(str6)


//strings are immutable 
arr = [2,6,7,8]
arr[1] = 9

console.log(arr)

str = "kavascript"

str[0] = "J"

console.log(str)

//replace 

//st1 = "My place is Bangalore".replace("a", "q")

st1 = "My place is Bangalore".replaceAll("a", "q")


console.log(st1)


price1 = Number("$120".replace("$", ""))

price2 = Number("$60".replace("$", ""))

toatl = "$180".replace("$", "")

console.log(price1 + price2)

// trim ()

str1 = "      Raju      blr      ".trim()

console.log(str1)


// trimStart()

//trimEnd()

//. toUppercase()

st2 = "Playwright is Advanced Automation tool"

st3 = st2.toUpperCase()

console.log(st3)

st4 = st2.toLowerCase()
console.log(st4)


console.log(st2.includes('Raju')  )// true 

//substr()

st5 = "Javascript"


st6 = st5.substr(0, 4)

console.log(st6)


// arr = [3,6,8789,9]

// arr[0] = 56

// join()

// split()

