
// Function can be declared two ways 
// function declaration and function expression

// There are two types of function 

// arrow and normal

// Normal function 

function printSomething(){
    console.log("Hello there from normal function declaration !")
}
printSomething()

// Arrow function

const func = () => {
    console.log("From arrow function")
}

func()

// function expression

const myFuncExp = function (){                      // anonymous function / unnamed function
    console.log("this is function expression")
}

myFuncExp()

// Immediately Invoked Function Execution

// This is invoked whenever declared

const iife = (function iifeFunc() {
    console.log("This is iife !!")
    return "hello there"
})()                                // calling function / invoking a function