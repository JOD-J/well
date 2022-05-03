'use strict';

class Todo {
	constructor(form, input, todoList, todoCompleted, todoContainer) {
		this.form = document.querySelector(form);
		this.input = document.querySelector(input);
		this.todoList = document.querySelector(todoList);
		this.todoCompleted = document.querySelector(todoCompleted);
		this.todoContainer = document.querySelector(todoContainer);
		this.todoData = new Map(JSON.parse(localStorage.getItem('toDolist')));
	}

	// ? ===================================================== addToStorage ======================================================
	addToStorage() {
		localStorage.setItem('toDolist', JSON.stringify([...this.todoData]));
	}
	// ? ===================================================== addToStorage ======================================================


	// ? ===================================================== render ======================================================
	render() {
		this.todoList.textContent = '';
		this.todoCompleted.textContent = '';
		this.todoData.forEach(this.createItem, this);
		this.addToStorage();
	}
	// ? ===================================================== render ======================================================


	// ? ===================================================== createItem ======================================================
	createItem(todo) {
		const li = document.createElement('li');
		li.classList.add('todo-item');
		li.id = todo.key;
		li.insertAdjacentHTML('beforeend', `
			<span class="text-todo">${todo.value}</span>
			<div class="todo-buttons">
				<button class="todo-edit"></button>
				<button class="todo-remove"></button>
				<button class="todo-complete"></button>
			</div>
		`);
		if (todo.completed) {
			this.todoCompleted.append(li);
		} else {
			this.todoList.append(li);
		};
	}
	// ? ===================================================== createItem ======================================================


	// ? ===================================================== addTodo ======================================================
	addTodo(e) {
		e.preventDefault();
		if (this.input.value.trim()) {
			const newTodo = {
				value: this.input.value,
				completed: false,
				key: this.generateKey(),
			};
			this.todoData.set(newTodo.key, newTodo);
			this.input.placeholder = 'Какие планы?';
			this.input.value = '';
			this.render();
		} else {
			this.input.placeholder = 'поле не может быть пустым';
		};
	}
	// ? ===================================================== addTodo ======================================================


	// ? ===================================================== generateKey ======================================================
	generateKey() {
		return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
	}
	// ? ===================================================== generateKey ======================================================


	// ? ===================================================== deleteItem ======================================================
	deleteItem(id, li) {
		li.classList.add('removeItem');
		setTimeout(() => {
			this.todoData.forEach((item, index) => {
				if (id === index) {
					this.todoData.delete(index);
					this.render();
				};
			});
		}, 400);
	}
	// ? ===================================================== deleteItem ======================================================


	// ? ===================================================== completedItem ======================================================
	completedItem(id, li) {
		li.classList.add('removeItem');
		setTimeout(() => {
			this.todoData.forEach((item, index) => {
				if (id === index) {
					item.completed = !item.completed;
					this.render();
				};
			});
		}, 400);
	}
	// ? ===================================================== completedItem ======================================================


	// ? ===================================================== editingItem ======================================================
	editingItem(id, span) {
		span.setAttribute('contenteditable', true);
		span.focus();
		span.onblur = () => {
			span.setAttribute('contenteditable', false);
			this.todoData.forEach((item, index) => {
				if (id === index) {
					item.value = span.textContent;
					this.addToStorage();
				};
			});
		};
	}
	// ? ===================================================== editingItem ======================================================


	// ? ===================================================== handler ======================================================
	handler(event) {
		const target = event.target;
		if (target.matches('.todo-remove')) {
			this.deleteItem(target.parentElement.parentElement.id, target.parentElement.parentElement);
		} else if (target.matches('.todo-complete')) {
			this.completedItem(target.parentElement.parentElement.id, target.parentElement.parentElement);
		} else if (target.matches('.todo-edit')) {
			this.editingItem(target.parentElement.parentElement.id, target.parentElement.parentElement.children[0]);
		};
	}
	// ? ===================================================== handler ======================================================


	// ? ===================================================== init ======================================================
	init() {
		this.form.addEventListener('submit', this.addTodo.bind(this));
		this.todoContainer.addEventListener('click', this.handler.bind(this));
		this.render();
	}
	// ? ===================================================== init ======================================================
}

const todo = new Todo('.todo-control', '.header-input', '.todo-list', '.todo-completed', '.todo-container');

todo.init();