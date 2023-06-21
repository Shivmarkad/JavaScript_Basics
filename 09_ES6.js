
//Default function parameter    

function operation(param1 = 22, params2 = 40) {         //Default values provided to the parameters

    result = param1 * params2

    return result;
}

console.log(operation());                          //Without passing arguments
// 880  

console.log(operation(23, 22));                      //Passing arguments


//Spread operator
// ( ... ) allows us to quickly copy all or part of an existing array or object into another array or object.

const myfriends = ['Suraj', 'Swapnil', 'Priya', 'Ashmita', 'Mehwish'];

const myClassmates = ['Sumit', ...myfriends];           //Assing one array to another using spread operator 

console.log(myClassmates);

//spread operator in object
const myVehicle = {
    brand: 'Ford',
    model: 'Mustang',

}

const updateMyVehicle = {
    type: 'car',
    year: 2021,
    color: 'yellow'
}

const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle }           //Using spread operator to combine objects  

console.log(myUpdatedVehicle)

//Destructing 
//Getting the items which are required

const [Best1, Best2, , , Best_Friend] = myfriends;      //Omiting some values

console.log(`My Best friends : ${Best1}, ${Best2} and she is my BFF "${Best_Friend}"`);



//includes()
//The includes() function is used to determine whether an array contains a specified value. If it does, it returns true. Otherwise, it returns false.

let arr = ['MyPet', 'MyDevice', 'HeyThere', 'Mobile', 'Features'];

if (arr.includes('Features')) {
    console.log('Features Exits!!');
}
