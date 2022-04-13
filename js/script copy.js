'use strict';

let startElem = document.getElementById('start');
let cancelElem = document.getElementById('cancel');
let incomeAddElem = document.getElementsByTagName('button')[0];
let expensesAddElem = document.getElementsByTagName('button')[1];
let depositCheckElem = document.querySelector('#deposit-check');
let additionalIncomeItemElems = document.querySelectorAll('.additional_income-item');

let budgetMonthValueElem = document.getElementsByClassName('budget_month-value')[0];
let budgetDayValueElem = document.getElementsByClassName('budget_day-value')[0];
let expensesMonthValueElem = document.getElementsByClassName('expenses_month-value')[0];
let additionalIncomeValueElem = document.getElementsByClassName('additional_income-value')[0];
let additionalExpensesValueElem = document.getElementsByClassName('additional_expenses-value')[0];
let incomePeriodValueElem = document.getElementsByClassName('income_period-value')[0];
let targetMonthValueElem = document.getElementsByClassName('target_month-value')[0];

let salaryAmountElem = document.querySelector('.salary-amount');



let depositAmountElem = document.querySelector('.deposit-amount');
let depositPercentElem = document.querySelector('.deposit-percent');

let additionalExpensesItemElem = document.querySelector('.additional_expenses-item');
let targetAmountElem = document.querySelector('.target-amount');
let periodSelectElem = document.querySelector('.period-select');
let periodAmountElem = document.querySelector('.period-amount');


let incomeItemsElem = document.querySelectorAll('.income-items');
let incomeTitleElem = document.querySelectorAll('.income-title')[1];
let incomeAmountElem = document.querySelector('.income-amount');

let expensesItemsElems = document.querySelectorAll('.expenses-items');
let expensesTitleElem = document.querySelectorAll('.expenses-title')[1];
let expensesAmountElem = document.querySelector('.expenses-amount');


// ? ===================================================== isNumber ===========================================================
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
// ? ===================================================== isNumber ===========================================================


// ? ===================================================== isString ===========================================================
let isString = function (n) {
	return isNaN(n) && n !== null;
};
// ? ===================================================== isString ===========================================================


