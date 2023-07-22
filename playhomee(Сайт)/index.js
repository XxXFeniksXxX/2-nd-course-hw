const monthNumber = (nomerMonth) => {
let nomer = prompt('Введите номер месяца');
(nomer == 9 || nomer == 10 || nomer == 11) ? alert('Осень') : 
(nomer == 12 || nomer == 1 || nomer == 2) ? alert('Зима') : 
(nomer == 3 || nomer == 4 || nomer == 5) ? alert('Весна') : 
(nomer == 6 || nomer == 7 || nomer == 8) ? alert('Лето') : 
alert('Вы ввели некорретное значение');
}