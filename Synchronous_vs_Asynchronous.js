
// JavaScript is a single-threaded, non-blocking, asynchronous, concurrent programming language with lots of flexibility.

// By default, every line in a function executes sequentially, one line at a time. The same is applicable even when you invoke multiple functions in your code. Again, line by line.

// The JavaScript engine maintains a stack data structure called function execution stack. The purpose of the stack is to track the current function in execution.

/*It does the following:

When the JavaScript engine invokes a function, it adds it to the stack, and the execution starts.
If the currently executed function calls another function, the engine adds the second function to the stack and starts executing it.
Once it finishes executing the second function, the engine takes it out from the stack.
The control goes back to resume the execution of the first function from the point it left it last time.
Once the execution of the first function is over, the engine takes it out of the stack.
Continue the same way until there is nothing to put into the stack.

The function execution stack is also known as the Call Stack.
*/
//Synchronous execution 
function f1(a,b) {
    sum = a + b;
    return sum;
  }
  function f2(c,d) {
    mult = c*d;
    return mult;
  }
  function f3(e) {
    sqr = e * e ;
    return sqr; 
  }
  
  // Invoke the functions one by one
  f1(1,2);
  f2(2,3);
  f3(4);
  
  //Here is using function inside of another function 
  function f1() {
    // Some code
  }
  function f2() {
    f1();           //Invokes functions f1
  }
  function f3() {
    f2();           //Invokes function f2
  }
  f3();       // Here we invoked only one function 


//Asynchronous execution 

// The word asynchronous means not occurring at the same time

function printMe() {
    console.log('print me');
  }
  
  function test() {
    console.log('test');
  }
  
  setTimeout(printMe, 2000);     //here the printMe function will execute after 2 seconds 
  test();
  