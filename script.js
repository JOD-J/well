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
countTimer('30 April 2023');
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

// ! слайдер 
// ? =============================================== tabs ===============================================
const slider = () => {
	const slideElem = document.querySelectorAll('.portfolio-item');
	const portfolioDotsElem = document.querySelector('.portfolio-dots');
	const sliderElem = document.querySelector('.portfolio-content');

	let currentSlide = 0;
	let interval;

	// * =============================================== addDot ===============================================
	const addDot = () => {
		slideElem.forEach((item, index) => {
			let li = document.createElement('li');
			li.classList.add('dot');
			if (index === 0) {
				li.classList.add('dot-active');
			}
			portfolioDotsElem.append(li);
		});
	};
	addDot();
	// * =============================================== addDot ===============================================


	// * =============================================== prevSlide ===============================================
	const prevSlide = (item, index, strClass) => {
		item[index].classList.remove(strClass);
	};
	// * =============================================== prevSlide ===============================================


	// * =============================================== nextSlide ===============================================
	const nextSlide = (item, index, strClass) => {
		item[index].classList.add(strClass);
	};
	// * =============================================== nextSlide ===============================================


	// * =============================================== autoPlaySlide ===============================================
	const autoPlaySlide = () => {
		const dotElem = document.querySelectorAll('.dot');
		prevSlide(slideElem, currentSlide, 'portfolio-item-active');
		prevSlide(dotElem, currentSlide, 'dot-active');
		currentSlide++;
		if (currentSlide >= slideElem.length) {
			currentSlide = 0;
		};
		nextSlide(slideElem, currentSlide, 'portfolio-item-active');
		nextSlide(dotElem, currentSlide, 'dot-active');
	};
	// * =============================================== autoPlaySlide ===============================================


	// * =============================================== startSlide ===============================================
	const startSlide = (time) => {
		interval = setInterval(autoPlaySlide, time);
	};
	// * =============================================== startSlide ===============================================


	// * =============================================== stopSlide ===============================================
	const stopSlide = () => {
		clearInterval(interval);
	};
	// * =============================================== stopSlide ===============================================


	// * =============================================== события ===============================================
	sliderElem.addEventListener('click', event => {
		event.preventDefault();
		let target = event.target;
		if (target.matches('.portfolio-btn, .dot')) {
			const dotElem = document.querySelectorAll('.dot');
			prevSlide(slideElem, currentSlide, 'portfolio-item-active');
			prevSlide(dotElem, currentSlide, 'dot-active');
			if (target.matches('#arrow-right')) {
				currentSlide++;
			} else if (target.matches('#arrow-left')) {
				currentSlide--;
			} else if (target.matches('.dot')) {
				dotElem.forEach((item, index) => {
					if (item === target) {
						currentSlide = index;
					}
				});
			};
			if (currentSlide >= slideElem.length) {
				currentSlide = 0;
			};
			if (currentSlide < 0) {
				currentSlide = slideElem.length - 1;
			};
			nextSlide(slideElem, currentSlide, 'portfolio-item-active');
			nextSlide(dotElem, currentSlide, 'dot-active');
		};
	});


	sliderElem.addEventListener('mouseover', (event) => {
		let target = event.target;
		if (target.matches('.portfolio-btn') || target.matches('.dot')) {
			stopSlide();
		};
	});

	sliderElem.addEventListener('mouseout', (event) => {
		let target = event.target;
		if (target.matches('.portfolio-btn') || target.matches('.dot')) {
			startSlide(1500);
		};
	});
	// * =============================================== события ===============================================

	startSlide(1500);

};
slider();
// ? =============================================== tabs ===============================================


// ! показывание других картинок 
// ? =============================================== ourTeam ===============================================
const ourTeam = () => {
	const commandElem = document.querySelector('.command');
	let newSrc;
	// * =============================================== события ===============================================
	commandElem.addEventListener('mouseover', event => {
		const target = event.target;
		if (target.matches('.command__photo')) {
			newSrc = target.src;
			target.src = target.dataset.img;
		};
	});
	commandElem.addEventListener('mouseout', event => {
		const target = event.target;
		if (target.matches('.command__photo')) {
			target.src = newSrc;
		};
	});
	// * =============================================== события ===============================================
};
ourTeam();
// ? =============================================== ourTeam ===============================================


// ! калькулятор расчета
// ? =============================================== calculator ===============================================
const calculator = (prise = 100) => {
	const calcElem = document.querySelector('.calc');
	const calcBlock = document.querySelector('.calc-block');
	const calcType = document.querySelector('.calc-type');
	const calcSquare = document.querySelector('.calc-square');
	const calcDay = document.querySelector('.calc-day');
	const calcCount = document.querySelector('.calc-count');
	const calcValue = document.querySelector('#total');
	let StartSetInterval;


	// * =============================================== countSum ===============================================
	const countSum = () => {
		let total = 0;
		let countValue = 1;
		let dayValue = 1;
		const typeValue = calcType.options[calcType.selectedIndex].value;
		const squareValue = +calcSquare.value;
		if (calcCount.value > 1) {
			countValue += (calcCount.value - 1) / 10;
		};
		if (calcDay.value && calcDay.value < 5) {
			dayValue *= 2;
		} else if (calcDay.value && calcDay.value < 10) {
			dayValue *= 1.5;
		};
		if (typeValue && squareValue) {
			total = prise * typeValue * squareValue * countValue * dayValue;
		};
		let countInterval = 0.5;
		if (total !== 0) {
			StartSetInterval = setInterval(() => {
				countInterval += countInterval;
				calcValue.textContent = countInterval;
				if (countInterval > total) {
					calcValue.textContent = total;
					clearInterval(StartSetInterval);
				}
			}, 75);
		};
	};
	// * =============================================== countSum ===============================================


	// * =============================================== события ===============================================
	calcBlock.addEventListener('change', event => {
		const target = event.target;
		if (target.matches('input') || target.matches('select')) {
			clearInterval(StartSetInterval);
			countSum();
		};
	});
	calcElem.addEventListener('input', (event) => {
		const target = event.target;
		if (target.matches('input')) {
			target.value = target.value.replace(/\D/, '');
		};
	});
	// * =============================================== события ===============================================

};
calculator(100);
// ? =============================================== calculator ===============================================


