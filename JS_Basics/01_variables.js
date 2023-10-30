// hoisting 
// - Hoisting is a JavaScript mechanism where variables and function declarations are 
//    moved to the top of their scope before code execution. 

// types of variable declaration

// 1 - using var keyword

// var variables will hoisted as undefined in lexical scope

console.log(myVariable)     //undefined

// these variables can be redeclared and reinitialized
// syntax 

console.log(myVariable)

var myVariable = 12;
console.log(myVariable)

//functional scope of var variable
function p() {
    var hey = 'hello'
    console.log(hey)
}
p()

//var can be re-declare and updated

var myVariable = 90
console.log(myVariable)

// var variables declared inside statements are accessible outside for global

if(true){
    var age = 24;
}
console.log(age)

// *** 2 - using const keyword ***

// const and let variables will hoisted as uninitialized in lexical scope

const name = "shiv";

// const variables cannot be redeclared
// const name = "Shivganesh"  

// const variables cannot be modified
// name = "Shivganesh"

// const is block-scoped, whereas var is function-scoped.

function returnVal() {
    const val = 1
    return val;
}

console.log(returnVal())

// *** 3 - using let keyword *** 

// let variables can be reinitialized but cannot be redeclared

let property = "fly";

// Reinitialized
property = "swim"

// cannot be redeclared
// let property = "run"

// let variable has block scope means that it cannot be accessed outside the block

function getDetails() {
    let myDetails = "Shivganesh Markad";
    console.log(myDetails)
}

getDetails()
// console.log(myDetails) // error - myDetails is not defined