'use strict';

const nameFunc = function (string) {
	console.log('string: ', string.length);
	if (typeof (string) === 'string' && string !== undefined && string !== null && string !== '') {
		if (string.length >= 30) {
			let result = string.substring(0, 30 ) + '...';
			console.log('result: ', result);
			console.log('string.length больше 30');
		} else {
			console.log('string.length меньше 30');
		}
	} else {
		console.log('передана не строка');
	};
};

let string = '   1234567891123456789112345678911234567891123456789112345678911234567891       ';
string = string.trim();
// let string = prompt().trim();

nameFunc(string);