/*

//function to grab value
function newTask() {

    let taskInput = document.getElementById('addTask').value;
    //console.log = taskInput;
    if(taskInput != ''){
        addTask(taskInput);
    }
    document.getElementById('addTask').value = '';

}

//build to the todo list
function addTask(item) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <button class="taskList-btns"><i class="far fa-check-square"></i></button>
        <span class="taskItem">${item}</span>
        <button class="taskList-btns"><i class="far fa-times-circle"></i></button>
    `;

    li.classList.add('addedTask');
    ul.appendChild(li);
}*/

//grab form & user input
const taskForm = document.querySelector('.taskForm');
const taskInput = document.querySelector('.addTask');
const todoTaskList = document.querySelector('.todoTaskList');

//create array and add task information to array
//export let todoList = [];
//import {saveLocal} from './ls';
let todoList = [];
taskForm.addEventListener('submit', function(event) {
    event.preventDefault();
    addTask(taskInput.value);
});

function addTask(item) {
    if(item != '') {
        const todo = {
            id: Date.now(),
            content: item,
            completed: false
        };
        todoList.push(todo);
        //call function to display tasks
        saveLocal(todoList);
        taskInput.value = '';
    }
}

//function to display tasks and new buttons
function displayTask(todoList){

    todoTaskList.innerHTML = '';
    todoList.forEach(function(item) {
        const checked = item.completed ? 'checked': null;

        const li = document.createElement('li');
        li.setAttribute('class', 'addedTask');
        li.setAttribute('data-key', item.id);

        if(item.completed === true) {
            li.classList.add('checked');
        }
        li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>${item.content}
        <button type="button" class="taskList-btns">X</button>
        `;
        todoTaskList.append(li);
        counter();
    });
}

function saveLocal(todoList){
    localStorage.setItem('todoList', JSON.stringify(todoList));
    displayTask(todoList);
}

function loadLocal() {
    const listLocal = localStorage.getItem('todoList');
    if (listLocal) {
        todoList = JSON.parse(listLocal);
        displayTask(todoList);
    }
}
loadLocal();

//functions to delete, etc..
function deleteTask(id) {
    
    todoList = todoList.filter(todo => todo.id != id);
    console.log('clicked it');
    saveLocal(todoList);
};

function toggle(id) {
    todoList.forEach(function(item) {
        if(item.id == id) {
            item.completed = !item.completed;
        }
    });
    //update list
    saveLocal(todoList);
}
todoTaskList.addEventListener('click', function(event) {
    if(event.target.type === 'checkbox') {
        toggle(event.target.parentElement.getAttribute('data-key'));
    }

    if(event.target.classList.contains('taskList-btns')) {
        //deleteTask(event.target.parentElement.getAttribute('data-key'));
        const id = event.target.parentElement.getAttribute('data-key');
        //console.log(id);
        deleteTask(id);
    }
});

function counter(){
    const taskCount = document.getElementById('taskLeft');
    if(todoList != null) {
        taskCount.innerHTML = `
        ${todoList.length} Tasks
        `;
    }
}
counter();

