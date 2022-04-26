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
	const menuElem = document.querySelector('menu');
	let isOpen = true;
	let countInterval = 0;
	// * =============================================== handlerMenu ===============================================
	const handlerMenu = (isOpen) => {
		if (isOpen) {
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
	document.addEventListener('click', event => {
		let target = event.target;
		if (target.closest('.menu')) {
			isOpen = true;
			handlerMenu(isOpen);
		} else if (target.closest('.close-btn')) {
			isOpen = false;
			handlerMenu(isOpen);
		} else if (target.closest('menu>ul>li>a')) {
			isOpen = false;
			handlerMenu(isOpen);
			event.preventDefault();
			scroll(target);
		} else if (target.closest('main>a')) {
			event.preventDefault();
			scroll(target.parentElement);
		} else if (!target.closest('menu')) {
			isOpen = false;
			handlerMenu(isOpen);
		};
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
	popupBtnElem.forEach(item => {
		item.addEventListener('click', () => {
			popupElem.style.display = 'block';
		});
	});
	popupElem.addEventListener('click', event => {
		let target = event.target;
		if (target.classList.contains('popup-close')) {
			popupElem.style.display = 'none';
		} else {
			target = target.closest('.popup-content');
			if (!target) {
				popupElem.style.display = 'none';
			};
		};
	});
};
togglePopUp();
// ? =============================================== togglePopUp ===============================================


// ! табы 
// ? =============================================== tabs ===============================================
const tabs = () => {
	const tabHeaderElem = document.querySelector('.service-header');
	const tabElem = document.querySelectorAll('.service-header-tab');
	const tabContenetElem = document.querySelectorAll('.service-tab');


	// * =============================================== toggleTabContent ===============================================
	const toggleTabContent = (index) => {
		tabContenetElem.forEach((item, inde) => {
			if (index === inde) {
				tabElem[inde].classList.add('active');
				tabContenetElem[inde].classList.remove('d-none');
			} else {
				tabElem[inde].classList.remove('active');
				tabContenetElem[inde].classList.add('d-none');
			};
		})
	};
	// * =============================================== toggleTabContent ===============================================


	// * =============================================== обработчик ===============================================
	tabHeaderElem.addEventListener('click', (event) => {
		let target = event.target;
		target = target.closest('.service-header-tab');
		if (target) {
			tabElem.forEach((item, index) => {
				if (item === target) {
					toggleTabContent(index);
				};
			});
		};
	});
	// * =============================================== обработчик ===============================================

};
tabs();
// ? =============================================== tabs ===============================================