'use strict';
let isNumber = function (n) {
	return !isNaN(parseFloat(n)) && isFinite(n);
};

let money;
let income = 'ютуб';
// let addExpenses = ' школа, техникум, магазин ';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
// let deposit = true;
let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 350000;
let period;
let budgetDay;
let expensesAmount = 0;
let expenses = [];

let start = function () {
	do {
		money = +prompt('Ваш месячный доход?');
	}
	while (!isNumber(money))
};
start();

// ? ===================================================== getExpensesMonth ===========================================================
const getExpensesMonth = function () {
	let sum = 0;
	for (let i = 0; i < 2; i++) {
		expenses[i] = prompt('Введите обязательную статью расходов?');
		sum = prompt('Во сколько это обойдется?');
		while (!isNumber(sum)) {
			sum = prompt('Во сколько это обойдется?');
		};
		expensesAmount = expensesAmount + +sum;
	};
	return expensesAmount;
};
getExpensesMonth();
// ? ===================================================== getExpensesMonth ===========================================================


// ? ===================================================== getAccumulatedMonth ===========================================================
const getAccumulatedMonth = function (money, expensesAmount) {
	return money - expensesAmount;
};
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
// ? ===================================================== getAccumulatedMonth ===========================================================


// ? ===================================================== getTargetMonth ===========================================================
const getTargetMonth = function (mission, accumulatedMonth) {
	return Math.ceil(mission / accumulatedMonth);
};
period = getTargetMonth(mission, accumulatedMonth);
console.log(period > 0 ? `Цель будет достигнута за ${period} месяц` : 'Цель не будет достигнута');
// ? ===================================================== getTargetMonth ===========================================================

budgetDay = +(accumulatedMonth / 30).toFixed(2);


// ? ===================================================== showTypeOf ===========================================================
const showTypeOf = function (data) {
	console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
addExpenses = addExpenses.trim().split(', ');
// ? ===================================================== showTypeOf ===========================================================


// ? ===================================================== getStatusIncome ===========================================================
const getStatusIncome = function () {
	if (budgetDay >= 1200) {
		return 'У вас высокий уровень дохода';
	} else if (budgetDay >= 600 && budgetDay < 1200) {
		return 'У вас средний уровень дохода';
	} else if (budgetDay < 600 && budgetDay >= 0) {
		return 'К сожалению у вас уровень дохода ниже среднего';
	} else if (budgetDay < 0) {
		return 'Что то пошло не так';
	};
};
console.log(getStatusIncome());
// ? ===================================================== getStatusIncome ===========================================================