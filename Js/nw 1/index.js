let a = 10;
alert(a);
alert(a = 20);

let yearofrelease = 2007;
alert(`Год выпуска первого айфона: ${yearofrelease}.`);

let doveloper = String("Бренданом Айком");
alert(`Разработчиком JS является: ${doveloper}!`);

let h = Number("10");
let n = Number("2");
alert(`Сумма: ${h + n}, разность: ${h - n} произведение: ${h * n}  частность: ${h % n}.`);

let dva = Number("2");
let result = dva ** 5
alert(`Два в 5 степени = ${result}`);

let dev = Number("9");
let devr = Number("2");
alert(`Частность чисел 9 и 2 = ${dev % devr}`);

let num = 1;
num = num + 5;
num = num - 3;
num = num * 7;
num = num / 3;
num = num + 1;
num = num - 1;
alert(num);

let age = Number(prompt('Сколько вам лет'));
alert(`Поздравляю, вам ${age} лет(года, год)!`);

const user = {
    name: String("Александр"),
    ageuser: Number("23"),
    isAdmin: Boolean(true)
}
user['city of residence'] = "Moscov";
user.ageuser = 34;

delete user['city Of Residence'];

let info = prompt('Что вы хотите узнать о пользователе? (name, ageuser или isAdmin)');
alert(user[info]);

let nameuser = prompt('Как вас зовут');
alert(`Привет ${nameuser}!`);