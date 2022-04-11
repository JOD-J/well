'use strict';


const bodyElem = document.querySelector('body');


let arrData = [{
	firstName: 'Евгений',
	lastName: 'Бахуринский',
	login: 'admin',
	password: 'admin',
},
{
	firstName: 'Евгений123',
	lastName: 'Бахуринский321',
	login: 'admin123',
	password: 'admin321',
}
];

const getItem = JSON.parse(localStorage.getItem('arrData'));
arrData = getItem !== null ? getItem : arrData;
localStorage.setItem('arrData', JSON.stringify(arrData));

// ? ============================================= addMarking ======================================================
const addMarking = () => {
	const headerElem = document.createElement('header');
	headerElem.classList.add('header');
	headerElem.style.width = '300px';


	const hOne = document.createElement('h1');
	hOne.classList.add('header__title');
	hOne.textContent = 'Привет Аноним';

	const divButtons = document.createElement('div');
	divButtons.classList.add('header__buttons');
	divButtons.style.marginBottom = '10px'

	const buttonRegistor = document.createElement('button');
	buttonRegistor.classList.add('header__button-registor');
	buttonRegistor.textContent = 'Зарегестрироваться';
	buttonRegistor.style.marginRight = '10px'

	const buttonLogin = document.createElement('button');
	buttonLogin.classList.add('header__button-login');
	buttonLogin.textContent = 'Авторезоваться';

	const divInputs = document.createElement('div');
	divInputs.classList.add('header__inputs');
	divInputs.style.display = 'flex';
	divInputs.style.flexDirection = 'column';

	const headerInputName = document.createElement('input');
	headerInputName.classList.add('header__input-name');
	headerInputName.style.marginBottom = '10px';
	headerInputName.placeholder = 'Ведите ваше имя и фамилию';

	const headerInputLogin = document.createElement('input');
	headerInputLogin.classList.add('header__input-login');
	headerInputLogin.style.marginBottom = '10px';
	headerInputLogin.placeholder = 'Ведите логин';


	const headerInputPassword = document.createElement('input');
	headerInputPassword.classList.add('header__input-password');
	headerInputPassword.style.marginBottom = '10px';
	headerInputPassword.placeholder = 'Ведите пароль';
	headerInputPassword.type = 'password';

	const buttonSend = document.createElement('button');
	buttonSend.classList.add('header__send');
	buttonSend.textContent = 'Отправить даныне';

	divInputs.prepend(buttonSend);
	divInputs.prepend(headerInputPassword);
	divInputs.prepend(headerInputLogin);
	divInputs.prepend(headerInputName);

	divButtons.prepend(buttonLogin);
	divButtons.prepend(buttonRegistor);

	headerElem.prepend(divInputs);
	headerElem.prepend(divButtons);
	headerElem.prepend(hOne);

	bodyElem.append(headerElem);

};
addMarking();
// ? ============================================= addMarking ======================================================


// ? ============================================= swohBlock ======================================================
const swohBlock = () => {
	const headerButtonsElem = document.querySelector('.header__buttons');
	const divInputs = document.querySelector('.header__inputs');
	const headerInputName = document.querySelector('.header__input-name');
	const buttonSend = document.querySelector('.header__send');

	headerButtonsElem.addEventListener('click', event => {
		const target = event.target;
		if (target.classList.contains('header__button-registor')) {
			divInputs.style.display = 'flex';
			headerInputName.style.display = 'flex';
			buttonSend.classList.remove('header__send-login');
			buttonSend.classList.add('header__send-registor');
		} else if (target.classList.contains('header__button-login')) {
			divInputs.style.display = 'flex';
			headerInputName.style.display = 'none';
			buttonSend.classList.add('header__send-login');
			buttonSend.classList.remove('header__send-registor');
		};
	});
};
swohBlock();
// ? ============================================= swohBlock ======================================================