// ! send-ajax-form
// ? =============================================== sendForm ===============================================
const sendForm = () => {
	const errorMessage = 'Что то пошло не так...';
	const loadMessage = 'Загрузка...';
	const successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

	const formOneNameElem = document.querySelector('#form1-name');
	const formTwoNameElem = document.querySelector('#form2-name');
	const formThreeNameElem = document.querySelector('#form3-name');

	const formOnePhoneElem = document.querySelector('#form1-phone');
	const formTwoPhoneElem = document.querySelector('#form2-phone');
	const formThreePhoneElem = document.querySelector('#form3-phone');

	const formTwoMessageElem = document.querySelector('#form2-message');

	const formOneElem = document.querySelector('#form1');
	const formTwoElem = document.querySelector('#form2');
	const formThreeElem = document.querySelector('#form3');


	const statusMessage = document.createElement('div');
	const skWaveElem = document.querySelector('.sk-wave');
	statusMessage.style.cssText = 'font-size: 2rm';


	// * =============================================== события ===============================================

	formOnePhoneElem.addEventListener('input', () => {
		validPhone(formOnePhoneElem);
	});
	formTwoPhoneElem.addEventListener('input', () => {
		validPhone(formTwoPhoneElem);
	});
	formThreePhoneElem.addEventListener('input', () => {
		validPhone(formThreePhoneElem);
	});

	formOneNameElem.addEventListener('input', () => {
		validName(formOneNameElem);
	});
	formTwoNameElem.addEventListener('input', () => {
		validName(formTwoNameElem);
	});
	formThreeNameElem.addEventListener('input', () => {
		validName(formThreeNameElem);
	});

	formTwoMessageElem.addEventListener('input', () => {
		validMessage(formTwoMessageElem);
	});

	formOneElem.addEventListener('submit', (event) => {
		event.preventDefault();

		skWaveElem.style.display = 'block';
		formOneElem.append(skWaveElem);


		const formData = new FormData(formOneElem);
		let body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});
		postData(body, () => {
			statusMessage.textContent = successMessage;
			skWaveElem.style.display = 'none';
			formOneElem.append(statusMessage);
		}, (error) => {
			statusMessage.textContent = errorMessage;
			skWaveElem.style.display = 'none';
			formOneElem.append(statusMessage);
			console.error(error);
		});

		for (const item of formOneElem.elements) {
			if (item.tagName.toLowerCase() !== 'button') {
				item.value = '';
			};
		};
	});


	formTwoElem.addEventListener('submit', (event) => {
		event.preventDefault();
		skWaveElem.style.display = 'block';
		formTwoElem.prepend(skWaveElem);

		const formData = new FormData(formTwoElem);
		let body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});
		postData(body, () => {
			statusMessage.textContent = successMessage;
			skWaveElem.style.display = 'none';
			formTwoElem.prepend(statusMessage);
		}, (error) => {
			statusMessage.textContent = errorMessage;
			skWaveElem.style.display = 'none';
			formTwoElem.prepend(statusMessage);
			console.error(error);
		});

		for (const item of formTwoElem.elements) {
			if (item.tagName.toLowerCase() !== 'button') {
				item.value = '';
			};
		};

	});

	formThreeElem.addEventListener('submit', (event) => {
		event.preventDefault();
		statusMessage.style.color = 'white';
		skWaveElem.style.display = 'block';
		formThreeElem.append(skWaveElem);

		const formData = new FormData(formThreeElem);
		let body = {};
		formData.forEach((val, key) => {
			body[key] = val;
		});
		postData(body, () => {
			statusMessage.textContent = successMessage;
			skWaveElem.style.display = 'none';
			formThreeElem.append(statusMessage);

		}, (error) => {
			statusMessage.textContent = errorMessage;
			skWaveElem.style.display = 'none';
			formThreeElem.append(statusMessage);

			console.error(error);
		});

		for (const item of formThreeElem.elements) {
			if (item.tagName.toLowerCase() !== 'button') {
				item.value = '';
			};
		};

	});
	// * =============================================== события ===============================================


	// * =============================================== postData ===============================================
	const postData = (body, outputData, erorrData) => {
		const request = new XMLHttpRequest();
		request.addEventListener('readystatechange', () => {
			if (request.readyState !== 4) {
				return;
			};
			if (request.status === 200) {
				outputData();
			} else {
				erorrData(request.status);
			};
		});
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-Type', 'application/json');
		request.send(JSON.stringify(body));
	};
	// * =============================================== postData ===============================================


	// * =============================================== валидация ===============================================
	const validPhone = (input) => {
		input.value = input.value.replace(/[^+0-9]/ig, '');
	};
	const validName = (input) => {
		input.value = input.value.replace(/[^а-я ]/ig, '');
	};
	const validMessage = (input) => {
		input.value = input.value.replace(/[^0-9а-я\.\,\!\? ]/ig, '');
	};
	// * =============================================== валидация ===============================================


};
sendForm();
// ? =============================================== sendForm ===============================================

