//regular functions
function multiply(a, b) {
  return a * b;
}

console.log(multiply(4, 3));

//arrow functions
let add = (b, m) => {
  return b + m;
};

console.log(add(6, 8));

//Immediately Invoked Function expression
const myName = (() => "shiv")();

console.log(myName);

let m = ((th) => {
  console.log("hi there this is iife", th);
})("hi");

//function closure

function main() {
  const name = "Shiv Markad";

  function sayMyName() {
    console.log(name); //accesing outer function variable
  }
  sayMyName();
}

main();

//example
function adder(num) {
  function add(b) {
    console.log(num + b);
  }
  return add;
}

const addTo8 = adder(8);

addTo8(6);

//function curring function inside function

let addition = (a) => (b) => (c) => a + b + c;

console.log(addition(2)(9)(6));

function sendAutoEmail(to) {
  return function (subject) {
    return function (body) {
      console.log(
        `Sending Email to ${to} with subject ${subject} and body ${body}`
      );
    };
  };
}

let step1 = sendAutoEmail("Shiv@gmail.com");
let step2 = step1("New order confirmation");

step2("hey shiv here is something for you");

//callback
function doSomethingAsync(callback) {
  setTimeout(function () {
    console.log("Task done!");
    callback(); // This is where the callback function is invoked.
  }, 1000);
}

function afterTaskIsDone() {
  console.log("Callback function executed.");
}

doSomethingAsync(afterTaskIsDone);
