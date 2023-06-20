// // In JavaScript, promises are special objects that help you perform asynchronous operations.

function f1() {
    console.log("This is function 1");
}

function f2() { 
    console.log('This is function 2');
}

function f3() { 
    console.log('This is function 3');
}

function main() {
    console.log('main');

    setTimeout(f1, 50);             //Setting timing for function execution
    setTimeout(f3, 30);             //Setting timing for function execution 

    new Promise((resolve, reject) =>
        resolve('I am a first Promise for resolve'))
        .then(resolve1 => console.log(resolve1))
        .catch(error1 => console.log(error1));
    
    new Promise((resolve, reject) =>{

        setTimeout(() => {
            console.log("This is a promise for rejection")        //This will print aftet this promise 
        }, 0);

        console.log("This is a promise for rejection /console")            //This will print after main
        
        reject('I am rejection')
    }
    )
    .then(resolve => console.log(resolve))
    .catch(error => console.log(error));

    f2();
}

main();                                             //Calling the main function 