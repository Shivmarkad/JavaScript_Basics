
// There are three type of variable declaration 

// var, let and const

// var variable has global and functional scope 

// let and const variable has global and block scope

// var declared variable can be redeclared and reinitialized 

// let declared variable can not be redeclared but can be reinitialized i.g. value can be changed

// const declared variable can not be redeclared or reinitialized, must be initialized whenever declared

// var

var age = 12;

var age = 23;       // redeclared and reinitialized

function getAge(){
    var newAge = 45;     
    console.log(newAge)  // can be accessed only inside function
    return age;         // accessing global variable declared with var
}

// console.log(newAge)     // ReferenceError: newAge is not defined

console.log(getAge())

// let

let yourName = "Shiv";

yourName = "Ganesh";        // can be reinitialized

console.log(yourName)

// can not be redeclared 
// let yourName = 34;  // SyntaxError: Identifier 'yourName' has already been declared

// const

const myRole = "Dev";

// const myRole = 23;   // SyntaxError: Identifier 'myRole' has already been declared
console.log(myRole)

function getRole(){
    const role = "Carpenter"
    console.log(role)
}
getRole()

// console.log(role)       // ReferenceError: role is not defined


