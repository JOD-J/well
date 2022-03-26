'use strict';
let money = 50000;
// let money = +prompt('Ваш месячный доход?');
let income = 'ютуб';
let addExpenses = ' школа, техникум, магазин ';
// let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = true;
// let deposit = confirm('Есть ли у вас депозит в банке?');
let mission = 350000;
let period = 5;
let expenses1 = 'садик';
let amount1 = 10000;
let expenses2 = 'такси';
let amount2 = 5000;
// let expenses1 = prompt('Введите обязательную статью расходов?');
// let amount1 = +prompt('Во сколько это обойдется?');
// let expenses2 = prompt('Введите обязательную статью расходов?');
// let amount2 = +prompt('Во сколько это обойдется?');
let budgetDay;


// ? ===================================================== getExpensesMonth ===========================================================
// *! 1) Объявить функцию getExpensesMonth. Функция возвращает сумму всех обязательных расходов за месяц
const getExpensesMonth = function (amount1, amount2) {
	return amount1 + amount2;
};
// * расходы за месяц
let expensesMonth = getExpensesMonth(amount1, amount2);
console.log('amount1: ', amount1);
console.log('amount2: ', amount2);
console.log('expensesMonth: ', expensesMonth);
// ? ===================================================== getExpensesMonth ===========================================================


// ? ===================================================== getAccumulatedMonth ===========================================================
// *! 2) Объявить функцию getAccumulatedMonth. Функция возвращает Накопления за месяц (Доходы минус расходы)
const getAccumulatedMonth = function (money, expensesMonth) {
	return money - expensesMonth;
};
// *! 3) Объявить переменную accumulatedMonth и присвоить ей результат вызова функции getAccumulatedMonth s
// * накопление за месяц
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);
console.log('money: ', money);
console.log('accumulatedMonth: ', accumulatedMonth);
// ? ===================================================== getAccumulatedMonth ===========================================================


// ? ===================================================== getTargetMonth ===========================================================
// *! 4) Объявить функцию getTargetMonth. Подсчитывает за какой период будет достигнута цель, зная результат месячного накопления (accumulatedMonth) и возвращает результат
// *! 5) Удалить из кода переменную budgetMonth
const getTargetMonth = function (mission, accumulatedMonth) {
	return Math.ceil(mission / accumulatedMonth);
};
period = getTargetMonth(mission, accumulatedMonth);
console.log('period: ', period);
// ? ===================================================== getTargetMonth ===========================================================

// *! 6) budgetDay высчитываем исходя из значения месячного накопления (accumulatedMonth)
budgetDay = +(accumulatedMonth / 30).toFixed(2);
console.log('budgetDay: ', budgetDay);


// ? ===================================================== showTypeOf ===========================================================
// *! 7) Почистить консоль логи и добавить недостающие, должны остаться:
// *!  - вызовы функции showTypeOf
// *!  - Расходы за месяц вызов getExpensesMonth
// *!  - Вывод возможных расходов в виде массива (addExpenses)
// *!  - Cрок достижения цели в месяцах (результат вызова функции getTargetMonth) 
// *!  - Бюджет на день (budgetDay)
// *! - вызов функции getStatusIncome
const showTypeOf = function (data) {
	console.log(data, typeof (data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);
addExpenses = addExpenses.trim().split(', ');
console.log('addExpenses: ', addExpenses);
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