
//Default function parameter    

function operation(param1 = 22, params2 = 40) {         //Default values provided to the parameters

    result = param1 * params2

    return result;
}

console.log(operation());                          //Without passing arguments
// 880  

console.log(operation(23, 22));                      //Passing arguments

//Spread operator

const myfriends = ['Suraj', 'Swapnil', 'Priya', 'Ashmita', 'Mehwish'];

const myClassmates = ['Sumit', ...myfriends];           //Assing one array to another using spread operator 

console.log(myClassmates);

const [Best1, Best2, , , Best_Friend] = myfriends;      //Omiting some values

console.log(`My Best friends : ${Best1}, ${Best2} and she is my BFF "${Best_Friend}"`);

