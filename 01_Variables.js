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

/*888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/

// Using let

let c = 5;
let d = 6;   
let sum2 = d + c;
console.log(sum2)

//example showing a global, local, and block scope:

let number = 50         //Global scope

function print() {
  let square = number * number    //Local scope

  if (number < 60) {
    var largerNumber = 80           //Local scope as it is declared with var keyward 
    let anotherLargerNumber = 100   //Block scope as declared with let keyward 

    console.log(square)
  }

  console.log(largerNumber)
  console.log(anotherLargerNumber)
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined

let number = 50
console.log(number) // 50

number = 100                  //Can ve reassigned
console.log(number) // 100


let number = 40               // Can not be redeclared !!

//Hoisting of variables declared with let 

console.log(number1)
// ReferenceError: Cannot access 'number' before initialization

let number1 = 50      //It is hoisted to the top of the block or scope as uninitialized 

/*888888888888888888888888888888888888888888888888888888888888888888888888888888888888888*/

// const creates "constant" variables that cannot be reassigned another value.

// Using const
const e = 5;
const f = 6;
const sum3 = e + f;
console.log(sum3)

//using const having different scope 
const number3 = 50

function print() {
  const square = number3 * number3

  if (number < 60) {
    var largerNumber2 = 80              //local scope var
    const anotherLargerNumber2 = 100    //block scope const 

    console.log(square)
  }

  console.log(largerNumber2)
  console.log(anotherLargerNumber2)       //anotherLargerNumber2 is not defined as it has block scope 
}

print()
// 2500
// 80
// ReferenceError: anotherLargerNumber is not defined

const number4 = 50

number4 = 100           //Can not be redclared or reassigned 

// TypeError: Assignment to constant variable

console.log(number5)
// ReferenceError: Cannot access 'number' before initialization

const number5 = 50         // const variable is hoisted as uninitialized 

// If you never want a variable to change, const is the keyword to use.

