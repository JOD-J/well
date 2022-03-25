let money = 50000, 
income = 'ютуб', 
addExpenses = 'Интернет, Такси, Коммуналка', 
deposit = false, 
mission = 350000, 
period = 5;

console.log('typeof: ', typeof(money));
console.log('typeof: ', typeof(income));
console.log('typeof: ', typeof(deposit));
console.log('length: ', addExpenses.length);
console.log('text: ', 'Период равен' + ' ' + period + ' ' + 'месяцев и "Цель заработать' + ' ' + mission + ' ' + 'рублей"');
console.log('addExpenses: ', addExpenses.toLowerCase().split());

let budgetDay = money / 30;
console.log('budgetDay: ', budgetDay);
