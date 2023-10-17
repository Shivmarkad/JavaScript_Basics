//curring -  transforms a function with multiple arguments into a sequence of nested functions.

function sendDetails(name){
    return function(lastname){
        return function(age){
            return `Hey! ${name} ${lastname} your age is ${age}!`
        }
    }
}

let addName = sendDetails('Shiv')('Markad')(24)

console.log(addName)