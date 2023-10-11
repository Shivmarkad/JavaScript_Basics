//curring

function multi(a) {
    return function calc(b){
        return a * b
    }
}

const getMult = multi(34)(45)

console.log(getMult);