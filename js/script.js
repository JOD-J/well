'use strict';
let money = +prompt('Ваш месячный доход?');
console.log('money: ', money);
let income = 'ютуб';
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
console.log('addExpenses: ', addExpenses);
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log('deposit: ', deposit);
let mission = 350000;
let period = 5;
let expenses1 = prompt('Введите обязательную статью расходов?');
console.log('expenses1: ', expenses1);
let amount1 = +prompt('Во сколько это обойдется?');
console.log('amount1: ', amount1);
let expenses2 = prompt('Введите обязательную статью расходов?');
console.log('expenses2: ', expenses2);
let amount2 = +prompt('Во сколько это обойдется?');
console.log('amount2: ', amount2);
let budgetMonth = money - amount1 - amount2;
console.log('budgetMonth: ', budgetMonth);
let monthsMission = (mission / budgetMonth);
console.log('monthsMission: ', monthsMission);
console.log('ceilMonthsMission: ', Math.ceil(monthsMission));
let budgetDay = budgetMonth / 30;
console.log('budgetDay: ', budgetDay);
console.log('floorBudgetDay: ', Math.floor(budgetDay));

if (budgetDay > 1200) {
	console.log('У вас высокий уровень дохода');
} else if (budgetDay > 600 && budgetDay < 1200) {
	console.log('У вас средний уровень дохода');
} else if (budgetDay < 600 && budgetDay > 0) {
	console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
	console.log('Что то пошло не так');
}
