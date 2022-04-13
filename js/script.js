'use strict';

const body = document.querySelector('body');

const DomElement = function (selector, height, width, bg, fontSize, text, block) {
	this.selector = selector;
	this.height = height;
	this.width = width;
	this.bg = bg;
	this.fontSize = fontSize;
	this.text = text;
	this.block = block;
};
DomElement.prototype.render = function () {

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
	block.textContent = this.text;
	body.append(block);
};

const domElementClass = new DomElement('.block', '300px', '300px', 'brown', '20px', 'domElementClass', 'div');
domElementClass.render();
const domElementId = new DomElement('#best', '200px', '200px', 'blue', '30px', 'domElementId', 'p');
domElementId.render();