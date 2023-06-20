/*A callback is a function passed as an argument to another function

This technique allows a function to call another function

A callback function can run after another function has finished
*/
function sum(a,b){
    return a + b;
}

function cal(name,sum){                         //Function is passed as an argument of another function 
    // sum();
    console.log("Hi there ",name);
    console.log(sum)                            //calling a function inside of another funtion 

}

cal("Astha",sum(2,4))                   //invoking a function inside of another function 


//some another example 
function f1() {
    console.log('f1');
}

function f2() {
    console.log('f2');
}

function main() {
    console.log('main');
    
    setTimeout(f1, 0);
    
    f2();
}

main();
