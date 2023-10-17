//synchronous statements

function fun1(){
    console.log('func1')
}

function fun2(){
    console.log('func2')
}

function fun3(){
    console.log('func3')
}

//calling functions sequencially
fun1()
fun2()
fun3()


//asynchronous statements

function printName(name){
    console.log(`Your name is ${name}`)
}

function printLastName(lastName){
    console.log(`Your lastname is ${lastName}`)
}

function main(name, lastName){
    console.log("hello there from main")

    //will be added in callback queue/Task queue
    setTimeout(()=>{
        printLastName(lastName)
    },0)

    //Mircro task
    new Promise((resolve, reject)=>{
        resolve("Hey I'm from promise")
    }).then(res=>console.log(res))

    printName(name)
}

main('shiv', 'Markad')