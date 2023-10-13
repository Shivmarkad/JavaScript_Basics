const fs = require('fs');
const prompt = require('prompt-sync')();
const fileName = 'toDoList.json';

function loadTodoList() {
  try {
    const data = fs.readFileSync(fileName, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error('Error loading the to-do list:', err);
    return [];
  }
}

function displayTodoList(todoList) {
  console.log('To-Do List:');
  for (let i = 0; i < todoList.length; i++) {
    console.log(`${i + 1}. ${todoList[i].Task}`);
  }
}

function saveData(data) {
  const jsonData = JSON.stringify(data, null, 2);

  try {
    fs.writeFileSync(fileName, jsonData, 'utf8');
    console.log('Data has been saved to', fileName);
  } catch (err) {
    console.error('Error saving data:', err);
  }
}

let todoList = loadTodoList();

// Gets user input
let userInput = 'yes';
while (userInput === 'yes') {
  userInput = prompt('Do you want to create a task? (yes/no): ').toLowerCase();

  if (userInput === 'yes') {
    const taskNo = prompt('What is the task number? ').toLowerCase();
    const task = prompt('What is your task? ').toLowerCase();

    const data1 = {
      Task_Number: taskNo,
      Task: task
    };

    todoList.push(data1);
  } else if (userInput === 'no') {
    const listTask = prompt('Do you want to list the tasks? (yes/no): ').toLowerCase();

    if (listTask === 'yes') {
      displayTodoList(todoList);
    }
  }
}

saveData(todoList);
