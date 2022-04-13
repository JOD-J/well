'use strict';

const body = document.querySelector('body');


const DomElement = function (selector, height, width, position, bg, fontSize, text, block, tops, rights) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.position = position;
	this.bg = bg;
	this.fontSize = fontSize;
	this.text = text;
	this.block = block;
	this.tops = tops;
	this.rights = rights;
};
DomElement.prototype.render = function () {
	body.innerHTML = '';
	const block = document.createElement(this.block);
	if (this.selector.match('#')) {
		block.id = this.selector.replace('#', '');
	} else if (this.selector.match('.')) {
		block.classList.add(this.selector.replace('.', ''))
	};
	block.style.height = this.height;
	block.style.width = this.width;
	block.style.background = this.bg;
	block.style.fontSize = this.fontSize;
	block.style.position = this.position;
	block.style.top = this.tops + 'px';
	block.style.left = this.rights + 'px';
	block.textContent = this.text;
	body.append(block);
};


let domElementClass;
const startGame = (tops, rights) => {
	if (tops === 0) {
		tops = 8;
	} else if (rights === 0) {
		rights = 8;
	};
	domElementClass = new DomElement('.block', '100px', '100px', 'absolute', 'brown', '20px', 'game', 'div', tops, rights);
	domElementClass.render();
};
startGame();

let tops = 0;
let rights = 0;
addEventListener('keydown', (event) => {
	const block = document.querySelector('.block');

	const key = event.key;
	if (key === 'ArrowUp') {
		tops = block.offsetTop - 10;
		startGame(tops, rights);
	} else if (key === 'ArrowRight') {
		rights = block.offsetLeft + 10;
		startGame(tops, rights);
	} else if (key === 'ArrowDown') {
		tops = block.offsetTop + 10;
		startGame(tops, rights);
	} else if (key === 'ArrowLeft') {
		rights = block.offsetLeft - 10;
		startGame(tops, rights);
	};
});