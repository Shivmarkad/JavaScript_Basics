//created arrow function
var myArrow = ()=>{
    console.log("hi")
}

//normal function
function printn(){
    console.log("hi")
}

//can add prototype property to normal function
printn.prototype.getname = function (){
    console.log("this is prototype")
}

//can't add prototype property to arrow function
// myArrow.prototype.getname = function (){
//     console.log("this is prototype")
// }

console.log(myArrow.prototype) //undefined
console.log(printn.prototype)  // { getname: [Function (anonymous)] }