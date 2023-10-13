// importing module fs to write and read json file

// var fs = require("fs");

let myToDoList = [];

const prompt = require("prompt-sync")();

var userInput = "yes"
var listTask = "no"

// Gets user input
while (userInput == "yes") {

    var userInput = prompt("Do you want to create task ? : ").toLowerCase()

    if (userInput == "yes") {
        var task = prompt("What is your task?").toLowerCase()
    }

    if (userInput == "no") {
        var listTask = prompt("Do you want to list the task ? ").toLowerCase()
        
        if (listTask == "yes") {
            console.log(myToDoList)
        }
    }

    myToDoList.push(task);
}


