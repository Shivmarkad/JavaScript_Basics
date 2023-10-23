// let myPromise = new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log("hi there")
//         }, 2);
//         resolve("this is resolve")
// })

// console.log(myPromise)

let userDetails = {
    name : "Shiv",
    age: 24,

}

let userDetails2 = {
    name : "Shiv",
    age: 24
}

function printDetails(city, coutry){
    console.log(this.name+" "+city+" "+coutry)
}

// function borrowing call
printDetails.call(userDetails2,"Mumbai","India")

//apply can pass parameters in arrays
printDetails.apply(userDetails2,["Mumbai","India"])

//bind creates new copy
let details = printDetails.bind(userDetails2)

details("Mumbai","India")