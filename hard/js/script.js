'use strict';

let arr = [
	'123',
	'234',
	'345',
	'456',
	'678',
	'2564',
	'789',
	'46577',
	'891',
];
console.log('arr: ', arr);

arr.forEach(item => {
	if (item.startsWith(2) || item.startsWith(4)) {
		console.log('item: ', item);
	};
});
nextPrime: for (let i = 2; i <= 99; i++) {
	for (let j = 2; j < i; j++) {
		if (i % j === 0) continue nextPrime;
	};
	console.log(i, `Делители этого числа: 1 и ${i}`);
};