'use strict';



const globalStart = function () {
	const numberRandom = Math.floor(Math.random(1) * 100);
	console.log('numberRandom: ', numberRandom);
	let count = 3;
	const startGame = function () {
		let number = prompt('Угадай число от 1 до 100');
		if (number !== null) {
			number = number.trim();
		};
		if (count == 1) {
			let res = confirm('Попытки закончились, хотите сыграть еще?');
			if (res) {
				globalStart();
			} else {
				alert('Игра окончена');
			};
		};
		if (+number === numberRandom) {
			let res = confirm(`Поздравляю, Вы угадали!!! загаданное число ${numberRandom}, Хотели бы сыграть еще?`);
			if (res) {
				globalStart();
			};
		} else if (+number > numberRandom && number !== null && number !== '' && count > 1) {
			--count;
			alert(`Загаданное число меньше, ваше число ${number}, осталось попыток ${count}`);
			startGame();
		} else if (+number < numberRandom && number !== null && number !== '' && count > 1) {
			--count;
			alert(`Загаданное число больше, ваше число ${number}, осталось попыток ${count}`);
			startGame();
		} else if (typeof (number) === 'string' && count > 1) {
			alert('Введи число!');
			startGame();
		} else if (number === null && count > 1) {
			alert('Игра окончена');
		};
	};
	startGame();
};
globalStart();