//promise 1

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("this is resolve promise1");
  }, 2000);
});

//promise 2
const myPromise2 = new Promise((resolve, reject) => {
  reject("This is rejected promise2");
});

// //will return rejected promise first and if all resolve then return array of resolve promises result
// Promise.all([myPromise,myPromise2]).then((vales) =>{
//     console.log(vales)
// }).catch((data) =>{
//     console.log(`This is the result off all in catch--- promise.all ${data}`)
// });

// //any- return resolve promise which settles first if there are all promises rejects then return aggregation error
Promise.any([myPromise,myPromise2]).then((vales) =>{
    console.log(vales)
}).catch((data) =>{
    console.log(`This is the result off all in catch ${data}`)
});

// // race - this will result which settle first whether reject or resolve
// Promise.race([myPromise,myPromise2]).then((vales) =>{
//     console.log(vales)
// }).catch((data) =>{
//     console.log(`This is the result off all in catch ${data}`)
// });