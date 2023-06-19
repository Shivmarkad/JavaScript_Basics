// // Arrow function are concise syntax for writing function expression

// // (param1, param2, paramN) => expression
// // ES5
var add = function(x, y) {
    return x + y;
  };
  // ES6
//  let add = (x, y) => { return x + y };
// above code can also be written as : 
// let add = (x, y) => x + y;


console.log(add(2,4))

// arguments Binding 
// The regular expression  

// let myFunc = {  
//     showArgs(){ 
//      console.log(arguments); 
//     } 
//    }; 
//    myFunc.showArgs(1, 2, 3, 4);

// The above code with arrow function 

// let myFunc = {  
//     showArgs : () => { 
//     console.log(...arguments); 
//    } 
//   }; 
//   myFunc.showArgs(1, 2, 3, 4);

  
let me = { 
    name: "Shiv Markad", 
    thisInArrow:() => { 
    console.log("My name is " + this.name); // no 'this' binding here 
    }, 
    thisInRegular(){ 
    console.log("My name is " + this.name); // 'this' binding works here 
    } 
   };
   me.thisInArrow(); 
   me.thisInRegular();
   