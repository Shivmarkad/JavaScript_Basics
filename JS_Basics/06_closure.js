
function counter() {
    let count = 0;
    return function incrementCount() {
        count++
        console.log(count)
    }
}

let myCount1 = counter()

myCount1()
myCount1()
myCount1()

let myCount2 = counter() //creates new copy
myCount2()