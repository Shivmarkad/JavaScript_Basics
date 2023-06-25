// let myProm = new Promise((resolve,reject) =>
// resolve("this is the resolve from myPromise"))

// myProm()
// .then((datat)=>console.log(datat))
// .catch((error)=>console.log(error))



let arr = [1,2,3]
let sum= 0;
arr.forEach((data)=>{
    sum = sum + data
}
)
console.log(sum)
console.log("average : ",sum/arr.length)
console.log(arr.length)

// let myString = arr.