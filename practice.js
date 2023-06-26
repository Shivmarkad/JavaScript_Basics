
let first_rejected_promise = new Promise((resolve, reject) => {
    reject("First Rejected Promise.....");
});

let second_rejected_promise = new Promise((resolve, reject) => {
    reject("Second Rejected Promise...");
});

let third_rejected_promise = new Promise((resolve, reject) => {
    reject("Third Rejected Promise....");
});

try {
    let result_1 = Promise.any([
        first_rejected_promise,
        second_rejected_promise,
        third_rejected_promise,
    ]);

    result_1.then((data) => console.log("Any's data: " + data));    

    let result_2 = Promise.race([
        first_rejected_promise,
        second_rejected_promise,
        third_rejected_promise,
    ]);

    result_2.then((data) => console.log("Race's data: " + data));
} catch (error) {
    console.log(error);
}
