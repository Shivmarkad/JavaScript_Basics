
// The keyword await makes JavaScript wait until a promise settles and returns its result.

// async function kitchen(){

//     console.log("A")
//     console.log("B")
//     console.log("C")

//     await myPromise()

//     console.log("D")
//     console.log("E")

//   } 

//   // Trigger the function

//   kitchen();



async function myPromise() {
    return new Promise((resolve, reject) => {
        resolve("This is the resolve from myPromise async funciotn")
    })
}

async function dish() {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("This is massage form dish async function timeout.")
        }, 2000);
    })
}

//Creating async function and using await keyward 

async function hello() {
    let data = await myPromise()
    console.log(data)

    let data1 = await dish()
    console.log(data1)
}

hello()

let num_set = [1, 2, 3, 4, 5];


// export default function hello1() {
// 	console.log("Hello World!");
// }


// export { hello};

