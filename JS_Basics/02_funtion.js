// There are two type of arrow and regular function

// A function definition (also called a function declaration, or function statement) consists 
// of the function keyword, followed by:

//     The name of the function.
//     A list of parameters to the function, enclosed in parentheses and separated by commas.
//     The JavaScript statements that define the function, enclosed in curly braces, { /* … */ }.

// funtion declaration:-
function getName(id) {      //id - parameter
    let name = "Shiv";
    return `Name ${name} and id is ${id}`;  //return statement
}

console.log(getName(3))

// Function hoisting only works with function declarations — not with function expressions. 

// Accesing funtion before declaration
say()

function say() {
    console.log("hello there from hoisting")
}

// funtion expression
// anonymous funtion

const addTwoNumbers = function(num1, num2){
    return num1 + num2;
}

console.log(addTwoNumbers(3,9))

// providing name to funtion expression

const fact = function fn(num) {
    return num < 2 ? 1 : num * fn(num -1);
}

console.log(fact(6))