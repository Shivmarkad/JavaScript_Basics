//map - used to create new array from existing one applying function 
    //to each one of the elements

let arr = [23,4,5,1,2,65]

const sqrs = arr.map(itmes => itmes*itmes)

console.log(sqrs)


//filter - takes elements and applies conditional statements againt it

const evenNum = arr.filter(itmes => itmes%2 == 0)

console.log(evenNum)

//reduce-  reduces an array of values down to just one value.

// accumulator - the returned value of the previous iteration
// currentValue - the current item in the array
// index - the index of the current item
// array - the original array on which reduce was called

let sum = arr.reduce((result, itmes)=>{return result + itmes})

console.log(sum)


