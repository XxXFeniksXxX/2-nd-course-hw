// Задача 1_________________________________
// let Line = ('Преоброзование строки к верхнему регистру');
// const rty = Line.toUpperCase();
// console.log(rty);

// Задание 2_________________________________________


// const Search = (mas, query) => {
//   return mas.filter(el => el.toLowerCase().indexOf(query.toLowerCase()) !== -1)
// }

// console.log(Search(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
// console.log(Search(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
// console.log(Search(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

// Задание 3__________________________________________________

// let NumberT = 32.58884;
// let One = Math.floor(NumberT);
// console.log(One);
// let Two = Math.round(NumberT);
// console.log(Two);
// let F = NumberT.toFixed();
// console.log(F);

// Задание 4__________________________________________________

// let maxr = Math.max(52, 53, 49, 77, 21, 32);
// console.log(maxr);

// let maxm = Math.min(52, 53, 49, 77, 21, 32);
// console.log(maxm);

// Задание 5______________________________________________________

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
//   }
// console.log(getRandomInt(10));

// Задание 6_____________________________________________________

// function getRandomArrNumbers(NumberU){
//     let mas = [];
//     for (let ega = Math.floor(NumberU / 2), rt = 0; rt < ega; rt ++){
//         let rty = Math.round(Math.random() * NumberU);
//         mas[rt] = rty; 
//     }
//     return mas;
// }
// console.log(getRandomArrNumbers(7));

// Задание 7__________________________________________________________

// function getRandomInt(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue)) + minValue;

// }
// console.log(getRandomInt(6, 9));

// Задача 8_____________________________________________________

// let currentDate = new Date();
// console.log(currentDate);

// Задача 9______________________________________________

// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 72);
// console.log(currentDate);

// Задача 10_______________________________________________

// function DateFormate(date){
    
//     console.log(myDate);
//     let god = myDate.getFullYear();
//     let mes = myDate.getMonth();
//     const mon = myDate.toLocaleString("ru", { month: 'long' });
//     const days = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
//     let fullDate = days[myDate.getDay()];
//     let den = myDate.getDate();
//     let hour = myDate.getHours(); // получаем час из нашей даты
//     let minute = myDate.getMinutes(); // получаем минуты
//     let second = myDate.getSeconds(); // получаем секунды
//     return (`Дата: ${den}/${mon}/${god}, - это <${fullDate}>. Время: ${hour}:${minute}:${second}`);
// }
// let myDate = new Date(2025,5,9,12,30,20);
// console.log(DateFormate(Date));

// function DateFormat(g, m, d, h, m, s){
//     var date = new Date(g, m, d, h, m, s);
    
//     var options = {
//       year: 'numeric',
//       month: 'long',
//       day: 'numeric',
//       hour: 'numeric',
//       minute: 'numeric',
//       second: 'numeric'
//     };
//     return date.toLocaleString("ru", options);
//     }
//     console.log(DateFormat(2025,5,25,12,30,20));