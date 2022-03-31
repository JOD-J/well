'use strict';


const globalStart = function () {
	const numberRandom = Math.floor(Math.random(1) * 100);
	console.log('numberRandom: ', numberRandom);
	
	const startGame = function () {
		let number = prompt('Угадай число от 1 до 100');
		if (number !== null) {
			number = number.trim();
		};

		if (+number === numberRandom) {
			alert('Поздравляю, Вы угадали!!!');
		} else if (+number > numberRandom && number !== null && number !== '') {
			alert('Загаданное число меньше');
			startGame();
		} else if (+number < numberRandom && number !== null && number !== '') {
			alert('Загаданное число больше');
			startGame();
		} else if (typeof (number) === 'string') {
			alert('Введи число!');
			startGame();
		} else if (number === null) {
			alert('Игра окончена');
		};
	};
	startGame();
};
globalStart();