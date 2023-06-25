// The Array object is used to store multiple values in a single variable.

let arr = ["Hi", "This", "That", "How", "Where"]

//Using forEach loop to iterate eitems from array arr
arr.forEach((data, a) => {
    console.log(data, a);
})

//Using push method to add items in the array at the end 

arr.push("When")

console.log(arr)

//Using pop method to remove item from the array from the end

arr.pop()

console.log(arr)

// Using shift method to remove the element form the front of array

arr.shift()

console.log(arr)

//Using unshift to add the items in the array at the begining of the array

arr.unshift("What")

console.log(arr)

//Using the indexOf method to get the index of perticular item in the array  

console.log(arr.indexOf("What"))


//Using splice to remove perticular element form the array and replace with other or to add the element at perticular index

arr.splice(2, 1, "When", "Whatever")

console.log(arr)

//Using length method to get the number of elements in the array or the length of the array

console.log("The length of the array : ", arr.length)


// String operations

let myDesc = `Hey there !!
My name is Shiv.
I am learning JavaScript !!`;

//Using slice method to slice the string 

let sl = myDesc.slice(4, 11)

console.log(sl)

//Using split method to split the string and converting it into array

let myDescSlt = myDesc.split(" ")           //Split with white spaces

console.log(myDescSlt)

//spliting the every character of the string 

let myDescEv = myDesc.split("")

console.log(myDescEv)

let myExDesc = `\nCurrently I am learning the array operations and string operations in the JavaScript.`

//Concanating the two string using concat method 

let newDesc = myDesc.concat(myExDesc)

console.log(newDesc)
