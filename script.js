'use strict';
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
countTimer('26 April 2022');
// ? =============================================== countTimer ===============================================

