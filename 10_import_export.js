
// Export: You can export a variable using the export keyword    
// in front of that variable declaration. You can also export a function 
// and a class by doing the same.

// Import: You can import a variable using import keyword. 
//You can specify one of all the members that you want to import from a JavaScript file.


import hello1, {hello}   from "08_async_await";

hello1();
hello();

//exporting a function

export const myfunction = function (arr) {
    let evenNum = arr.filter(item => item%2 ==0)
    return evenNum;
}

//creating function for default export

const getSum = function(arr){
    let sum = arr.reduce((result, item)=>{
        return result + item
    })
    return sum
}

//exporting above function by default

export default getSum;