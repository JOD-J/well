'use strict';

const startElem = document.getElementById('start');
const cancelElem = document.getElementById('cancel');
const incomeAddElem = document.getElementsByTagName('button')[0];
const expensesAddElem = document.getElementsByTagName('button')[1];
const depositCheckElem = document.querySelector('#deposit-check');
const additionalIncomeItemElems = document.querySelectorAll('.additional_income-item');

const budgetMonthValueElem = document.getElementsByClassName('budget_month-value')[0];
const budgetDayValueElem = document.getElementsByClassName('budget_day-value')[0];
const expensesMonthValueElem = document.getElementsByClassName('expenses_month-value')[0];
const additionalIncomeValueElem = document.getElementsByClassName('additional_income-value')[0];
const additionalExpensesValueElem = document.getElementsByClassName('additional_expenses-value')[0];
const incomePeriodValueElem = document.getElementsByClassName('income_period-value')[0];
const targetMonthValueElem = document.getElementsByClassName('target_month-value')[0];

const salaryAmountElem = document.querySelector('.salary-amount');



const depositAmountElem = document.querySelector('.deposit-amount');
const depositPercentElem = document.querySelector('.deposit-percent');

const additionalExpensesItemElem = document.querySelector('.additional_expenses-item');
const targetAmountElem = document.querySelector('.target-amount');
const periodSelectElem = document.querySelector('.period-select');
const periodAmountElem = document.querySelector('.period-amount');


let incomeItemsElem = document.querySelectorAll('.income-items');
const incomeTitleElem = document.querySelectorAll('.income-title')[1];
const incomeAmountElem = document.querySelector('.income-amount');

let expensesItemsElems = document.querySelectorAll('.expenses-items');
const expensesTitleElem = document.querySelectorAll('.expenses-title')[1];
const expensesAmountElem = document.querySelector('.expenses-amount');

// ? ===================================================== AppData ===========================================================
class AppData {
	constructor() {
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
	}
	// ? ===================================================== blockingInput ===========================================================
	blockingInput() {
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
	};
	// ? ===================================================== blockingInput ===========================================================


	// ? ===================================================== reset ===========================================================
	reset() {
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
	};
	// ? ===================================================== reset ===========================================================


	// ? ===================================================== startDisabled ===========================================================
	startDisabled() {
		startElem.disabled = true;
		salaryAmountElem.addEventListener('input', () => {
			if (salaryAmountElem.value === '') {
				startElem.disabled = true;
			} else {
				startElem.disabled = false;
			};
		});
	};
	// ? ===================================================== startDisabled ===========================================================



	// ? ===================================================== start ===========================================================
	start() {
		this.budget = +salaryAmountElem.value;

		this.getExpInc();

		this.getExpensesMonth();
		this.getIncomeMonth();

		this.getBudget();
		this.getAddExpInc();


		this.showResult();
		this.blockingInput();
	};
	// ? ===================================================== start ===========================================================


	// ? ===================================================== showResult ===========================================================
	showResult() {
		budgetMonthValueElem.value = this.budgetMonth;
		budgetDayValueElem.value = this.budgetDay;
		expensesMonthValueElem.value = this.expensesMonth;
		additionalExpensesValueElem.value = this.addExpenses.join(', ');
		additionalIncomeValueElem.value = this.addIncome.join(', ');
		targetMonthValueElem.value = this.getTargetMonth();
		incomePeriodValueElem.value = this.calcSavedMoney();
		periodSelectElem.addEventListener('input', this.changeIncomePeriodValue.bind(this));
	};
	// ? ===================================================== showResult ===========================================================


	// ? ===================================================== addExpIncBlok ===========================================================
	addExpIncBlok(data, btn) {
		const clasName = data[0].className;
		let CloneExpIncElem = data[0].cloneNode(true);
		CloneExpIncElem.children[0].value = '';
		CloneExpIncElem.children[1].value = '';
		data[0].parentNode.insertBefore(CloneExpIncElem, btn);
		data = document.querySelectorAll(`.${clasName}`);
		if (data.length === 3 && clasName === 'income-items') {
			incomeAddElem.style.display = 'none';
		} else if (data.length === 3 && clasName === 'expenses-items') {
			expensesAddElem.style.display = 'none';
		};
		CloneExpIncElem.children[0].addEventListener('input', () => {
			CloneExpIncElem.children[0].value = CloneExpIncElem.children[0].value.replace(/[^А-Я ,]/i, '');
		});
		CloneExpIncElem.children[1].addEventListener('input', () => {
			CloneExpIncElem.children[1].value = CloneExpIncElem.children[1].value.replace(/\D/, '');
		});
	}
	// ? ===================================================== addExpIncBlok ===========================================================


