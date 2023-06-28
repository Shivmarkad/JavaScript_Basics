/*The map() method is used for creating a new array from an existing one, 
applying a function to each one of the elements of the first array.*/

//map()
//returns array

const numbers = [1, 2, 3, 4];

const squaredn = numbers.map(item => item % 2 === 0);

console.log("this is the result for map ",squaredn); 

//filter method

// The filter() method takes each element in an array and it applies a conditional statement against it.
//returns array 
const evens = numbers.filter(item => item % 2 === 0);

console.log("this is the result from the filter",evens); 


// The reduce() method reduces an array of values down to just one value.

const sum = numbers.reduce(function (result, item) {
  return result + item;
}, 0);

console.log(sum); 


//
var pets = ['dog', 'chicken', 'cat', 'dog', 'chicken'];

var petCounts = pets.reduce(function(obj, pet){
    if (!obj[pet]) {
        obj[pet] = 1;
    } else {
        obj[pet]++;
    }
    return obj;
}, {});

console.log(petCounts); 
