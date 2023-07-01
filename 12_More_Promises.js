// Creating promises and using Promise.all

let prom1 = new Promise(function (myResolve, myReject) {
    setTimeout(() => {
        return myResolve("This is prom1");

    }, 200);

});

let prom2 = new Promise(function (myResolve, myReject) {
    setTimeout(() => {
        return myResolve("This is prom2");

    }, 100);

});
// let prom3 = new Promise(function (myResolve, myReject) {
//     setTimeout(() => {
//         return myReject("This is prom3");

//     }, 300);

// });
// let prom4 = new Promise(function (myResolve, myReject) {
//     setTimeout(() => {
//         return myResolve("This is prom4");

//     }, 400);

// });

// let prom5 = new Promise(function (myResolve, myReject) {
//     setTimeout(() => {
//         return myResolve("This is prom5");              //here it return myReject error

//     }, 100);

// });


// all method
//will return the rejected promise which settles first 
//if all the promises are resolved then return all the promises are resolved 

// Promise.all([])
//     .then((values) => {
//         console.log(values)
//     }
//     )
//     .catch((err) => {
//         console.log(err)
//     });    


//any method
// any method will return the promise which settle first
// This method returns a promise that fulfills or rejects as soon as any of the promises,
// It checks for resolved promise if there is rejected promise

// Promise.any([prom1, prom2, prom3, prom4, prom5])
// .then((values)=>{
//     console.log(values)
// }
// )
// .catch((err)=>{
//     console.log(err)
// })                                          

// race method
// race method => in this first promise which settles will get returned rejected or resolved 

Promise.race([prom1, prom2])
    .then((values) => {
        console.log(values)
    }
    )
    .catch((err) => {
        console.log(err)
    })
    .finally(() => {
        console.log("This is the final statement")
    })