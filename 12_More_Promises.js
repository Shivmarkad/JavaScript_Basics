// Creating promises and using Promise.all

let prom1 = new Promise(function (myResolve, myReject) {

    return myResolve("This is prom1"); 

});

let prom2 = new Promise(function (myResolve, myReject) {

    return myResolve("This is prom2");

});
let prom3 = new Promise(function (myResolve, myReject) {

    return myResolve("This is prom3");

});
let prom4 = new Promise(function (myResolve, myReject) {

    return myResolve("This is prom4");

});

let prom5 = new Promise(function (myResolve, myReject) {

    return myReject("This is prom5 rejected");              //here it return myReject error

});


// all medthod

// Promise.all([prom1, prom2, prom3, prom4])
// .then((values)=>{
//     console.log(values)   
// }
// )
// .catch((err)=>{
//     console.log(err)
// })

// any method it return which settle first 

// Promise.any([prom1, prom2, prom3, prom4, prom5])
// .then((values)=>{
//     console.log(values)
// }
// )
// .catch((err)=>{
//     console.log(err)
// })

// //race method 

Promise.race([prom1, prom2, prom3, prom4, prom5])
.then((values)=>{
    console.log(values)
}
)
.catch((err)=>{
    console.log(err)
})
.finally(() =>{
    console.log("This is the final statement")
})