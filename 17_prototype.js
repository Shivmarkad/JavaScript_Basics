
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype)
    animal.name = name
    animal.energy = energy

    return animal
}

Animal.prototype.eat = function(amount) {
    console.log(`${this.name} is eating..`)
    this.energy += amount
}

Animal.prototype.sleep = function(length){
    console.log(`${this.name} is sleeping..`)
    this.energy -= length
}

const tiger = Animal('Tiger', 23)
tiger.eat(2)
tiger.sleep(2)


//without protype 

function AnimalWithNew(name, energy) {
    // let AnimalWithNew = Object.create(AnimalWithNew.prototype)
    this.name = name
    this.energy = energy
    // return AnimalWithNew
}

AnimalWithNew.prototype.eat = function(amount) {
    console.log(`${this.name} is eating..`)
    this.energy += amount
}

AnimalWithNew.prototype.sleep = function(length){
    console.log(`${this.name} is sleeping..`)
    this.energy -= length
}

const panda = new AnimalWithNew('panda', 5)

panda.eat(6)