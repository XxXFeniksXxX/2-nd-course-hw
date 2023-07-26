// // Задача 1_____________________________________
// const mas = [1, 5, 4, 10, 0, 3];

// for (let ser = 0; ser < mas.length; ser++){
//     if( mas[ser] == 10) break;
//     console.log(mas[ser]);
// 

// Задача 2______________________________________
// const mas = [1, 5, 4, 10, 0, 3];

// console.log(mas.indexOf(4));

// Задача 3____________________________________
// let mas = [1, 3, 5, 10, 20];
 
// mas = mas.join(' ');
// console.log(mas);

// Задача 4_____________________________________
// const mas = [];

// for (let st = 0; st < 3; st++) {
//   mas[st] = [];
//   for (let stb = 0; stb < 3; stb++) {
//     mas[st][stb] = 1;
//   };
// };
// console.log(mas);

// Задача 5_____________________________
// const mas = [1, 1, 1];
// mas[3] = 2;
// mas[4] = 2;
// mas[5] = 2;
// console.log(mas);

// Задача 6__________________________
// let mas = [9, 8, 7, 'a', 6, 5];

// mas = mas.sort();
// mas.splice(5, 1);
// console.log(mas);

// Задача 7___________________________________
const masT = [9, 8, 7, 6, 5];
const Play = (NumberEl) => {
    NumberEl = Number(prompt('Введите число'));
    for (gam = 0; gam <= 5; gam ++){
        if (masT[gam] == NumberEl){
            console.log('Вы угодали');
            break;
        } 
        if(masT[gam] == 5){
            console.log('Неа, хы');
        }
    }
}

// Задача 8____________________________________
// let Line = 'abcdef';
// let LineСhange = Line.split();
// LineСhange = LineСhange.reverse();
// LineСhange = LineСhange.join();
// console.log(LineСhange);

// Задача 9______________________________
// let mas = [[1, 2, 3,],[4, 5, 6]];
// console.log(mas);
// // for (let masIn of mas){
// //     for (element of masIn){
// //         console.log(element);
// //     }
// // }
// var mas2 = [];
// for (let i = 0; i < mas[0].length; i++) {
//     for(let j = 0; j < mas.length; j++) {
//         mas2.push(mas[j][i]);
//     }
// }
// mas2 = mas2.sort();
// console.log(mas2);

// Задача 10______________________________________
// let mas = [];
// for (let Nor = 0; Nor < 10; Nor++){
//     mas[Nor] = Nor+1;
// }
// console.log(mas);
// for(let sum = 0, i = 0; i < 10; i++){
//     sum = sum + mas[i];
//     if (i == 9){
//         console.log(`Сумма ровна ${sum}`);
//     }
// }

// Задача 11_________________________________
// const mas = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(mas);
// let Square = mas.map(item => (item ** 2));
// console.log(Square);

// Задача 12________________________________________
// const masStr = ['Гипертафроп', 'Лес', 'Кракрокрафия', 'Зелёный'];
// let mas2 = [];
// for (let ret = 0; ret < 4; ret++){
//     mas2[ret] = masStr[ret];
//     rty = mas2[ret].split(); 
//     rty = rty.length;
//     mas2[ret] = mas2[ret].length;
// }
// console.log(mas2);

// Задача 13____________________________________
// function filterPositive(array) {
//     const Noint = array.filter(rty => rty < 0);
//     console.log(Noint);
//   }
  
//   filterPositive([-1, 0, 5, -10, 56]); // => [-1, -10]
//   filterPositive([-25, 25, 0, -1000, -2]); // => [-25, -1000, -2]
  
// Задача 14____________________