// ? ============================================= sendData ======================================================
const sendData = () => {
	let countLoginPassword = 4;
	const buttonSend = document.querySelector('.header__send');
	buttonSend.addEventListener('click', () => {
		const loginElem = document.querySelector('.header__input-login');
		let loginValue = document.querySelector('.header__input-login').value.trim();
		// console.log('loginValue: ', loginValue);

		const passwordElem = document.querySelector('.header__input-password');
		const passwordValue = document.querySelector('.header__input-password').value.trim();
		const pPasswordElem = document.querySelector('.header__input-password-text');
		const buttonResetPasswordElem = document.querySelector('.button__new-password');

		const headerInputNameElem = document.querySelector('.header__input-name');


		if (buttonSend.classList.contains('header__send-registor')) {
			let arrUser = headerInputNameElem.value.trim().split(' ');
			let firstName = arrUser[0];
			let lastName = arrUser[1];
			let login = loginElem.value;
			let password = passwordElem.value;
			let regDate = new Date().toLocaleString('ru', {
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric'
			});
			if (login !== '' && password !== '' && firstName !== '' && lastName !== '' && lastName !== undefined) {
				let userObj = {
					firstName: firstName,
					lastName: lastName,
					login: login,
					password: password,
					regDate: regDate,
				};
				arrData.push(userObj);
				loginElem.value = '';
				passwordElem.value = '';
				headerInputNameElem.value = '';
				const pRegistorSuccessfully = document.createElement('p');
				pRegistorSuccessfully.textContent = `Пользователь зарегестрирован`;
				pRegistorSuccessfully.style.marginBottom = '10px';
				pRegistorSuccessfully.style.textAlign = 'center';
				passwordElem.after(pRegistorSuccessfully);
				let timer = setTimeout(() => {
					pRegistorSuccessfully.remove();
				}, 5000);

			};
		} else if (buttonSend.classList.contains('header__send-login')) {
			arrData.forEach(item => {
				console.log('item: ', item);
				console.log('loginValue: ', loginValue);

				if (item.login === loginValue) {
					const pLoginElem = document.querySelector('.header__input-login-text');
					if (pLoginElem === null) {
						const pLoginElem = document.createElement('p');
						pLoginElem.textContent = 'Пользователя с таким именем нету';
						pLoginElem.classList.add('header__input-login-text');
						loginElem.after(pLoginElem);
					} else if (item.login === loginValue && pLoginElem !== null) {
						pLoginElem.remove();
					};
				} else if ();
				// if (item.password !== passwordValue) {
				// 	countLoginPassword--;
				// 	if (pPasswordElem === null) {
				// 		const pPasswordElem = document.createElement('p');
				// 		pPasswordElem.textContent = `Пароль не верный осталось попыток ${countLoginPassword}`;
				// 		pPasswordElem.classList.add('header__input-password-text');
				// 		passwordElem.after(pPasswordElem);
				// 	} else if (pPasswordElem !== null) {
				// 		if (countLoginPassword > 0) {
				// 			pPasswordElem.textContent = `Пароль не верный осталось попыток ${countLoginPassword}`;
				// 		} else if (countLoginPassword <= 0) {
				// 			if (buttonResetPasswordElem === null) {
				// 				pPasswordElem.textContent = `Пароль не верный осталось попыток 0`;
				// 				const buttonNewPassword = document.createElement('button');
				// 				buttonNewPassword.classList.add('button__new-password');
				// 				buttonNewPassword.textContent = `Новый пароль`;
				// 				passwordElem.after(buttonNewPassword);
				// 				addInputNewPassword();
				// 			};
				// 		};
				// 	};
				// } else if (item.password === passwordValue && pPasswordElem !== null && buttonResetPasswordElem !== null) {
				// 	countLoginPassword = 4;
				// 	pPasswordElem.remove();
				// 	buttonResetPasswordElem.remove();
				// };
			});
		};
	});
};
sendData();
// ? ============================================= sendData ======================================================


