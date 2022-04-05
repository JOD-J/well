'use strict';


let headerOneElem = document.querySelector('.header__one');
let headerTwoElem = document.querySelector('.header__two');

let resultOne;
let resultTwo;

let day = [
	'понедельник',
	'вторник',
	'среда',
	'четверг',
	'пятница',
	'суббота',
	'воскресенье'
];
let month = [
	'Январь',
	'Февраль',
	'Март',
	'Апрель',
	'Май',
	'Июнь',
	'Июль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
];


let getMilliseconds;
let getSeconds;
let getMinutes;
let getHours;
let getDay;
let getDate;
let getMonth;
let getFullYear;
let date;


let getDates = function () {
	date = new Date();
	getFullYear = date.getFullYear();
	getMonth = date.getMonth();
	getDate = date.getDate();
	getDay = date.getDay();
	getDay === 0 ? getDay = 6 : getDay = getDay - 1;
	getHours = date.getHours();
	getMinutes = date.getMinutes();
	getSeconds = date.getSeconds();
	getMilliseconds = date.getMilliseconds();
};


let resultMonth;
let timeHoursOne;
let timeMinutesOne;
let timeSecondsOne;

let timeHoursDepressionOne = function () {
	if (getHours === 1 || getHours === 21) {
		timeHoursOne = 'час';
	} else if (getHours === 2 || getHours === 3 || getHours === 4 || getHours === 22 || getHours === 23 || getHours === 24) {
		timeHoursOne = 'часa';
	} else {
		timeHoursOne = 'часов';
	};
};

let timeMinutesDepressionOne = function () {
	if (getMinutes === 1 || getMinutes === 21 || getMinutes === 31 || getMinutes === 41 || getMinutes === 51) {
		timeMinutesOne = 'минута';
	} else if (getMinutes === 2 || getMinutes === 3 || getMinutes === 4 ||
		getMinutes === 22 || getMinutes === 23 || getMinutes === 24 ||
		getMinutes === 32 || getMinutes === 33 || getMinutes === 34 ||
		getMinutes === 42 || getMinutes === 43 || getMinutes === 44 ||
		getMinutes === 52 || getMinutes === 53 || getMinutes === 54) {
		timeMinutesOne = 'минуты';
	} else {
		timeMinutesOne = 'минут';
	};
};


let timeSecondsDepressionOne = function () {
	if (getSeconds === 1 || getSeconds === 21 || getSeconds === 31 || getSeconds === 41 || getSeconds === 51) {
		timeSecondsOne = 'секунда';
	} else if (getSeconds === 2 || getSeconds === 3 || getSeconds === 4 ||
		getSeconds === 22 || getSeconds === 23 || getSeconds === 24 ||
		getSeconds === 32 || getSeconds === 33 || getSeconds === 34 ||
		getSeconds === 42 || getSeconds === 43 || getSeconds === 44 ||
		getSeconds === 52 || getSeconds === 53 || getSeconds === 54) {
		timeSecondsOne = 'секунды';
	} else {
		timeSecondsOne = 'секунд';
	};
};



let one = function () {
	timeSecondsDepressionOne();
	for (let i = 0; i < month.length; i++) {
		if (i === getMonth) {
			resultMonth = month[i];
		};
	};
	for (let i = 0; i < day.length; i++) {
		const element = day[i];
		if (i === getDay) {
			// resultOne = 'Сегодня ' + day[i] + ', ' + getDate + ' ' + resultMonth + ' ' + getFullYear + ', ' + getHours + ' час ' + getMinutes + ' минут ' + getSeconds + ' секунды';
			resultOne = `Сегодня ${day[i]}, ${getDate} ${resultMonth} ${getFullYear} года, ${getHours} ${timeHoursOne} ${getMinutes} ${timeMinutesOne} ${getSeconds} ${timeSecondsOne}`
		};
	};
	headerOneElem.textContent = resultOne;
};




let startDateOne = function () {
	let timer = setInterval(() => {
		timeHoursDepressionOne();
		timeMinutesDepressionOne();
		getDates();
		one();
	}, 1000);
};


let timeDayTwo = '';
let timeMonthTwo = '';
let timeHoursTwo = '';
let timeMinutesTwo = '';
let timeSecondsTwo = '';

let timeDayDepressionTwo = function () {
	if (getDay < 10) {
		timeDayTwo = 0;
	} else {
		timeDayTwo = '';
	};
};
let timeMonthDepressionTwo = function () {
	if (getMonth < 10) {
		timeMonthTwo = 0;
	} else {
		timeMonthTwo = '';
	};
};
let timeHoursDepressionTwo = function () {
	if (getHours < 10) {
		timeHoursTwo = 0;
	} else {
		timeHoursTwo = '';
	};
};
let timeMinutesDepressionTwo = function () {
	if (getMinutes < 10) {
		timeMinutesTwo = 0;
	} else {
		timeMinutesTwo = '';
	};
};
let timeSecondsDepressionTwo = function () {
	if (getSeconds < 10) {
		timeSecondsTwo = 0;
	} else {
		timeSecondsTwo = '';
	};
};

let two = function () {
	resultTwo = `${timeMonthTwo}${getDate}.${timeDayTwo}${getMonth + 1}.${getFullYear} - ${timeHoursTwo}${getHours}:  ${timeMinutesTwo}${getMinutes}:  ${timeSecondsTwo}${getSeconds}`;
	headerTwoElem.textContent = resultTwo;
};

startDateOne();
let startDateTwo = function () {
	let timer = setInterval(() => {
		timeDayDepressionTwo();
		timeMonthDepressionTwo();
		timeHoursDepressionTwo();
		timeMinutesDepressionTwo();
		timeSecondsDepressionTwo();
		two();
	}, 1000);
};
startDateTwo();