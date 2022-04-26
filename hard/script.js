const startElem = document.querySelector('.start');
const resetElem = document.querySelector('.reset');
const blockElem = document.querySelector('.block');
let isOpen = false;
let count = 0;
let requestAnimation;
const startGame = () => {
	requestAnimation = requestAnimationFrame(startGame);
	count++;
	if (count < 350) {
		blockElem.style.left = count * 2 + 'px';
	} else {
		cancelAnimationFrame(requestAnimation);
	};
};

startElem.addEventListener('click', () => {
	if (!isOpen) {
		isOpen = true;
		requestAnimation = requestAnimationFrame(startGame);
	} else {
		isOpen = false;
		cancelAnimationFrame(requestAnimation);
	};
});

resetElem.addEventListener('click', () => {
	isOpen = false;
	count = 0;
	blockElem.style.left = 0;
	cancelAnimationFrame(requestAnimation);
});