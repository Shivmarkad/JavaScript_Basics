//The Map object holds key-value pairs and remembers the original insertion order of the keys.

//Map objects are collections of key-value pairs. A key in the Map may only occur once

const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
map1['hi'] = 23
console.log(map1)

//Maps can be iterated using a for...of loop:

for(const [key,val] of map1){
    console.log(`key ${key} and the value is ${val}`)
}

//get method to get the value with key
console.log(map1.get('a'));

//set method to set the value with key
map1.set('a', 97);

console.log(map1.get('a'));

//size to get the size of map data structure
console.log(map1.size);

//delete method to delete the value with key 
map1.delete('b');

console.log(map1.size);