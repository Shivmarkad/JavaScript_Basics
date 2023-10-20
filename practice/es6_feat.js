//destructuring

let myObject = {
    firstName: "shiv",
    lastName: "Markad",
    age: 24
}

//extracting the values from the objects
const { firstName, age } = myObject

console.log(firstName, age)

//spread operator (...) 

let data = [12,3,5,2,1,9]

//using spread operator 
let newData = [44,90,...data,89]

console.log(newData)

//for objects 

let details = {...myObject}
console.log(details)

//Template literal - can access variables inside the backstick string using ${} 

console.log(`Hey ${firstName} how are you ?`)

//includes() - used to check value present in the array or string

console.log(details.firstName.includes('sh'))   //true
console.log(data.includes(2))                   //true

