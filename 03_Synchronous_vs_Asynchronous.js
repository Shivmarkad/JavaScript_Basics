
// JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.

// By default, every line in a function executes sequentially, one line at a time.
// The same is applicable even when you invoke multiple functions in your code. Again, line by line.

// The JavaScript engine maintains a stack data structure called function execution stack. 
// The purpose of the stack is to track the current function in execution.

//Synchronous execution 
function f1(a, b) {
  sum = a + b;
  return sum;
}
function f2(c, d) {
  mult = c * d;
  return mult;
}
function f3(e) {
  sqr = e * e;
  return sqr;
}

// Invoke the functions one by one
console.log(f1(1, 2));
console.log(f2(2, 3));
console.log(f3(4));

// //Here is using function inside of another function 
// function f1() {
//   // Some code
// }
// function f2() {
//   f1();           //Invokes functions f1
// }
// function f3() {
//   f2();           //Invokes function f2
// }
// f3();       // Here we invoked only one function 

function func1(){
  console.log("it is my 1st function)");
}

function func2(){
  console.log("it is my 2nd function)");
  func1();               //here we called the function inside of an another function
}
func2();                //Here the function invoked func2 will also invoke func 1

//88888888888888888888888888888888888888888888888888888888888888888888888888888888

//Asynchronous execution 

// The word asynchronous means not occurring at the same time

function printMe() {
  console.log('print me');
}

function test() {
  console.log('test');
}

setTimeout(printMe, 2000);     //here the printMe function will execute after 2 seconds 
test();                        //This will execute before the printme function

