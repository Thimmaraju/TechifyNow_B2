// We use objects to pass the Data to our scripts 

// objectname = {

//     propertyname : propertyvalue,
//     propertyname : propertyvalue,

// }

   car = {

        tyres :"JKTyre",
        model : "Altroz",
        year  : 2025,
        Automatic : true,
        seats : 5

   }

   console.log(car.Automatic)

  console.log( car['model'])

  const student = {

       firstname : "Jagdish",
       lastname : "R"
  }

console.log( student.firstname)

//console.log( student.fathername) 

student['place'] = "Hyderabad"
student['lastname'] = "Rao"

delete student['firstname']

console.log(student)

//looping the property values 

const jobtitles = {

    title1 : "CEO I",
    title2 : "CFO I",
    title3 : "SDETI",
    title4 : "SDETII"
}


//for in for loop

for(let item in jobtitles){

    console.log("Loop starts")

    console.log(jobtitles[item])

      console.log("Loop Ends")
}