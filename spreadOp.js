//array
let prop = [
  { name: "shiv", age: 23 },
  { name: "ganesh", age: 23 },
  { name: "ravi", age: 23 },
  { name: "vishal", age: 23 },
];

let newProp = [...prop];

console.log(newProp);


//object
const carDetails = {
    brand : 'Tata',
    year : 2021
}

const feat = {
    maxspeed : 120,
    color : 'Red' 
}

const getCarDetails = {...carDetails,...feat}

console.log(getCarDetails)