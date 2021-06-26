/*jshint esversion: 8 */
/* jshint node: true */
'use strict';

const todoControl = document.querySelector('.todo-control');
const headerInput = document.querySelector('.header-input');
const todoList = document.querySelector('.todo-list');
const todoCompleted = document.querySelector('.todo-completed');

let todoData = [];

const remove = function() {
    let btnRemove = document.querySelectorAll('.todo-remove');
    Array.from(btnRemove).forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        todoData.forEach(function(item, i) {
            if (item.value===event.target.parentNode.parentNode.firstElementChild.textContent) {
                todoData.splice(i,1);
                render();
                localStorage.setItem('task', JSON.stringify(todoData));
            }
        });
    });
});
};

const render = function() {
    todoList.textContent = '';
    todoCompleted.textContent = '';
    todoData.forEach(function(item) {
        let li = document.createElement('li');
        li.classList.add('todo-item');
        li.innerHTML = `<span class="text-todo">${item.value}</span>
        <div class="todo-buttons"><button class="todo-remove">
        </button><button class="todo-complete"></button></div>`;

        const btnCompleted = li.querySelector('.todo-complete');
        btnCompleted.addEventListener('click', function() {
            item.completed = !item.completed;
            localStorage.setItem('task', JSON.stringify(todoData));
            render();
        });
        if(item.completed) {
            todoCompleted.append(li);
        } else {
            todoList.append(li);
        }
    });
    remove();
};

if (localStorage.getItem('task')) {
    todoData = JSON.parse(localStorage.getItem('task'));
    render();
};

todoControl.addEventListener('submit', event => {
    event.preventDefault();
    if(headerInput.value.trim() === '') {
        headerInput.value = '';
        return;
    } else {
        const newTodo = {
            value: headerInput.value,
            completed: false
        };
        todoData.push(newTodo);
        render();  
        localStorage.setItem('task', JSON.stringify(todoData));   
        headerInput.value = '';
    }
});