// ? ===================================================== appData ===========================================================
const appData = {
	income: {},
	addIncome: [],
	incomeMonth: 0,

	expenses: {},
	addExpenses: [],
	expensesMonth: 0,

	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	budget: 0,
	budgetDay: 0,
	budgetMonth: 0,


	// ? ===================================================== blockingInput ===========================================================
	blockingInput: function () {
		const inputElem = document.querySelector('.data').querySelectorAll('input');
		startElem.style.display = 'none';
		cancelElem.style.display = 'block';
		incomeAddElem.style.display = 'none';
		expensesAddElem.style.display = 'none';
		inputElem.forEach(item => {
			if (item.type === 'text') {
				item.disabled = true;
			};
		});
	},
	// ? ===================================================== blockingInput ===========================================================


	// ? ===================================================== reset ===========================================================
	reset: function () {
		this.income = {};
		this.addIncome = [];
		this.incomeMonth = 0;
		this.expenses = {};
		this.addExpenses = [];
		this.expensesMonth = 0;
		this.deposit = false;
		this.percentDeposit = 0;
		this.moneyDeposit = 0;
		this.budget = 0;
		this.budgetDay = 0;
		this.budgetMonth = 0;
		this.startDisabled();
		incomeItemsElem.forEach((item, index) => {
			if (incomeItemsElem.length > 1 && index >= 1) {
				item.remove();
			};
		});
		expensesItemsElems.forEach((item, index) => {
			if (expensesItemsElems.length > 1 && index >= 1) {
				item.remove();
			};
		});
		incomeAddElem.style.display = 'block';
		expensesAddElem.style.display = 'block';
		const inputDataElems = document.querySelector('.data').querySelectorAll('input');
		const inputResultElems = document.querySelector('.result').querySelectorAll('input');
		periodAmountElem.textContent = 1;
		startElem.style.display = 'block';
		cancelElem.style.display = 'none';
		inputDataElems.forEach(item => {
			item.disabled = false;
			item.value = '';
			if (item.classList.contains('period-select')) {
				item.value = 1;
			};
		});
		inputResultElems.forEach(item => {
			item.value = '';
		});
	},
	// ? ===================================================== reset ===========================================================



	// ? ===================================================== startDisabled ===========================================================
	startDisabled: function () {
		startElem.disabled = true;
		salaryAmountElem.addEventListener('input', () => {
			if (salaryAmountElem.value === '') {
				startElem.disabled = true;
			} else {
				startElem.disabled = false;
			};
		});
	},
	// ? ===================================================== startDisabled ===========================================================



	// ? ===================================================== start ===========================================================
	start: function () {
		this.budget = +salaryAmountElem.value;

		this.getExpenses();
		this.getIncome();

		this.getExpensesMonth();
		this.getIncomeMonth();

		this.getBudget();

		this.getAddExpenses();
		this.getAddIncome();

		this.showResult();
		this.blockingInput();
	},
	// ? ===================================================== start ===========================================================


	// ? ===================================================== showResult ===========================================================
	showResult: function () {

		budgetMonthValueElem.value = this.budgetMonth;
		budgetDayValueElem.value = this.budgetDay;
		expensesMonthValueElem.value = this.expensesMonth;
		additionalExpensesValueElem.value = this.addExpenses.join(', ');
		additionalIncomeValueElem.value = this.addIncome.join(', ');
		targetMonthValueElem.value = this.getTargetMonth();
		incomePeriodValueElem.value = this.calcSavedMoney();
		periodSelectElem.addEventListener('input', this.changeIncomePeriodValue);
	},
	// ? ===================================================== showResult ===========================================================


	// ? ===================================================== addExpensesBlok ===========================================================
	addExpensesBlok: function () {
		let CloneExpensesItemsElem = expensesItemsElems[0].cloneNode(true);
		CloneExpensesItemsElem.children[0].value = '';
		CloneExpensesItemsElem.children[1].value = '';
		expensesItemsElems[0].parentNode.insertBefore(CloneExpensesItemsElem, expensesAddElem);
		expensesItemsElems = document.querySelectorAll('.expenses-items');
		if (expensesItemsElems.length === 3) {
			expensesAddElem.style.display = 'none';
		};
		CloneExpensesItemsElem.children[0].addEventListener('input', () => {
			CloneExpensesItemsElem.children[0].value = CloneExpensesItemsElem.children[0].value.replace(/[^А-Я ,]/i, '');
		});
		CloneExpensesItemsElem.children[1].addEventListener('input', () => {
			CloneExpensesItemsElem.children[1].value = CloneExpensesItemsElem.children[1].value.replace(/\D/, '');
		});
	},
	// ? ===================================================== addExpensesBlok ===========================================================


	// ? ===================================================== getExpenses ===========================================================
	getExpenses: function () {

		expensesItemsElems.forEach(item => {
			let itemExpenses = item.children[0].value;
			let cashExpenses = item.children[1].value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				this.expenses[itemExpenses.trim()] = +cashExpenses.trim();
			};
		});
	},
	// ? ===================================================== getExpenses ===========================================================


	// ? ===================================================== getAddExpenses ===========================================================
	getAddExpenses: function () {
		let addExpenses = additionalExpensesItemElem.value.split(',');
		addExpenses.forEach(item => {
			item = item.trim();
			if (item !== '') {
				this.addExpenses.push(item);
			};
		});
	},
	// ? ===================================================== getAddExpenses ===========================================================


	// ? ===================================================== addIncomeBlok ===========================================================
	addIncomeBlok: function () {
		let CloneIncomeItemsElem = incomeItemsElem[0].cloneNode(true);
		CloneIncomeItemsElem.children[0].value = '';
		CloneIncomeItemsElem.children[1].value = '';
		incomeItemsElem[0].parentNode.insertBefore(CloneIncomeItemsElem, incomeAddElem);
		incomeItemsElem = document.querySelectorAll('.income-items');
		if (incomeItemsElem.length === 3) {
			incomeAddElem.style.display = 'none';
		};
		CloneIncomeItemsElem.children[0].addEventListener('input', () => {
			CloneIncomeItemsElem.children[0].value = CloneIncomeItemsElem.children[0].value.replace(/[^А-Я ,]/i, '');
		});
		CloneIncomeItemsElem.children[1].addEventListener('input', () => {
			CloneIncomeItemsElem.children[1].value = CloneIncomeItemsElem.children[1].value.replace(/\D/, '');
		});
	},
	// ? ===================================================== addIncomeBlok ===========================================================


	// ? ===================================================== getIncome ===========================================================
	getIncome: function () {
		incomeItemsElem.forEach(item => {
			let itemIncome = item.children[0].value;
			let cashIncome = item.children[1].value;
			if (itemIncome !== '' && cashIncome !== '') {
				this.income[itemIncome.trim()] = +cashIncome.trim();
			};
		});
	},
	// ? ===================================================== getIncome ===========================================================


	// ? ===================================================== getAddIncome ===========================================================
	getAddIncome: function () {
		additionalIncomeItemElems.forEach(item => {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				this.addIncome.push(itemValue);
			};
		});
	},
	// ? ===================================================== getAddIncome ===========================================================


	// ? ===================================================== getExpensesMonth ===========================================================
	getExpensesMonth: function () {
		for (let key in this.expenses) {
			this.expensesMonth += this.expenses[key];
		};
	},
	// ? ===================================================== getExpensesMonth ===========================================================
	
	
	// ? ===================================================== getIncomeMonth ===========================================================
	getIncomeMonth: function () {
		for (let key in this.income) {
			this.incomeMonth += this.income[key];
		};
	},
	// ? ===================================================== getIncomeMonth ===========================================================


	// ? ===================================================== getBudget ===========================================================
	getBudget: function () {
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = +(this.budgetMonth / 30).toFixed(2);
	},
	// ? ===================================================== getBudget ===========================================================


	// ? ===================================================== getTargetMonth ===========================================================
	getTargetMonth: function () {
		return Math.ceil(targetAmountElem.value / this.budgetMonth);
	},
	// ? ===================================================== getTargetMonth ===========================================================


	// // ? ===================================================== getStatusIncome ===========================================================
	// getStatusIncome: function () {
	// 	if (appData.budgetDay >= 1200) {
	// 		console.log('У вас высокий уровень дохода');
	// 	} else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
	// 		console.log('У вас средний уровень дохода');
	// 	} else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
	// 		console.log('К сожалению у вас уровень дохода ниже среднего');
	// 	} else if (appData.budgetDay < 0) {
	// 		console.log('Что то пошло не так');
	// 	};
	// },
	// // ? ===================================================== getStatusIncome ===========================================================


	// // ? ===================================================== getInfoDeposit ===========================================================
	// getInfoDeposit: function () {
	// 	if (appData.deposit) {
	// 		let percentDeposit = prompt('Какой годовой процент?', '10')
	// 		while (!isNumber(percentDeposit)) {
	// 			percentDeposit = prompt('Какой годовой процент?', '10');
	// 		};
	// 		appData.percentDeposit = +percentDeposit;

	// 		let moneyDeposit = prompt('Какая сумма заложенна', '10000');
	// 		while (!isNumber(moneyDeposit)) {
	// 			moneyDeposit = prompt('Какая сумма заложенна', '10000');
	// 		};
	// 		appData.moneyDeposit = +moneyDeposit;
	// 	};
	// },
	// // ? ===================================================== getInfoDeposit ===========================================================


	// ? ===================================================== calcSavedMoney ===========================================================
	calcSavedMoney: function () {
		return this.budgetMonth * periodSelectElem.value;
	},
	// ? ===================================================== calcSavedMoney ===========================================================


	// ? ===================================================== changePeriodAmount ===========================================================
	changePeriodAmount: function () {
		periodAmountElem.textContent = periodSelectElem.value;
	},
	// ? ===================================================== changePeriodAmount ===========================================================


	// ? ===================================================== changeIncomePeriodValue ===========================================================
	changeIncomePeriodValue: function () {
		incomePeriodValueElem.value = appData.budgetMonth * periodSelectElem.value;
	},
	// ? ===================================================== changeIncomePeriodValue ===========================================================

};
// ? ===================================================== appData ===========================================================

appData.startDisabled();
startElem.addEventListener('click', appData.start.bind(appData));
cancelElem.addEventListener('click', appData.reset.bind(appData));
expensesAddElem.addEventListener('click', appData.addExpensesBlok);
incomeAddElem.addEventListener('click', appData.addIncomeBlok);
periodSelectElem.addEventListener('input', appData.changePeriodAmount);


const input = document.querySelectorAll('input');
input.forEach(item => {
	let placeholderName = item.getAttribute('placeholder');
	item.addEventListener('input', () => {
		if (placeholderName === 'Наименование') {
			item.value = item.value.replace(/[^А-Я ,]/i, '')
		} else if (placeholderName === 'название') {
			item.value = item.value.replace(/[^А-Я ,]/i, '')
		} else if (placeholderName === 'Сумма') {
			item.value = item.value.replace(/\D/, '')
		};
	});
});