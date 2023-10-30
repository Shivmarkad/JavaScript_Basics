// The Liskov substitution principle states that any class should be 
// substitutable for its parent class without unexpected consequences.

// shape class 
class Shape {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    getArea(){
        return this.width * this.height
    }
}

// Rectangle class extends Shape class properties
class Rectangle extends Shape {
    constructor(height, width){
        super(height,width)
    }
    setHeight(newHeight) {
        this.height = newHeight;
    }
}

// square class extends Shape class properties
class Square extends Shape {
    constructor(height, width){
        super(height,width)
    }
}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Height: ${square.height} , Width: ${square.width} of the square`)
console.log(`Height: ${rectangle.height} , Width: ${rectangle.width} of the rectangle`)

// can set height of rectangle
rectangle.setHeight(7)

 // after chaning the height of rectangle
console.log(`Height: ${rectangle.height} , Width: ${rectangle.width} of the rectangle after change in height`)

