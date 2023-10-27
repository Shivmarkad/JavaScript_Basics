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
