let num = 266219;
console.log('num: ', num);
let numString = String(num);
console.log('numString: ', numString);
let arrNumString = numString.split('');
console.log('arrNumString: ', arrNumString);
let arrNumStringValue = arrNumString.reduce(function(value, item){
	return +value * +item;
});
console.log('arrNumStringValue: ', arrNumStringValue);
let step = arrNumStringValue ** 3;
console.log('step: ', step);
let showNumTwo = String(step).slice(0, 2);
console.log('showNumTwo: ', showNumTwo);
