const fs = require('fs');
const prompt = require("prompt-sync")();
const myToDoList = require("./myToDoList.json")
const fileName = "myToDoList.json"


function toReadJson(fileName) {

    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.log('Error reading JSON file:', err);
            return;
        }
        try {
            var jsonData = JSON.parse(data);
            console.log("This the data reading from readfile method ", jsonData)
        } catch (error) {
            console.log('Error parsing JSON data:', error);
        }
    });
}

function toWriteData(fileName, data) {

    const jsonData1 = JSON.stringify(data, null, 2);

    fs.writeFile(fileName, jsonData1, 'utf8', (err) => {
        if (err) {
            console.log('Unable to update JSON file:', err);
        } else {
            console.log('Task has been saved.');
        }
    });

}

function toAddTask(data, newTaskObj) {
    
    let newId = toGenrateNewId(data)

    data[newId] = newTaskObj;
    // data.push(item);
    console.log(`Task added succesfully and corresponding task Id ${newId}`);

};

function toGenrateNewId(data) {

    let keyOfObj = Object.keys(data);

    let lenOfObj = keyOfObj.length;

    let arrint = keyOfObj.map(rh => parseInt(rh))

    let maxId = Math.max(...arrint)

    if (lenOfObj == 0) {
        return 1
    } else {
        return maxId + 1;
    }
}

function toDisplayTaskById(data, id) {

    console.log(data[id]);

}
//to delete existing task
//to update existing details 


var userInput = "yes";

while (userInput == "yes") {

    // let validEntries = ["1","2","3","4","5"];

    // let userInput = prompt(`Enter the corresponding number to perform action:
    // 1 : To Display all the task
    // 2 : To Add new task
    // 3 : To display the task with ID
    // 4 : To update the existing task with Id
    // 5 : To delete the existing task with Id
    // `)

    var userInput = prompt("Do you want to create task ? : ").toLowerCase()

    if (userInput == "yes") {
        var task = prompt("What is your task? -").toLowerCase();
        var desc = prompt("What is the description of the task.? -");

        let taskObj = {
            Task : task,
            Desc : desc
        }
        toAddTask(myToDoList, taskObj);
    }

    if (userInput == "no") {
        var listTask = prompt("Do you want to list the task ? ").toLowerCase()

        if (listTask == "yes") {
            console.log(myToDoList)
        }
    }
    let getTask = prompt("You want to display task by Id ?").toLowerCase()
    let givenId = prompt("What is the Id")

    if (getTask == "yes"){
        toDisplayTaskById(myToDoList,givenId)
    }

}
toWriteData(fileName, myToDoList);

// console.log(toDisplayTaskById(myToDoList,2));


// toReadJson(fileName)

// myToDoList.push(myPro)

// console.log(myToDoList)

// toWriteData(fileName, jsonData)
// console.log(jsonData)
// toCheckId(myPro)
// toDisplayTaskById(jsonData,1)
// let i = 1;

// console.log(Object.keys(myToDoList[0])==1); //return true

// console.log(toDisplayTaskById(myToDoList,1));