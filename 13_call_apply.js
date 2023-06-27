// The call() method takes arguments separately.

//call method
const person = {
  fullName: function () {
    return this.firstName + " " + this.lastName;
  }
}
const person1 = {
  firstName: "John",
  lastName: "Doe"
}
const person2 = {
  firstName: "Mary",
  lastName: "Doe"
}

// This will return "John Doe":
person.fullName.call(person1);

// The apply() method takes arguments as an array.

//apply method

const propr1 = {
  myc: function () {
    return this.brand + " " + this.colour;
  }
}

const propr2 = {
  brand: "Maruti",
  colour: "Red"
}

// This will return "Mary Doe":
console.log(propr1.myc.apply(propr2));

// bind method

const person4 = {
  firstName: "John",
  lastName: "Doe",
  fullName2: function () {
    return this.firstName + " " + this.lastName;
  }
}

const member = {
  firstName: "Hege",
  lastName: "Nilsen",
}
// The member object borrows the fullname method from the person object:

let fullName2 = person4.fullName2.bind(member);

console.log(fullName2())

/*call : binds the this value, invokes the function, and allows you to pass a list of arguments. 
apply : binds the this value, invokes the function, and allows you to pass arguments as an array. 
bind : binds the this value, returns a new function, and allows you to pass in a list of arguments.*/
