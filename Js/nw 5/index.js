// Задача 1_____________________________________________
const lesser = (NumberOne, NumberTwo) => {
    NumberOne = Number(prompt('Введите число'));
    NumberTwo = Number(prompt('Введите число'));
    if (NumberOne <= NumberTwo) {
        console.log(`Меньшее число ${NumberOne}`);
    } else {
        console.log(`Меньшее число ${NumberTwo}`);
    }
    // (NumberOne <= NumberTwo) ? console.log(`Меньшее число ${NumberOne}`) : console.log(`Меньшее число ${NumberTwo}`);
}
// Задача 2_____________________________________________________
const Parity = (NumberP) => {
    NumberP = Number(prompt('Введите число, чтобы проверить чётность'));
    (NumberP % 2) ? console.log('Ваше число не чётное') : console.log('Ваше число чётное');
}

// Задача 3_____________Принемает:выводит в консоль и возвращает стоит только попросить, хах__________________
const Squaring = (NumberSqy) => {
    NumberSqy = Number(prompt('Введите число'));
    console.log(`Квадрат числа равен ${NumberSqy ** 2}`);
    return NumberSqy ** 2;
}
// console.log(`Просто проверка того, что возвращает`, Squaring());

// Задача 4__________________________________________________
const Greetings = (Age) => {
    Age = Number(prompt('Сколько вам лет?'));
    if (Age <= 12 && Age >=0){
        alert("Привет, друг!");
    } else if (Age > 12){
        alert("«Добро пожаловать!»");
    } else if (Age < 0){
        alert("«Вы ввели неправильное значение»")
    }
}

// Задача 5_____________________________
const cube = (NomberCube) => {
    NomberCube = Number(prompt('Введите число'));
    if (Number.isFinite(NomberCube)){
        if (NomberCube == 0){
            for (let rty = 0; rty <= 10; rty++){
            console.log(`n в кубе равняется ${rty ** 3}`);
            }
        } else alert(`n в кубе равняется ${NomberCube ** 3}`)
    } else  {
        alert("Переданный параметр не является числом.");
    }
}
function ale(){
// Задача 6____________________________________________

const circle1 = {
    radius: 3,

    getArea() {
        return (`Площадь круга circle1 = ${circle1.radius ** 2 * 3.14}`);
    },
    getPerimeter() {
        return (`Периметр jrhe;yjcnb circle1 = ${circle1.radius * 2 * 3.14}`);
    }

}
const circle2 = {
    radius: 45,
    getArea() {
    return (`Площадь круга circle2 = ${circle2.radius ** 2 * 3.14}`);
    },
    getPerimeter() {
        return (`Периметр окружности circle2 = ${circle2.radius * 2 * 3.14}`);
    }
}
console.log(circle1.getArea());
console.log(circle1.getPerimeter());
console.log(circle2.getArea());
console.log(circle2.getPerimeter());
}


