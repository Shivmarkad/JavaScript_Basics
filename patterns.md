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
//preventing class methods being added
let newDetails = new MyDetails()

Object.freeze(newDetails)

```
