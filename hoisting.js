// // During compile phase, just microseconds before your code is executed, 
// // it is scanned for function and variable declarations. All these functions and 
// // variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment. 
// // So that they can be used even before they are actually declared in the source code.

// // Hoisting Function declaration

// helloWorld();  // prints 'Hello World!' to the console
// function helloWorld(){
//   console.log('Hello World!');
// }

// // The above code will work like : 

var helloWorld = function(){
    console.log('Hello World!'); //prints 'Hello World!'
  }
  helloWorld();
  

// // JavaScript only hoist declaration not initialization


// // Hoisting variable values 

// console.log(a); // outputs 'undefined'
// var a = 3;

// // the above code lexical environment look like the var variable will be initialized with indefined 

// // lexicalEnvironment = {
// //     a: undefined
// //   }
  
// // Hoisting let and const variables:

// // console.log(a);    ReferenceError
// // let a = 3;

// // All declarations (function, var, let, const and class) are hoisted in JavaScript, 
// // while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.

// // If the JavaScript engine still can’t find the value of let or const variables at the line
// //  where they were declared, it will assign them the value of undefined or return an error (in case of const).

// let a;
// console.log(a); // outputs undefined
// a = 5;

// // the above code lexicalenvironment will look like :  
// // lexicalEnvironment = {
// //     a: <uninitialized>
// // //   }

// After first execution  
//      lexicalEnvironment = {
//     a: undefined
//   }

// Hoisting Class Declaration

// let peter = new Person('Peter', 25); // ReferenceError: Person is  
//                                      // not defined
// console.log(peter);
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// To access the classes we have to declare it first 

// class Person {
//     constructor(name, age) {
//       this.name = name;
//       this.age = age;
//     }
//   }
//   let peter = new Person('Peter', 25); 
//   console.log(peter);

//   The above code output will be : 
  // Person { name: 'Peter', age: 25 }
  

//   Hoisting Class Expressions :

// Just as function expressions, class expressions are also not hoisted. For example, this code won’t work.

// let peter = new Person('Peter', 25); // ReferenceError: Person is  
//                                      // not defined
// console.log(peter);
// let Person = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }

// The correct way to do this is : 

let Person = class {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  }
  let peter = new Person('Peter', 25); 
  console.log(peter);
  // Person { name: 'Peter', age: 25 }
  


