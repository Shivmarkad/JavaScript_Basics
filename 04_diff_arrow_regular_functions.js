// // Arrow function are concise syntax for writing function expression

// // (param1, param2, paramN) => expression
// // ES5
var add1 = function (x, y) {
  return x + y;
};
// ES6
//  let add = (x, y) => { return x + y };
// above code can also be written as arrow function

let add01 = (x, y) => x + y;

console.log(add1(2, 4))

// arguments Binding 
// The regular expression  

let myFunc = {
  showArgs() {
    console.log(arguments);
  }
};
myFunc.showArgs(1, 2, 3, 4);

// The above code with arrow function 

let myFunc2 = {
  showArgs: () => {
    console.log(...arguments);
  }
};

// myFunc2.showArgs(1, 2, 3, 4);       //arrow fun don't have argument binding 
//arguments not defined error  


// Use of this keyward 

let me = {
  name: "Shiv Markad",
  thisInArrow: () => {
    console.log("My name is " + this.name); // no 'this' binding here 
  },
  thisInRegular() {
    console.log("My name is " + this.name); // 'this' binding works here 
  }
};
me.thisInArrow();
me.thisInRegular();
/* OutPut will be :
My name is 
My name is Shiv Markad */

//Arrow funtions are only callable not contructible 

let add2 = (x, y) => console.log(x + y);
// new add2(2,3);      //type error as add2 is not constructor 

// add2(4,3);

//Duplicate arguments  with regular function

function add3(x, x) { 
  console.log(x+x);
}      //is a valid code 

add3(3,6);

//Using strict mode regular function

'use strict';
function add4(x, x) { 
  console.log(x+x)
}

add4(5,3);
  
// SyntaxError: duplicate formal argument x

//With arrow functions, duplicate named arguments are always, regardless of strict or non-strict mode, invalid.

// (x, x) => {}

// SyntaxError: duplicate argument names not allowed in this context