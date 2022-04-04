'use strict';
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
	// * дополнительные доходы цифры
	income: {},
	// * дополнительные доходы строки слова
	addIncome: [],
	// * дополнительные расходы
	expenses: {},
	// * возможные расходы
	addExpenses: [],
	deposit: false,
	percentDeposit: 0,
	moneyDeposit: 0,
	mission: 50000,
	period: 3,
	// * зарплата за месяц
	budget: 0,
	// * бюджет день
	budgetDay: 0,
	// * бюджет месяц
	budgetMonth: 0,
	// * расходы месяц
	expensesMonth: 0,


	// ? ===================================================== asking ===========================================================
	asking: function () {

		if (confirm('Есть ли у вас дополнительный заработок?')) {б 
			let itemIncome = prompt('Какой у вас дополнительный заработок?', 'Пекарня');
			while (!isString(itemIncome)) {
				itemIncome = prompt('Какой у вас дополнительный заработок?', 'Пекарня');
			};
			let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
			while (!isNumber(cashIncome)) {
				cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', '10000');
			};
			appData.income[itemIncome.trim()] = +cashIncome.trim();
		};

		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую', 'такси, машина, ваня пипкин');
		if (addExpenses !== null) {
			appData.addExpenses = addExpenses.toLowerCase().trim().split(', ');
		};
		appData.deposit = confirm('Есть ли у вас депозит в банке?');


		for (let i = 0; i < 2; i++) {
			let response = prompt('Введите обязательную статью расходов?');
			while (!isString(response)) {
				response = prompt('Введите обязательную статью расходов?');
			};
			let sum = prompt('Во сколько это обойдется?');
			while (!isNumber(sum)) {
				sum = prompt('Во сколько это обойдется?');
			};
			appData.expenses[response.trim()] = +sum.trim();
		};
	},
	// ? ===================================================== asking ===========================================================


	// ? ===================================================== getExpensesMonth ===========================================================
	// * получаем расходы за месяц
	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth += appData.expenses[key];
		};
	},
	// ? ===================================================== getExpensesMonth ===========================================================


	// ? ===================================================== getBudget ===========================================================
	// * накопления за месяц
	getBudget: function () {
		appData.budgetMonth = appData.budget - appData.expensesMonth;
		appData.budgetDay = +(appData.budgetMonth / 30).toFixed(2);
	},
	// ? ===================================================== getBudget ===========================================================


	// ? ===================================================== getTargetMonth ===========================================================
	// * за сколько месяцев накопим сумму которая в mission
	getTargetMonth: function () {
		appData.period = Math.ceil(appData.mission / appData.budgetMonth);
		console.log(appData.period > 0 ? `Цель будет достигнута за ${appData.period} мес.` : 'Цель не будет достигнута');
	},
	// ? ===================================================== getTargetMonth ===========================================================


	// ? ===================================================== getStatusIncome ===========================================================
	// * статус дохода за месяц
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
		return appData.budgetMonth * appData.period;
	},
	// ? ===================================================== calcSavedMoney ===========================================================


};
// ? ===================================================== appData ===========================================================

// ? ===================================================== start ===========================================================
let money;
let start = function () {
	do {
		appData.budget = money = prompt('Ваш месячный доход?', 50000);
	}
	while (!isNumber(money))
};
start();
// ? ===================================================== start ===========================================================

appData.asking();
appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
appData.getStatusIncome();
appData.getInfoDeposit();
appData.calcSavedMoney();



console.log('appData: ', appData);

for (let key in appData) {
	console.log('Наша программа включает в себя данные', key, appData[key]);
};