// Using var
// var and let create variables that can be reassigned another value.

var a = 5;
var b = 6;
var sum1 = a + b;
console.log(sum1)

// Global scope variable

var number = 50    // As it is declared outside of the function so has global scope 

function print() {
  var square = number * number
  console.log(square)
}

console.log(number) // 50

print() // 2500

//Local scope variable 
function print() {
    var num = 50              // As it is declared inside the function so it has local scope 
    var square = num * num    // It can be accessed inside the local scope only 
    console.log(square)
  }
  
  print() // 2500
  
  console.log(num)            // Out the scope/function will get not defined error
  // ReferenceError: number is not defined

// var keyword allows redeclaration
var num1 = 50
console.log(num1) // 50

var num1 = 100
console.log(num1) // 100

// var also allows reinitialization
num1 = 20
console.log(num1) // 20

// Using let


let c = 5;
let d = 6;   
let sum2 = d + c;
console.log(sum2)

// const creates "constant" variables that cannot be reassigned another value.

// Using const
const e = 5;
const f = 6;
const sum3 = e + f;
console.log(sum3)