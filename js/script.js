'use strict';
const booksElem = document.querySelector('.books');
const bookElem = document.querySelectorAll('.book');
const advElem = document.querySelector('.adv');
const bodyElem = document.querySelector('body');

advElem.remove();

bodyElem.style.backgroundImage = 'url(image/adv.jpg)';

booksElem.append(bookElem[1]);
booksElem.append(bookElem[0]);
booksElem.append(bookElem[4]);
booksElem.append(bookElem[3]);
booksElem.append(bookElem[5]);
booksElem.append(bookElem[2]);

bookElem[4].querySelector('a').textContent = 'Книга 3. this и Прототипы Объектов';


let ulBookElem0 = bookElem[0].querySelector('ul');
let liBookElem0 = ulBookElem0.querySelectorAll('li');

ulBookElem0.append(liBookElem0[2]);
ulBookElem0.append(liBookElem0[10]);
ulBookElem0.prepend(liBookElem0[8]);
ulBookElem0.prepend(liBookElem0[6]);
ulBookElem0.prepend(liBookElem0[3]);
ulBookElem0.prepend(liBookElem0[1]);
ulBookElem0.prepend(liBookElem0[0]);


let ulBookElem5 = bookElem[5].querySelector('ul');
let liBookElem5 = ulBookElem5.querySelectorAll('li');

ulBookElem5.append(liBookElem5[5]);
ulBookElem5.append(liBookElem5[8]);
ulBookElem5.append(liBookElem5[10]);
ulBookElem5.prepend(liBookElem5[4]);
ulBookElem5.prepend(liBookElem5[3]);
ulBookElem5.prepend(liBookElem5[9]);
ulBookElem5.prepend(liBookElem5[1]);
ulBookElem5.prepend(liBookElem5[0]);

let ulBookElem2 = bookElem[2].querySelector('ul');
let liBookElem2 = ulBookElem2.querySelectorAll('li');

let li = document.createElement('li');
li.textContent = 'Глава 8: За пределами ES6';
liBookElem2[9].before(li);
