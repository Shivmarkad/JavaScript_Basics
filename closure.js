//closure- a combination of function bundle together 
//          function defined inside another function can have the access of lexical scope of 
//          outer function

function getDetails(){
    let name = 'shiv';
    let age = 24;
     function details(){
        return `${name} your age is ${age}`;
    }
    return details;
}

let myDetails = getDetails()

console.log(myDetails())

