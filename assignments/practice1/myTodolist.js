// importing fs module to perform write and read on JSON File

var fs = require("fs")
const prompt = require("prompt-sync")();
const fileName = "toDoList.json";
var userInput = "yes"
var listTask = "no"
const todoList = loadTodoList()

function loadTodoList() {
    try {
        const data = fs.readFileSync(fileName, 'utf8');
        const jsonData = JSON.stringify(data); 
        return jsonData;
    } catch (err) {
        console.error('Error loading the to-do list:', err);
        return [];
    }
}

function displayTodoList() {
    console.log('To-Do List:');
    for (let i = 0; i < todoList.length; i++) {
        console.log(`${i + 1}. ${todoList[i]}`);
    }
}

function addTodoItem(toDoList,item){
    toDoList.push(item);
}

function saveData(data) {

    const jsonData = JSON.parse(data)
  
    try {
      fs.writeFileSync(fileName, jsonData, 'utf8');
      console.log('Data has been saved to', filePath);
    } catch (err) {
      console.error('Error saving data:', err);
    }
  }
  


// Gets user input
while (userInput == "yes") {

    var userInput = prompt("Do you want to create task ? : ").toLowerCase()

    if (userInput == "yes") {
        var taskNo = prompt("What is the task no ?").toLowerCase()
        var task = prompt("What is your task?").toLowerCase()

    }

    if (userInput == "no") {
        var listTask = prompt("Do you want to list the task ? ").toLowerCase()

        if (listTask == "yes") {
            displayTodoList();
        }
    }
    var data1 = {
        Task_Number: taskNo,
        Task: task
    }

    console.log(todoList)   
    // addTodoItem(todoList, data1);

}

saveData(todoList);