// ? ============================================= addInputNewPassword ======================================================
const addInputNewPassword = () => {
	const buttonResetPasswordElem = document.querySelector('.button__new-password');
	buttonResetPasswordElem.style.marginBottom = '10px';
	buttonResetPasswordElem.addEventListener('click', () => {
		const inputNewPasswordElem = document.querySelector('.input__new-password');
		const inputConfirmPasswordElem = document.querySelector('.input__confirm-password');
		if (inputNewPasswordElem === null && inputConfirmPasswordElem === null) {
			const inputResetPasswordOne = document.createElement('input');
			inputResetPasswordOne.placeholder = 'Ведите новый пароль';
			inputResetPasswordOne.type = 'password';
			inputResetPasswordOne.style.marginBottom = '10px';
			inputResetPasswordOne.classList.add('input__new-password');
			const inputResetPasswordTwo = document.createElement('input');
			inputResetPasswordTwo.placeholder = 'Подтвердите пароль';
			inputResetPasswordTwo.type = 'password';
			inputResetPasswordTwo.style.marginBottom = '10px';
			inputResetPasswordTwo.classList.add('input__confirm-password');
			const buttonResetPassword = document.createElement('button');
			buttonResetPassword.classList.add('button__reset-password');
			buttonResetPassword.textContent = `сбросить пароль`;
			buttonResetPasswordElem.after(buttonResetPassword);
			buttonResetPasswordElem.after(inputResetPasswordTwo);
			buttonResetPasswordElem.after(inputResetPasswordOne);
		};
		resetPassword();
	});
};
// ? ============================================= addInputNewPassword ======================================================


// ? ============================================= resetPassword ======================================================
const resetPassword = () => {
	const buttonResetPassword = document.querySelector('.button__reset-password');
	const buttonResetPasswordElem = document.querySelector('.button__new-password');
	const inputNewPasswordElem = document.querySelector('.input__new-password');
	const inputConfirmPasswordElem = document.querySelector('.input__confirm-password');
	const pPasswordElem = document.querySelector('.header__input-password-text');
	const passwordElem = document.querySelector('.header__input-password');
	const loginElem = document.querySelector('.header__input-login');
	buttonResetPassword.addEventListener('click', () => {
		if (inputNewPasswordElem.value === inputConfirmPasswordElem.value && inputNewPasswordElem.value !== '' && inputConfirmPasswordElem.value !== '') {
			arrData.forEach(item => {
				if (item.login === loginElem.value) {
					item.password = inputConfirmPasswordElem.value;
					buttonResetPassword.remove();
					inputNewPasswordElem.remove();
					inputConfirmPasswordElem.remove();
					buttonResetPasswordElem.remove();
					pPasswordElem.remove();
					passwordElem.value = '';
					const pResetPassword = document.createElement('p');
					pResetPassword.textContent = `пароль сброшен`;
					pResetPassword.style.marginBottom = '10px';
					pResetPassword.style.textAlign = 'center';
					passwordElem.after(pResetPassword);
					let timer = setTimeout(() => {
						pResetPassword.remove();
					}, 5000);
				};
			});
		};
	});
};
// ? ============================================= resetPassword ======================================================

// const headerTitleElem = document.querySelector('.header__title');

// const headerButtonRegistorElem = document.querySelector('.header__button-registor');
// const headerButtonLoginElem = document.querySelector('.header__button-login');

// const headerInputsElem = document.querySelector('.header__inputs');
// const headerInputNameElem = document.querySelector('.header__input-name');
// const headerInputLoginElem = document.querySelector('.header__input-login');
// const headerInputPasswordElem = document.querySelector('.header__input-password');
// const headerSendElem = document.querySelector('.header__send');



// const headerItemsElem = document.querySelector('.header__items');
// const headerItemElem = document.querySelector('.header__item');

// headerButtonRegistorElem.addEventListener('click', () => {
// 	headerInputsElem.classList.add('header__inputs-isopen');
// 	headerInputNameElem.classList.remove('header__input-name-isopen');
// 	headerSendElem.classList.add('btn__registor');
// 	headerSendElem.classList.remove('btn__login');
// });

// headerButtonLoginElem.addEventListener('click', () => {
// 	headerInputsElem.classList.add('header__inputs-isopen');
// 	headerInputNameElem.classList.add('header__input-name-isopen');
// 	headerSendElem.classList.add('btn__login');
// 	headerSendElem.classList.remove('btn__registor');
// });

// let arrData = [{
// 	firstName: 'Евгений',
// 	lastName: 'Бахуринский',
// 	login: 'admin',
// 	password: 'admin',
// }];

// const getItem = JSON.parse(localStorage.getItem('arrData'));
// arrData = getItem !== null ? getItem : arrData;
// localStorage.setItem('arrData', JSON.stringify(arrData));

