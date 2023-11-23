
// Hoisting : It is the phenomenon with which variables and function can be accessed before declaration

// When js file runs the compiler scans the variables and functions declared in the js file
// and creates execution context and assign memory for variables and functions

// varialbes hosting

// var : - this variable declaration is hoisted as undefined

console.log(value);     // undefined

var value = 34;

// let and const declaration are hoisted but not initialized

// let :- these variable declaration is hoisted as uninitialized

// console.log(key);   // ReferenceError: Cannot access 'key' before initialization

let key = "myKey"

// const :- these variable declaration is hoisted as uninitialized

// console.log(candidate_id)   // ReferenceError: Cannot access 'candidate_id' before initialization

const candidate_id = 23;

// Function

// Normal Function :- whole function is hoisted

sum()       // can be invoked before declaration

function sum() {
    console.log("This is normal function hoisting!!")
}

// Function expression :- Hoisted as variable

exp()       // ReferenceError: Cannot access 'exp' before initialization

const exp = function funcExp(){
    return "Function-Expression"
}