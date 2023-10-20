# Patterns in Js

## Types

### 1: Creational pattern
### 2: Structural pattern
### 3: Behavioral pattern

## Creational Pattern 
###     Creational patterns consist of different mechanisms used to create objects.

## A) Singleton Pattern
### Singleton is a design pattern that ensures that a class has only one immutable instance.

## Object literal
```javascript
const newObj = {
    name: 'Shiv',
    age: 24
}

//preventing new properties being added
Object.freeze(newObj)

newObj.lastName = "markad" //it doesn't work 

console.log(newObj)
//{ name: 'Shiv', age: 24 }
```

## classes
```javascript
class MyDetails{
    constructor(){}
    getDetails(){console.log("hey there")}
}
let newDetails = new MyDetails()

//preventing class methods being added
Object.freeze(newDetails)

```

## Factory Method Pattern

The Factory method pattern provides an interface for creating objects that can be modified after creation. 

```javascript
class Person {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    sayPhrase = () => console.log(this.phrase)
}

const person1 = new Person('Shiv',24)
console.log(person1.name) // output: "Shiv"
```