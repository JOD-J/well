const startTimer = () => {
	let headerElem = document.querySelector('.header');
	let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
	let startSetInterval = setInterval(() => {


		let date = new Date();
		let day = date.getDay();
		let hours = date.getHours();
		let minutes = date.getMinutes();
		let seconds = date.getSeconds();
		days.forEach((item, index) => {
			if (index === day - 1) {
				day = item;
			};
		});
		headerElem.innerHTML = '';
		headerElem.insertAdjacentHTML('beforeend', `
		<div>${hours > 0 && hours < 6 ? 'Доброй ночи' : hours >= 6 && hours < 12 ? 'Доброу утро' : hours >= 12 && hours < 18 ? 'Добрый день' :  hours >= 18 && hours < 24	? 'Добрый вечер' : ''}</div>
		<div>Сегодня: ${day}</div>
		<div>Текущее время: ${hours < 10 ? '0' + hours : hours} : ${minutes < 10 ? '0' + minutes : minutes} : ${seconds < 10 ? '0' + seconds : seconds} PM</div>
		<div>До нового года осталось: ${Math.floor((new Date('31 december 2022').getTime() - date.getTime())  / 1000 / 60 / 60 / 24)} дней</div>
		`);
	}, 1000);
};

startTimer();