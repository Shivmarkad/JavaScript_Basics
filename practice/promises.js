//promise 1

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("this is resolve promise1");
  }, 2000);
});

//promise 2
const myPromise2 = new Promise((resolve, reject) => {
  resolve("This is rejected promise2");
});

//will return rejected promise first
// Promise.all([myPromise,myPromise2]).then((vales) =>{
//     console.log(vales)
// }).catch((data) =>{
//     console.log(`This is the result off all in catch ${data}`)
// });

//any
// Promise.any([myPromise,myPromise2]).then((vales) =>{
//     console.log(vales)
// }).catch((data) =>{
//     console.log(`This is the result off all in catch ${data}`)
// });

//race
// Promise.race([myPromise,myPromise2]).then((vales) =>{
//     console.log(vales)
// }).catch((data) =>{
//     console.log(`This is the result off all in catch ${data}`)
// });