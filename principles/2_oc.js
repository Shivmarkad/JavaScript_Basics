// Open-Closed Principle
// The open-closed principle says that code should be open for extension, but closed for modification. 

// animal class
class Animal {
    constructor(name){
        this.name = name
    }
    drinks(){
        console.log("Drinks water")
    }
    eats(){
        console.log("Eats vegitables")
    }
}

// extending properties of Animal class to leopard
class leopard extends Animal{
    constructor(name, speed){
        super(name),
        this.speed = speed
    }

    // overriding eats method of parent class Animal
    eats(){
        return "Eats non-veg"
    }
    
    //added property
    getSpeed(){
        return this.speed;
    }
}

let leo1 = new leopard('Chitah',80)

console.log(leo1.eats())
console.log(leo1.getSpeed())


// for vehicle
class Vehicle {
    constructor(fuelCapacity, fuelEfficiency) {
        this.fuelCapacity = fuelCapacity;
        this.fuelEfficiency = fuelEfficiency;
    }

    getRange() {
        return this.fuelCapacity * this.fuelEfficiency;
    }
}

//hybrid vehicle
class HybridVehicle extends Vehicle {
    constructor(fuelCapacity, fuelEfficiency, electricRange) {
        super(fuelCapacity, fuelEfficiency);
        this.electricRange = electricRange;
    }

    // overriding existing property of parent class
    getRange() {
        return (this.fuelCapacity * this.fuelEfficiency) + this.electricRange;
    }
}

const standardVehicle = new Vehicle(10, 15);
const hybridVehicle = new HybridVehicle(10, 15, 50);

console.log(standardVehicle.getRange()); 
console.log(hybridVehicle.getRange()); 