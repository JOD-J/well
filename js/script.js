'use strict';


const todoControlElem = document.querySelector('.todo-control');
const todoListElem = document.querySelector('.todo-list');
const todoCompletedElem = document.querySelector('.todo-completed');
const headerInputElem = document.querySelector('.header-input');


let getItem = JSON.parse(localStorage.getItem('arr'));
let todoData = [];
if (getItem !== null) {
	todoData = JSON.parse(localStorage.getItem('arr'));
};


const render = () => {
	todoListElem.innerHTML = '';
	todoCompletedElem.innerHTML = '';
		todoData.forEach((item, index) => {
			const li = document.createElement('li');
			li.classList.add('todo-item');
			li.innerHTML = `
			<span class="text-todo">${item.value}</span>
			<div class="todo-buttons">
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
			`;
			if (item.completed) {
				todoCompletedElem.append(li);
			} else {
				todoListElem.append(li);
			};
			const todoCompleteElem = li.querySelector('.todo-complete');
			todoCompleteElem.addEventListener('click', () => {
				item.completed = !item.completed;
				render();
			});
			const todoRemoveElem = li.querySelector('.todo-remove');
			todoRemoveElem.addEventListener('click', () => {
				todoData.splice(index, 1);
				render();
			});
		});
		localStorage.setItem('arr', JSON.stringify(todoData));
};

todoControlElem.addEventListener('submit', (event) => {
	event.preventDefault();
	headerInputElem.value = headerInputElem.value.trim();
	if (headerInputElem.value !== '') {
		const newTodo = {
			value: headerInputElem.value,
			completed: false,
		};
		todoData.push(newTodo);
		localStorage.setItem('arr', JSON.stringify(todoData));
		render();
		headerInputElem.value = '';
	};
});
render();