// const render = () => {
// 	headerItemsElem.innerHTML = '';
// 	arrData.forEach((item, index) => {
// 		const li = document.createElement('li');
// 		li.classList.add('header__item');
// 		li.innerHTML = `
// 		<p class="header__text">Имя: ${item.firstName}, Фамилия: ${item.lastName}, Зарегистрирован: ${item.regDate}</p>
// 		<button class="items__remove">Удалить пользователя</button>
// 		`;
// 		headerItemsElem.append(li);
// 		const itemsRemoveElem = li.querySelector('.items__remove');
// 		itemsRemoveElem.addEventListener('click', () => {
// 			arrData.splice(index, 1);
// 			render();
// 		});
// 	});
// 	localStorage.setItem('arrData', JSON.stringify(arrData));
// };
// let countLogin = 4;

// headerSendElem.addEventListener('click', () => {
// 	if (headerSendElem.classList.contains('btn__registor')) {
// 		let arrUser = headerInputNameElem.value.trim().split(' ');
// 		let firstName = arrUser[0];
// 		let lastName = arrUser[1];
// 		let login = headerInputLoginElem.value.trim();
// 		let password = headerInputPasswordElem.value.trim();
// 		let regDate = new Date().toLocaleString('ru', {
// 			year: 'numeric',
// 			month: 'long',
// 			day: 'numeric',
// 			hour: 'numeric',
// 			minute: 'numeric',
// 			second: 'numeric'
// 		});
// 		if (login !== '' && password !== '' && firstName !== '' && lastName !== '' && lastName !== undefined) {
// 			let userObj = {
// 				firstName: firstName,
// 				lastName: lastName,
// 				login: login,
// 				password: password,
// 				regDate: regDate,
// 			};
// 			arrData.push(userObj);
// 			render();
// 		};
// 	} else if (headerSendElem.classList.contains('btn__login')) {
// 		let login = headerInputLoginElem.value.trim();
// 		let password = headerInputPasswordElem.value.trim();
// 		arrData.forEach(item => {

// 			if (item.login !== login) {
// 				const p = document.querySelector('.header__input-login-text');
// 				if (p === null) {
// 					const p = document.createElement('p');
// 					p.textContent = 'Пользователя с таким именем нету';
// 					p.classList.add('header__input-login-text');
// 					headerInputLoginElem.after(p);
// 				};
// 			} else if (item.login === login) {
// 				const p = document.querySelector('.header__input-login-text');
// 				if (p !== null) {
// 					p.remove();
// 				};
// 			};
// 			if (item.password !== password) {
// 				countLogin--;
// 				const p = document.querySelector('.header__input-password-text');
// 				if (p === null) {
// 					const p = document.createElement('p');
// 					p.textContent = `Пароль не верный осталось попыток ${countLogin}`;
// 					p.classList.add('header__input-password-text');
// 					headerInputPasswordElem.after(p);
// 				} else {
// 					if (countLogin > 0) {
// 						p.textContent = `Пароль не верный осталось попыток ${countLogin}`;
// 					} else if (countLogin === 0) {
// 						const button = document.createElement('button');
// 						console.log('button: ', button);
// 						button.classList.add('button__new-password');
// 						button.textContent = `Сбросить пароль`;
// 						p.after(button);
// 					};
// 				};
// 			} else if (item.password === password) {
// 				const p = document.querySelector('.header__input-password-text');
// 				if (p !== null) {
// 					p.remove();
// 				};
// 			};
// 			// if (item.login === login && item.password === password) {
// 			// 	headerTitleElem.textContent = `привет ${item.firstName} ${item.lastName}`;
// 			// } else {
// 			// 	headerTitleElem.textContent = `Пользователь не найден Проверьте логин и пароль`;
// 			// };
// 		});
// 	};
// });

// const input = document.querySelectorAll('input');
// input.forEach(item => {
// 	item.addEventListener('input', (event) => {
// 		const target = event.target;
// 		if (target.classList.contains('header__input-name')) {
// 			target.value = target.value.replace(/^\s|/g, '');
// 		} else if (target.classList.contains('header__input-login')) {
// 			target.value = target.value.replace(/\s|/g, '');
// 		} else if (target.classList.contains('header__input-password')) {
// 			target.value = target.value.replace(/\s|/g, '');
// 		};
// 	});
// });