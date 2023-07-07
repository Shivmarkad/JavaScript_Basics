const fs = require('fs');
const prompt = require("prompt-sync")();
const myToDoList = require("./myToDoList.json");
const fileName = "myToDoList.json"

//To Read the file
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
    return;
}
//To write data into the file
function toWriteData(fileName, data) {

    const jsonData1 = JSON.stringify(data, null, 2);

    fs.writeFile(fileName, jsonData1, 'utf8', (err) => {
        if (err) {
            console.log('Unable to update JSON file:', err);
        } else {
            console.log('To_Do_List has been saved.');
        }
    });

}
//To Add new task
function toAddTask(data) {
    let newTask = prompt("What is you task : ");
    let desc = prompt("What is the description of the task : ");
    let newTaskObj = {
        Task: newTask,
        Desc: desc
    }
    let newId = toGenrateNewId(data)
    data[newId] = newTaskObj;

    console.log(`Task added succesfully and corresponding task Id is ${newId}`);
    return;
};

//To Generate new id
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
//To display the task by id
function toDisplayTaskById(data) {
    let id = prompt("What is the Id to get the Task :")
    console.log(data[id]);
}
//to delete existing task
function toDeleteTaskById(data) {

    let id = prompt("What is the Id to delete the Task :")
    delete data[id];
    console.log(`Task with Id : ${id} has been deleted succesfully`)
    return;
}

//to update existing details
function toUpdateData(data) {

    let id = prompt("Enter the task Id which has to be updated : ");
    let task = prompt("What is you task ? ");
    let desc = prompt("What is the description of the task ? ");
    let newTaskObj = {
        Task: task,
        Desc: desc
    }
    data[id] = newTaskObj;
    console.log("Task updated succesfully");

}

var userInput1 = prompt(`Enter the corresponding number to perform action:
    1 : To Display all the task
    2 : To Add new task
    3 : To display the task with ID
    4 : To update the existing task with Id
    5 : To delete the existing task with Id
    `)
var userInput = parseInt(userInput1)

switch (userInput) {
    case 1:
        console.log("This is the case 1")
        toReadJson(fileName)
        break;
    case 2:
        console.log("This is the case 2")
        toAddTask(myToDoList)

        break;
    case 3:
        console.log("This is the case 3")
        toDisplayTaskById(myToDoList)
        break;
    case 4:
        console.log("This is the case 4")
        toUpdateData(myToDoList)
        break;
    case 5:
        console.log("This is the case 5")
        toDeleteTaskById(myToDoList)
        break;
    default:
        console.log('Invalid Entry');
}
toWriteData(fileName, myToDoList);