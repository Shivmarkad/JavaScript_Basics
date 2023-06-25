// Creating regular function which takes two arguments and results their sum.

function sum(num1, num2){
  return num1 + num2;
}

console.log(sum(23, 54))

// Creating arrow function 

let myFunction = (a, b) => a * b;     // it allows to write a code in fewer lines 

console.log(myFunction(2,4))

// Without assigning to the variable called as function expression
// A function expression can be used as an IIFE (Immediately Invoked Function Expression)which runs as soon as it is defined.

myfunc = () => "Hello there !!" 

console.log(myfunc())


//Code for function declaration
function callAdd(x, y) {
	let z = x + y;
	return z;
}
console.log("Addition : " + callAdd(7, 4));

//Code for function expression (anonymous)
let calSub = function (x, y) {                //Not defined the function name
	let z = x - y;
	return z;
}

console.log("Subtraction : " + calSub(7, 4));

//Code for function expression (named)
let calMul = function Mul(x, y) {             //Named the function as Mul
	let z = x * y;
	return z;
}

console.log("Multiplication : " + calMul(7, 4));

//code for arrow function 

let calDiv = (x, y) => {
	let z = x / y;
	return z;
}

console.log("Division : " + calDiv(24, 4));
