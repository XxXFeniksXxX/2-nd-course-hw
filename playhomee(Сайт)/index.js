// Игра1__________________________________
const monthNumber = (nomerMonth) => {
let nomer = prompt('Введите номер месяца');
(nomer == 9 || nomer == 10 || nomer == 11) ? alert('Осень') : 
(nomer == 12 || nomer == 1 || nomer == 2) ? alert('Зима') : 
(nomer == 3 || nomer == 4 || nomer == 5) ? alert('Весна') : 
(nomer == 6 || nomer == 7 || nomer == 8) ? alert('Лето') : 
alert('Вы ввели некорретное значение');
}

// Игра2____________________________________
function game2(){
let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
alert(`Запмни порядок слов: ${list.join(', ')}`);
listRandom = list.sort(() => Math.random() - 0.5);

WordOne = String(prompt(`Чему равнялся первый элемент массива? ${list.join(', ')}`));
WordTwo = String(prompt(`Чему равнялся последний элемент массива? ${list.join(', ')}`));
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

