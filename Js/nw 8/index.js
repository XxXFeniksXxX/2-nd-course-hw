// Задание 1_____________________________________

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
//  ];

// function byField(field) {
// return (a, b) => a[field] > b[field] ? 1 : -1;
// }

// people.sort(byField('age'));
// console.log(people);
    
// Задание 2________________________
// function isPositive(arg) {
//     return arg > 0;
//     }
//     function isMale(field) {
//     return field.gender == 'male';
//     }
//     function filter(rty, code) {
//     return rty.filter(code);
//     }
    
//     console.log(filter([3, -4, 1, 9], isPositive)); // Должен выводить [3, 1, 9]
    
//     const people = [
//        {name: 'Глеб', gender: 'male'},
//        {name: 'Анна', gender: 'female'},
//        {name: 'Олег', gender: 'male'},
//        {name: 'Оксана', gender: 'female'}
//     ];
    
//     console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]

// Задание 3_________________________________________
// const timer = (deadline) => {
// 	let time = deadline;
//     let currentDate = new Date();
//     console.log(currentDate); // Начиная с нуля
// 	const interval = setInterval(() => {
// 		time -= 1;
//         console.log(currentDate);
// 	}, 3000);


// 	setTimeout(() => {
//     clearInterval(interval);
//     console.log('Время истекло!')
//   }, deadline * 1000)
// };

// timer(30);

// Задание 4___________________________________
// function delayForSecond(callback) {
//     setTimeout(callback, 1000);
//   callback();
// }

// delayForSecond(function () {
//   console.log('Привет, Глеб!');
// })

// Задание 5______________________________
// Функция delayForSecond через 1 секунду пишет в консоль «Прошла одна секунда», 
// а затем вызывает переданный колбэк
// function delayForSecond(cb) {
//     setTimeout(() => {
//         console.log('Прошла одна секунда');
// 				if(cb) { 	cb(); }

//     }, 1000)
// }

// // Функция sayHi выводит в консоль приветствие для указанного имени
// function sayHi (name) {
//     console.log(`Привет, ${name}!`);
// }

// // Код выше менять нельзя

// // Нужно изменить код ниже:
// delayForSecond(function () {
//       sayHi('Глеб');
//     })

    