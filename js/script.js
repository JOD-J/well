// 'use strict';
// ? ===================================================== isNumber ===========================================================
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};
// ? ===================================================== isNumber ===========================================================


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
		let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
		if (addExpenses !== null) {
			appData.addExpenses = addExpenses.toLowerCase().trim().split(', ');
		};
		appData.deposit = confirm('Есть ли у вас депозит в банке?');
		for (let i = 0; i < 2; i++) {
			let response = prompt('Введите обязательную статью расходов?');
			if (response !== null) {
				response.trim();
			};
			while (response === null || response === '') {
				response = prompt('Введите обязательную статью расходов?');
				if (response !== null) {
					response.trim();
				};
			};
			let sum = prompt('Во сколько это обойдется?');
			while (!isNumber(sum)) {
				sum = prompt('Во сколько это обойдется?');
			};
			appData.expenses[response] = +sum;
		};
	},
	// ? ===================================================== asking ===========================================================


	// ? ===================================================== getExpensesMonth ===========================================================
	// * получаем расходы за месяц
	getExpensesMonth: function () {
		for (let key in appData.expenses) {
			appData.expensesMonth = appData.expensesMonth + appData.expenses[key];
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
			return 'У вас высокий уровень дохода';
		} else if (appData.budgetDay >= 600 && appData.budgetDay < 1200) {
			return 'У вас средний уровень дохода';
		} else if (appData.budgetDay < 600 && appData.budgetDay >= 0) {
			return 'К сожалению у вас уровень дохода ниже среднего';
		} else if (appData.budgetDay < 0) {
			return 'Что то пошло не так';
		};
	},
	// ? ===================================================== getStatusIncome ===========================================================
};
// ? ===================================================== appData ===========================================================

// ? ===================================================== start ===========================================================
let money;
let start = function () {
	do {
		appData.budget = money = +prompt('Ваш месячный доход?');
	}
	while (!isNumber(money))
};
start();
// ? ===================================================== start ===========================================================
appData.asking();

appData.getExpensesMonth();
console.log('appData.expensesMonth: ', appData.expensesMonth);

appData.getBudget();
appData.getTargetMonth();
console.log('appData.getStatusIncome(): ', appData.getStatusIncome());

for (let key in appData) {
	console.log('Наша программа включает в себя данные', key, appData[key]);
};