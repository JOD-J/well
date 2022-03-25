'use strict';

let lang = prompt(`'ru' 'en'`);
// console.log('lang: ', lang);

// let lang = 'en';
let arrDateRu = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
let arrDateEn = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

if (lang === 'ru') {
	arrDateRu.forEach(item => {
		console.log('item: ', item);
	});
} else if (lang === 'en') {
	arrDateEn.forEach(item => {
		console.log('item: ', item);
	});
} else {
	console.log('не правильно ввели язык');
};

switch (lang) {
	case 'ru':
	for (let i = 0; i < arrDateRu.length; i++) {
		const item = arrDateRu[i];
		console.log('item: ', item);
	}
		break;
	case 'en':
		for (let i = 0; i < arrDateEn.length; i++) {
			const item = arrDateEn[i];
			console.log('item: ', item);
		}
		break;
	default:
		console.log('не правильно ввели язык');
		break;
};

let namePerson = prompt('Ваше имя');
// let namePerson = 'Максим';

let pesponse = namePerson === 'Артем'  ? namePerson + ' директор' :  namePerson === 'Максим' ? namePerson + ' преподаватель' : namePerson + ' студент';
console.log('pesponse: ', pesponse);