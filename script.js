// const calculator = {
// 	sum: function (a, b) {
// 		return a + b;
// 	},
// 	mult: function (a, b) {
// 		return a * b;
// 	},
// 	show: function (a, b, btn) {
// 		if (btn.id === 'sum') {
// 			resElem.value = this.sum(a, b);
// 		} else {
// 			resElem.value = this.mult(a, b);
// 		};
// 	}
// };

// const aElem = document.querySelector('#a');
// const bElem = document.querySelector('#b');
// const sumElem = document.querySelector('#sum');
// const multElem = document.querySelector('#mult');
// const resElem = document.querySelector('#res');

// sumElem.addEventListener('click', () => {
// 	calculator.show(+aElem.value, +bElem.value, sumElem);
// });
// multElem.addEventListener('click', () => {
// 	calculator.show(+aElem.value, +bElem.value, multElem);
// });

// function getResult(x, y) {
// 	let result;
// 	result = x ** y;
// 	result = new String(result)
// 	result = result.split('');
// 	result = result.reduce((acc, item) => {
// 		return +acc + +item;
// 	}, 0);
// 	return result
// };

// console.log(getResult(4, 8))


// let cityArr = {
// 	rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
// 	uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
// 	bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
// 	jap: ['Токио', 'Киото', 'Осака', 'Иокогама']
// };


// {
	/* <select name="country" id="country">
	<option value="rus">Россия</option>
	<option value="uk">Украина</option>
	<option value="bel">Беларусь</option>
	<option value="jap">Япония</option>
	</select>
	<select name="city" id="city"></select>

	<div class="result"></div> */
// }

// const countryElem = document.querySelector('#country');
// const cityElem = document.querySelector('#city');
// const result = document.querySelector('.result');



// countryElem.addEventListener('click', () => {
// 	cityElem.innerHTML = '';
// 	cityElem.style.display = 'inline-block';
// 	if (countryElem.value === 'rus') {
// 		cityArr.rus.forEach(elem => {
// 			const option = document.createElement('option');
// 			option.textContent = elem;
// 			option.setAttribute('value', elem);
// 			cityElem.append(option);
// 		});
// 	};
// 	if (countryElem.value === 'uk') {
// 		cityArr.uk.forEach(elem => {
// 			const option = document.createElement('option');
// 			option.textContent = elem;
// 			option.setAttribute('value', elem);
// 			cityElem.append(option);
// 		});
// 	};
// 	if (countryElem.value === 'bel') {
// 		cityArr.bel.forEach(elem => {
// 			const option = document.createElement('option');
// 			option.textContent = elem;
// 			option.setAttribute('value', elem);
// 			cityElem.append(option);
// 		});
// 	};
// 	if (countryElem.value === 'jap') {
// 		cityArr.jap.forEach(elem => {
// 			const option = document.createElement('option');
// 			option.textContent = elem;
// 			option.setAttribute('value', elem);
// 			cityElem.append(option);
// 		});
// 	};
// });

// cityElem.addEventListener('click', () => {
// 	[...countryElem.children].forEach(item => {
// 		if (item.value === countryElem.value) {
// 			result.textContent = item.textContent + ' ' + cityElem.value
// 		};
// 	});
// });

// [...countryElem.children].forEach(item => {
// 	item.addEventListener('click', () => {
// 		console.log(item);
// 	});
// });

