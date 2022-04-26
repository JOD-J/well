'use strict';
// ! таймер
// ? =============================================== countTimer ===============================================
function countTimer(deadLine) {
	let timerHoursElem = document.querySelector('#timer-hours');
	let timerMinutesElem = document.querySelector('#timer-minutes');
	let timerSecondsElem = document.querySelector('#timer-seconds');

	// * =============================================== getTimeRemaining ===============================================
	function getTimeRemaining() {
		let dateStop = new Date(deadLine).getTime();
		let dateNow = new Date().getTime();
		let timeRemaining = (dateStop - dateNow) / 1000;
		let seconds = Math.floor(timeRemaining % 60);
		let minutes = Math.floor((timeRemaining / 60) % 60);
		let hours = Math.floor(timeRemaining / 60 / 60);
		return {
			seconds,
			minutes,
			hours,
			timeRemaining
		};
	};
	// * =============================================== getTimeRemaining ===============================================


	// * =============================================== updateClock ===============================================
	function updateClock() {
		let startSetInterval = setInterval(() => {
			let timer = getTimeRemaining();
			if (timer.timeRemaining > 0) {
				if (timer.seconds < 10) {
					timer.seconds = '0' + timer.seconds;
				} else if (timer.minutes < 10) {
					timer.minutes = '0' + timer.minutes;
				} else if (timer.hours < 10) {
					timer.hours = '0' + timer.hours;
				};
				timerSecondsElem.textContent = timer.seconds;
				timerMinutesElem.textContent = timer.minutes;
				timerHoursElem.textContent = timer.hours;
			} else {
				timerSecondsElem.textContent = '00';
				timerMinutesElem.textContent = '00';
				timerHoursElem.textContent = '00';
				clearInterval(startSetInterval);
			};
		}, 1000);
	};
	updateClock();
	// * =============================================== updateClock ===============================================
};
countTimer('30 April 2022');
// ? =============================================== countTimer ===============================================


// ! менюшка
// ? =============================================== toggleMenu ===============================================
const toggleMenu = () => {
	const btnMenuElem = document.querySelector('.menu');
	const menuElem = document.querySelector('menu');
	const closeBtnElem = document.querySelector('.close-btn');
	const menuItemsElems = menuElem.querySelectorAll('ul>li>a');
	const mainAElem = document.querySelector('main>a');
	let isOpen = true;
	let countInterval = 0;
	// * =============================================== handlerMenu ===============================================
	const handlerMenu = () => {
		if (isOpen) {
			isOpen = false;
			if (window.innerWidth > 768) {
				const startSetInterval = setInterval(() => {
					countInterval++;
					if (countInterval <= 100) {
						menuElem.style.transform = `translateX(${countInterval}%)`;
					} else {
						clearInterval(startSetInterval);
					};
				}, 4);
			} else {
				menuElem.style.transform = `translateX(100%)`;
			}
		} else {
			isOpen = true;
			countInterval = 0;
			menuElem.style.transform = `translateX(-100%)`;
		};
	};
	// * =============================================== handlerMenu ===============================================
	
	
	// ! плавный скрол меню и блока под майном
	// * =============================================== scroll ===============================================
	const scroll = (item) => {
		const blockID = item.getAttribute('href');
		document.querySelector(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	};
	// * =============================================== scroll ===============================================
	
	
	// * =============================================== обработчики ===============================================
	btnMenuElem.addEventListener('click', handlerMenu);
	closeBtnElem.addEventListener('click', handlerMenu);
	menuItemsElems.forEach(item => {
		item.addEventListener('click', handlerMenu);
		item.addEventListener('click', event => {
			event.preventDefault();
			scroll(item);
		});
	});
	mainAElem.addEventListener('click', event => {
		event.preventDefault();
		scroll(mainAElem);
	});
	// * =============================================== обработчики ===============================================
};
toggleMenu();
// ? =============================================== toggleMenu ===============================================


// ! popup
// ? =============================================== togglePopUp ===============================================
const togglePopUp = () => {
	const popupElem = document.querySelector('.popup');
	const popupBtnElem = document.querySelectorAll('.popup-btn');
	const popupCloseElem = document.querySelector('.popup-close');
	popupBtnElem.forEach(item => {
		item.addEventListener('click', () => {
			popupElem.style.display = 'block';
		});
	});
	popupCloseElem.addEventListener('click', () => {
		popupElem.style.display = 'none';
	});
};
togglePopUp();
// ? =============================================== togglePopUp ===============================================

