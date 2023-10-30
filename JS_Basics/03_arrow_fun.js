// Arrow funtions are concise in syntax

// syntax ;-  (params) => {/*...statements*/}
    // () => expression

    // param => expression

    // (param) => expression

    // (param1, paramN) => expression

    // () => {
    // statements
    // }

    // param => {
    // statements
    // }

    // (param1, paramN) => {
    // statements
    // }

let myId = 1;

// assigning arrow function to variable
const newId = (id) => {
    myId = id;
    return true;
}

// cannot be used as constructor

// let id = new newId() // TypeError : newId is not a constructor

// arrow function do not have their own this

const obj = {
    i: 10,
    b: () => console.log(this.i, this),

    c() {
      console.log(this.i, this);
    }
};

obj.b(); // logs- undefined, Window { /* … */ } (or the global object)
obj.c(); // logs- 10, Object { /* … */ }