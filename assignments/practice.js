const a = [1, 2, 4, 8]

const b = a.reduce((b, c)=>{
    // console.log(b)
    return b + c
},)

console.log(b)