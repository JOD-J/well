'use strict';


let week = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
console.log('week: ', week);

let data = new Date();
let day = data.getDay();
console.log('day: ', day);

if (day === 0) {
	day = 6
} else {
	day = day - 1;
};


let headerElem = document.querySelector('.header');
console.log('headerElem: ', headerElem);

week.forEach((item, index) => {
	if (item === 'суббота' || item === 'воскресенье') {
		if (index === day) {
			headerElem.insertAdjacentHTML('beforeend', `
			<div><strong>${item}</strong></div>
			`);
		} else {
			headerElem.insertAdjacentHTML('beforeend', `
			<div><i>${item}</i></div>
			`);
		};
	} else if (index === day) {
		headerElem.insertAdjacentHTML('beforeend', `
		<div><strong>${item}</strong></div>
		`);
	} else {
		headerElem.insertAdjacentHTML('beforeend', `
		<div>${item}</div>
		`);
	};
});