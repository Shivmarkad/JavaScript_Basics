const { readFileSync } = require("fs");
const path = "./myToDoList.json";

const jsonString = readFileSync(path);
console.log(JSON.parse(jsonString));

let jsonData = {
    myName : "Shiv",
    myAge : 23
}

function toAddData(details,data){
    details.push(data);
}

toAddData()