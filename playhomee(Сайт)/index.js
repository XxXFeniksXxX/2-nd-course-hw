// Игра1__________________________________
const monthNumber = (monthMonth) => {
let month = prompt('Введите номер месяца');
(month == 9 || month == 10 || month == 11) ? alert('Осень') : 
(month == 12 || month == 1 || month == 2) ? alert('Зима') : 
(month == 3 || month == 4 || month == 5) ? alert('Весна') : 
(month == 6 || month == 7 || month == 8) ? alert('Лето') : 
alert('Вы ввели некорретное значение');
}

// Игра2____________________________________
function game2(){
let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
alert(`Запмни порядок слов: ${list.join(', ')}`);
let listRandom = list.sort(() => Math.random() - 0.5);

let WordOne = String(prompt(`Чему равнялся первый элемент массива? ${list.join(', ')}`));
let WordTwo = String(prompt(`Чему равнялся последний элемент массива? ${list.join(', ')}`));
list = ['яблоко', 'груша', 'дыня', 'виноград', 'персик', 'апельсин', 'мандарин'];
// for (let li = 0; li < 7; li++)
if (list[0].includes(WordOne.toLowerCase())) {
    if (list[6].includes(WordTwo.toLowerCase())){
        alert('Вы ответили верно, поздравляю');
    } else {
        alert('«Вы были близки к победе!»');
    } 
    } else {
        if (list[6].includes(WordTwo.toLowerCase())){
            alert('«Вы были близки к победе!»');
        } else {
            alert('«Не угодал, попробуй ещё раз!»');
        }
        
    }
}

