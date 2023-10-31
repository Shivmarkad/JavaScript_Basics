const arr = [1, 3, 5, 7, 8]

// length of array

console.log("Array length",arr.length)

// toString()
let str = arr.toString()
console.log("Array to string",str)   // 1,3,5,7,8

// pop()
// - removes last element of the array

arr.pop()  // removes 8 from the array and returns it

console.log("Array after pop",arr)    // [ 1, 3, 5, 7 ]

// push()
// adds element at last of array and returns new length

arr.push(9)

console.log("Array after push 9",arr)

// shift()
// removes first element of the array and returns it

arr.shift()

console.log("Array after shift",arr)

// unshift()
// adds the new element at the first of the array and returns new length
arr.unshift(4)

console.log("Array after unshift",arr)

// join()
// joins all elements of array into string with separator string

let newstr = arr.join('_')
console.log("Array after join with _ underscore",newstr)

// concat()
// merges two arrays and returns new array

let newArr = [1,2,3,4]

console.log("Concatinated two arrays:",arr.concat(newArr))

// flat()
// reduces dimention of array to one

let mulDiaArr = [[1,4,5], 7, [8,9,0]]

console.log("New Array after flattening ",mulDiaArr.flat())

// splice()
// add new elements in a array and delete elements, returns deleted elements

arr.splice(3,1,2,4,6,8)

console.log("Array after splice", arr)

// slice()
// slices out piece of array into new array

console.log(arr.slice(1,3))