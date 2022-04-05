'use strict';

let startElem = document.getElementById('start');
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

	// ? ===================================================== start ===========================================================
	start: function () {
		appData.budget = +salaryAmountElem.value;

		appData.getExpenses();
		appData.getIncome();

		appData.getExpensesMonth();
		appData.getIncomeMonth();

		appData.getBudget();

		appData.getAddExpenses();
		appData.getAddIncome();

		appData.showResult();
	},
	// ? ===================================================== start ===========================================================


	// ? ===================================================== showResult ===========================================================
	showResult: function () {
		budgetMonthValueElem.value = appData.budgetMonth;
		budgetDayValueElem.value = appData.budgetDay;
		expensesMonthValueElem.value = appData.expensesMonth;
		additionalExpensesValueElem.value = appData.addExpenses.join(', ');
		additionalIncomeValueElem.value = appData.addIncome.join(', ');
		targetMonthValueElem.value = appData.getTargetMonth();
		incomePeriodValueElem.value = appData.calcSavedMoney();
		periodSelectElem.addEventListener('input', appData.changeIncomePeriodValue);
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
	},
	// ? ===================================================== addExpensesBlok ===========================================================


	// ? ===================================================== getExpenses ===========================================================
	getExpenses: function () {
		expensesItemsElems.forEach(item => {
			let itemExpenses = item.children[0].value;
			let cashExpenses = item.children[1].value;
			if (itemExpenses !== '' && cashExpenses !== '') {
				appData.expenses[itemExpenses.trim()] = +cashExpenses.trim();
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
				appData.addExpenses.push(item);
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
	},
	// ? ===================================================== addIncomeBlok ===========================================================


	// ? ===================================================== getIncome ===========================================================
	getIncome: function () {
		incomeItemsElem.forEach(item => {
			let itemIncome = item.children[0].value;
			let cashIncome = item.children[1].value;
			if (itemIncome !== '' && cashIncome !== '') {
				appData.income[itemIncome.trim()] = +cashIncome.trim();
			};
		});
	},
	// ? ===================================================== getIncome ===========================================================


	// ? ===================================================== getAddIncome ===========================================================
	getAddIncome: function () {
		additionalIncomeItemElems.forEach(item => {
			let itemValue = item.value.trim();
			if (itemValue !== '') {
				appData.addIncome.push(itemValue);
			};
		});
	},
	// ? ===================================================== getAddIncome ===========================================================


	// ? ===================================================== getExpensesMonth ===========================================================
	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += appData.expenses[key];
		};
	},
	// ? ===================================================== getExpensesMonth ===========================================================


	// ? ===================================================== getIncomeMonth ===========================================================
	getIncomeMonth: function () {
		for (let key in appData.income) {
			appData.incomeMonth += appData.income[key];
		};
	},
	// ? ===================================================== getIncomeMonth ===========================================================


	// ? ===================================================== getBudget ===========================================================
	getBudget: function () {
		appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
		appData.budgetDay = +(appData.budgetMonth / 30).toFixed(2);
	},
	// ? ===================================================== getBudget ===========================================================


	// ? ===================================================== getTargetMonth ===========================================================
	getTargetMonth: function () {
		return Math.ceil(targetAmountElem.value / appData.budgetMonth);
	},
	// ? ===================================================== getTargetMonth ===========================================================


	// ? ===================================================== getStatusIncome ===========================================================
	getStatusIncome: function () {
		if (appData.budgetDay >= 1200) {
			console.log('У вас высокий уровень дохода');
		} else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
			console.log('У вас средний уровень дохода');
		} else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
			console.log('К сожалению у вас уровень дохода ниже среднего');
		} else if (appData.budgetDay < 0) {
			console.log('Что то пошло не так');
		};
	},
	// ? ===================================================== getStatusIncome ===========================================================


	// ? ===================================================== getInfoDeposit ===========================================================
	getInfoDeposit: function () {
		if (appData.deposit) {
			let percentDeposit = prompt('Какой годовой процент?', '10')
			while (!isNumber(percentDeposit)) {
				percentDeposit = prompt('Какой годовой процент?', '10');
			};
			appData.percentDeposit = +percentDeposit;

			let moneyDeposit = prompt('Какая сумма заложенна', '10000');
			while (!isNumber(moneyDeposit)) {
				moneyDeposit = prompt('Какая сумма заложенна', '10000');
			};
			appData.moneyDeposit = +moneyDeposit;
		};
	},
	// ? ===================================================== getInfoDeposit ===========================================================


	// ? ===================================================== calcSavedMoney ===========================================================
	calcSavedMoney: function () {
		return appData.budgetMonth * periodSelectElem.value;
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


startElem.addEventListener('click', appData.start);
expensesAddElem.addEventListener('click', appData.addExpensesBlok);
incomeAddElem.addEventListener('click', appData.addIncomeBlok);
periodSelectElem.addEventListener('input', appData.changePeriodAmount);
startElem.disabled = true;
salaryAmountElem.addEventListener('input', () => {
	if (salaryAmountElem.value === '') {
		startElem.disabled = true;
	} else {
		startElem.disabled = false;
	};
});

const input = document.querySelectorAll('input');
input.forEach(item => {
	let placeholderName = item.getAttribute('placeholder');
	item.addEventListener('input', () => {
		if (placeholderName === 'Наименование') {
			item.value = item.value.replace(/[^а-я ^A-Я,]/g, '')
		} else if (placeholderName === 'Сумма') {
			item.value = item.value.replace(/\D/, '')
		};
	});
});