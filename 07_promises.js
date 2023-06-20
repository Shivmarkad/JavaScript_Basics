function operations(sumOfEve) {
    setTimeout(() => {
        console.log("calling sumOfEve function ")
        sumOfEve()
    })
}

function anotherOperation(mulOfNum) {
    setTimeout(() => {
        console.log("calling mulOfNum function")
        mulOfNum()
    })
}

// function doThirdThing(callback) {
//     setTimeout(() => {
//         console.log("step third")

//     })
// }


// doSomthing(function () {
//     doSomthingElse(function () {
//         doThirdThing()
//     })
// })


// doSomthing(function () {
//     doSomthingElse(function () {
//         doThirdThing(function () {
//             console.log("all steps are done")
//         })
//     })
// })


// async function one() {

//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole("hi")
//         })
//     })

// }

// async function two() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole("hello from two")
//         })
//     })
// }

// async function three() {
//     return new Promise((resole, reject) => {
//         setTimeout(() => {
//             resole("hello from three")
//         })
//     })
// }


fun()
    .then((data) => {
        console.log("done with one", data)
        return two()
    })
    .then((data) => {
        console.log("done with two", data)

    })
    .catch((error) => {
        console.log("error")

    })

async function fncall() {
    let result = await fun()

    console.log("done with sum------->", result)
    let resultTwo = await two()

    console.log("mul---------->", resultTwo)
}

fncall()