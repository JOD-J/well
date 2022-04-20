/* Напишите функцию на JS. Цель: Убрать все объекты с типом
additional, а для basic очки уменьшить в двое.

Изменить необходимо исходный массив
*/

/* Напишите функцию на JS. Цель: Убрать все объекты с типом additional, а для basic очки уменьшить в двое.

Изменить необходимо исходный массив*/

const myLessonOne = [{
		lesson: 1,
		type: 'basic',
		points: 2
	},
	{
		lesson: 2,
		type: 'additional',
		points: 4
	},
	{
		lesson: 3,
		type: 'basic',
		points: 6
	},
	{
		lesson: 4,
		type: 'additional',
		points: 3
	},
	{
		lesson: 5,
		type: 'basic',
		points: 4
	},
	{
		lesson: 6,
		type: 'basic',
		points: 2
	},
	{
		lesson: 7,
		type: 'additional',
		points: 2
	},
	{
		lesson: 8,
		type: 'basic',
		points: 6
	},
	{
		lesson: 9,
		type: 'basic',
		points: 4
	},
	{
		lesson: 10,
		type: 'basic',
		points: 6
	},
	{
		lesson: 11,
		type: 'additional',
		points: 5
	},
	{
		lesson: 12,
		type: 'basic',
		points: 2
	},
	{
		lesson: 13,
		type: 'additional',
		points: 2
	},
	{
		lesson: 14,
		type: 'basic',
		points: 4
	},
	{
		lesson: 15,
		type: 'additional',
		points: 1
	},
	{
		lesson: 16,
		type: 'additional',
		points: 7
	},
];
const changeMyLessonOne = () => {
	myLessonOne.forEach(item => {
		if (item.type === 'basic') {
			item.points = item.points / 2;
		};
	});
	myLessonOne.forEach((item, index) => {
		if (item.type === 'additional') {
			myLessonOne.splice(index, 1);
		};
	});
	myLessonOne.forEach((item, index) => {
		if (item.type === 'additional') {
			myLessonOne.splice(index, 1);
		};
	});
};
// changeMyLessonOne();



/* Напишите функцию на JS. Цель: Убрать все объекты с типом
additional, а для basic очки уменьшить в двое.

Cоздать новый массив, оставляя исходные данные неизменными */

/* Напишите функцию на JS. Цель: Убрать все объекты с типом additional, а для basic очки уменьшить в двое.

Cоздать новый массив, оставляя исходные данные неизменными */

const myLessonTwo = [{
		lesson: 1,
		type: 'basic',
		points: 2
	},
	{
		lesson: 2,
		type: 'additional',
		points: 4
	},
	{
		lesson: 3,
		type: 'basic',
		points: 6
	},
	{
		lesson: 4,
		type: 'additional',
		points: 3
	},
	{
		lesson: 5,
		type: 'basic',
		points: 4
	},
	{
		lesson: 6,
		type: 'basic',
		points: 2
	},
	{
		lesson: 7,
		type: 'additional',
		points: 2
	},
	{
		lesson: 8,
		type: 'basic',
		points: 6
	},
	{
		lesson: 9,
		type: 'basic',
		points: 4
	},
	{
		lesson: 10,
		type: 'basic',
		points: 6
	},
	{
		lesson: 11,
		type: 'additional',
		points: 5
	},
	{
		lesson: 12,
		type: 'basic',
		points: 2
	},
	{
		lesson: 13,
		type: 'additional',
		points: 2
	},
	{
		lesson: 14,
		type: 'basic',
		points: 4
	},
	{
		lesson: 15,
		type: 'additional',
		points: 1
	},
	{
		lesson: 16,
		type: 'additional',
		points: 7
	},
];

let newMyLessonTwo = [];
const changeMyLessonTwo = () => {
	// let newMyLessonTwo = new Set(myLessonTwo);

	// newMyLessonTwo.forEach(item => {
	// 	if (item.type === 'basic') {
	// 		// item.points = item.points / 2;
	// 	};
	// });
	myLessonTwo.forEach((item, index) => {
		if (item.type === 'basic') {
			newMyLessonTwo.slice(index, 1);
		};
	});
	// newMyLessonTwo.forEach(item => {
	// 	if (item.type === 'basic') {
	// 		item.points = item.points / 2;
	// 	};
	// });
	console.log('myLessonTwo: ', myLessonTwo);
	console.log('newMyLessonTwo: ', newMyLessonTwo);
};
changeMyLessonTwo();