	// ? ===================================================== getExpInc ===========================================================
	getExpInc() {
		const count = (item) => {
			const startStr = item.className.split('-')[0];
			const itemTitle = item.children[0].value;
			const itemAmount = item.children[1].value;
			if (itemTitle !== '' && itemAmount !== '') {
				this[startStr][itemTitle.trim()] = +itemAmount.trim();
			};
		};
		incomeItemsElem.forEach(count);
		expensesItemsElems.forEach(count);
	}
	// ? ===================================================== getExpInc ===========================================================


	// ? ===================================================== getAddExpInc ===========================================================
	getAddExpInc() {
		const count = (value, str) => {
			str = 'add' + str[0].toUpperCase() + str.substring(1);
			value = value.trim();
			if (value !== '') {
				this[str].push(value);
			};
		};

		additionalIncomeItemElems.forEach(item => {
			let str = additionalIncomeItemElems[0].className.split('_')[1].split('-')[0];
			count(item.value, str);
		});
		additionalExpensesItemElem.value.split(',').forEach(item => {
			let str = additionalExpensesItemElem.className.split('_')[1].split('-')[0];
			count(item, str);

		});
	}
	// ? ===================================================== getAddExpInc ===========================================================


	// ? ===================================================== getExpensesMonth ===========================================================
	getExpensesMonth() {
		for (let key in this.expenses) {
			this.expensesMonth += this.expenses[key];
		};
	};
	// ? ===================================================== getExpensesMonth ===========================================================


	// ? ===================================================== getIncomeMonth ===========================================================
	getIncomeMonth() {
		for (let key in this.income) {
			this.incomeMonth += this.income[key];
		};
	};
	// ? ===================================================== getIncomeMonth ===========================================================


	// ? ===================================================== getBudget ===========================================================
	getBudget() {
		this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
		this.budgetDay = +(this.budgetMonth / 30).toFixed(2);
	};
	// ? ===================================================== getBudget ===========================================================


	// ? ===================================================== getTargetMonth ===========================================================
	getTargetMonth() {
		return Math.ceil(targetAmountElem.value / this.budgetMonth);
	};
	// ? ===================================================== getTargetMonth ===========================================================


	// ? ===================================================== calcSavedMoney ===========================================================
	calcSavedMoney() {
		return this.budgetMonth * periodSelectElem.value;
	};
	// ? ===================================================== calcSavedMoney ===========================================================


	// ? ===================================================== changePeriodAmount ===========================================================
	changePeriodAmount() {
		periodAmountElem.textContent = periodSelectElem.value;
	};
	// ? ===================================================== changePeriodAmount ===========================================================


	// ? ===================================================== changeIncomePeriodValue ===========================================================
	changeIncomePeriodValue() {
		incomePeriodValueElem.value = this.budgetMonth * periodSelectElem.value;
	};
	// ? ===================================================== changeIncomePeriodValue ===========================================================


	// ? ===================================================== eventsListeners ===========================================================
	eventsListeners() {
		this.startDisabled();

		startElem.addEventListener('click', this.start.bind(appData));
		cancelElem.addEventListener('click', this.reset.bind(appData));

		expensesAddElem.addEventListener('click', () => {
			this.addExpIncBlok(expensesItemsElems, expensesAddElem);
		});

		incomeAddElem.addEventListener('click', () => {
			this.addExpIncBlok(incomeItemsElem, incomeAddElem);
		});

		periodSelectElem.addEventListener('input', this.changePeriodAmount);


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
	};
	// ? ===================================================== eventsListeners ===========================================================
};
// ? ===================================================== AppData ===========================================================



const appData = new AppData();
appData.eventsListeners();