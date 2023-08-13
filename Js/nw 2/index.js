// Задание 1 
// let password = 'пароль';
// let control = (prompt('Введите пароль'));

// if (control === 'пароль') {
//     console.log('Пароль введен верно');
// } else {
//     console.log('Пароль введен не правильно');
// }


// Задание 2 _____________________________
// let c = Number(prompt('Введите число'));

// if (c > 0 && c < 10) {
//     console.log('верно');
// } else {
//     console.log('не верно');
// }


// Задание 3_______________________________
// let d = Number(prompt('Введите число'));
// let e = Number(prompt('Введите число'));

// if ( d > 100 || e > 100){
//     console.log('верно');
// } else {
//     console.log('не верно');
// }

// Задание 4______________________________
// let a = '2';
// let b = '3';

// console.log (Number(a) + Number(b));

// Задание 5______________________________
let monthMonth = prompt('Введите номер месяца');
switch (monthMonth) {
	case '1':
		console.log('Январь');
		break;
	case '2':
		console.log('Февраль');
		break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
	case '6':
		console.log('Июнь');
		break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
        break;
	case '10':
		console.log('Октябрь');
		break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;
	// все остальные дни недели
	default: console.log('номер месяца больше 13');
		break;
}
