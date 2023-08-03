// function splitAndMerge(string, separator) {
//     let a = string.split(" ");
//     let rty = []; 
//     for (i = 0; i < a.length; i++){ 
//      rty[i] = a[i].split('').join(separator);
//      if (i == a.length - 1){
//        return rty.join(' ');
//      }
//     }
//    }
//    console.log(splitAndMerge("My name is John","="));
// _______________________________________________________________
// function sumMul(n,m){
//     if (n > 0 && m > 0){
//         let rty = 0;

//         for (i = 1; i < m; i++){
//             if (i % n == 0){
//                 rty = rty + i; 
//             } 
//             if (i == m - 1){
//                 return rty;
//             }
//         }
//     } 
//     else {
//         return ('INVALID');
//     }

//     }

//    console.log(sumMul(2, 7));
// ________________________________________________________________________
// function distinct(a) {
//     rty = [];
//     for (i = 0; i < a.length; i++){
//         if (a[i] > 0){
//             rty[i] = a[i];
//             if (i == a.length - 1){
//                 const newSet = new Set(a);
//                 return Array.from(newSet);
//             }
//         } else {
//             return ('INVALID');
//         }
//     }
//   }
//   console.log(distinct([1,1,2,4,2, 8, 8]));
// ______________________________________________________________________
// function dutyFree(normPrice, discount, hol){
//     if (normPrice > 0 && discount > 0 && hol > 0){
//     return Math.floor(hol / (normPrice / 100 * discount)); 
//     } else {
//         return ('INVALID');
//     }
// }
// console.log(dutyFree(17, 0, 500));
// ___________________________________________________________________
// function whoIsPaying(name){
//     if (name.split("").length <= 2 ){
//         return ([name]);
//     }
//     let rty = [];
//     ert = name.split("");
//     for (i = 0; i < 2; i++){
//         rty[i] = ert[i];
//         if ( i == 1){
//             let rtycont = [];
//             rtycont[0] = name;
//             rtycont[1] = rty.join("");
//             return rtycont;
//         }
//     }
// }

//   console.log(whoIsPaying("yt"));
// __________________________________________________________
// function greet(language) {
//     if (typeof language == 'string'){
// 	const ert = {
//         english: 'Welcome',
//         czech: 'Vitejte',
//         danish: 'Velkomst',
//         dutch: 'Welkom',
//         estonian: 'Tere tulemast',
//         finnish: 'Tervetuloa',
//         flemish: 'Welgekomen',
//         french: 'Bienvenue',
//         german: 'Willkommen',
//         irish: 'Failte',
//         italian: 'Benvenuto',
//         latvian: 'Gaidits',
//         lithuanian: 'Laukiamas',
//         polish: 'Witamy',
//         spanish: 'Bienvenido',
//         swedish: 'Valkommen',
//         welsh: 'Croeso'
//     }
//    let frt = Object.keys(ert);
//         for (i = 0; i < Object.keys(ert).length; i++){
//             console.log (i);
//             console.log(frt[i]);
//             if (frt[i] == language){
//                 return ert[language];
//             } 
//             if (i >= Object.keys(ert).length - 1){
//                 return 'Welcome';
//             }
//         } 
//     } else {
//         return 'Welcome';
//     }
// }

// console.log(greet('latvian'));
// ____________________________________________________________________
// const quarterOf = (month) => {

//     if (1 <= month && month <= 12){
//         if (month == 10 || month == 11 || month == 12){
//                 return 4;
//             } else if (month == 1 || month == 2 || month == 3){
//                 return 1;
//             } else if (month == 4 || month == 5 || month == 6){
//                 return 2;
//             } else if (month == 7 || month == 8 || month == 9){
//                 return 3;
//             }
//         }  else {
//         return ('INVALID');
//     }
// }
//   console.log(quarterOf(8));
// __________________________________________________________________
// function pipeFix(numbers){
//     let rty = [];
//     rty.length = numbers.at(-1) - numbers[0] + 1;
//     for (i = 0; i < rty.length; i++){
//     rty[i] = numbers[0] + i;
//     if (i >= rty.length - 1){
//         return rty;
//     }
//     }
// }

// console.log(pipeFix([-3, 1,2,3,5,6,8,9]));
// ________________________________________________________________________
// function enough(cap, on, wait) {
//     if (on + wait > cap){
//         return on - (cap - wait);
//     } else {
//         return 0;
//     }
//   }

//   console.log(enough(79, 71, 36));
// _________________________________________________________________
// function getChar(c){
//     return (String.fromCharCode(c)); 
//   }

// console.log(getChar(64));
// _______________________________________________________
// function fakeBin(x){
//     if (x != []){
//     let rty = x.split("");
//     let tre = [];
//     for (i = 0; i < rty.length; i++){
//         if (rty[i] < 5){
//             tre[i] = 0;
//         } else {
//             tre[i] = 1;
//         }
//         if (i >= rty.length - 1){
//             return tre.join("");
//         }
//     }
// } else return ('INVALID');
// }

// console.log(fakeBin(''));
// ____________________________________________________
// function reverseList(list) {
//     return list.reverse();
// }

// console.log(reverseList([1,2,3,4]));
// _______________________________________________________________
// function findNeedle(haystack) {
//     for (i = 0; i < haystack.length; i++){
//         if (haystack[i] == undefined){
//             return 'undefined, "Your function didn\'t return anything"'
//         }
//         if (haystack[i] == "needle"){
//             return `found the needle at position ${i}`;
//         }
//         if (i >= haystack.length - 1){
//             return "Your function didn't return anything";
//         }
//     }
//   }
//  console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]));
// ________________________________________________________________________
// function noBoringZeros(n) {
//     n = String(n);
//     let rty = n.split("");
//     for (let b = rty.length; b + 1 > rty.length; b++) {
//         if (rty[rty.length - 1] == 0){
//             rty.splice (rty.length - 1, 1);
//         } else return Number(rty.join(""));
//     }
//   }

//   console.log(noBoringZeros(960000));
// _________________________________________________________________
// function strCount(str, letter){  
//     if (str == ""){
//         return 0;
//     }
//     let rty = 0;
//     console.log(str.length);
//     if (Array.isArray(str)){
//         for (let i = 0; i < str.length; i++){
//             if (str[i] == letter){
//                 rty = rty + 1;
//             }
//             if (i >= str.length - 1){
//                 return rty;
//             }
//         }
//       } else {
//         tre = str.split("");
//     console.log(tre);
//     for (let i = 0; i < tre.length; i++){
//         if (tre[i] == letter){
//             rty = rty + 1;
//         }
//         if (i >= tre.length - 1){
//             return rty;
//         }
//     }
//       }
//     }

//   console.log(strCount('hello', 'l'));
// __________________________________________________________________
// const flip = (d, a)=>{
//     if (d == 'R'){
//       return a.sort((a, b) => a - b);
//       } else (d == 'L');{
//       a.sort((a, b) => a - b);
//       };
//       return a.reverse();
//     }

//   console.log(flip('R', [ 13, 2, 4, 7, 93 ]));
//   console.log(flip('L', [13, 2, 4, 7, 93]));
// __________________________________________________________________
// function addLength(str) {
//   if (str == ''){
//     return 0;
//   } else {
//     const getWordLengths = str => str.split(' ').map(word => word.length);
//     rty = str.split(" ");
//     rtg = getWordLengths(str);
//     let rui = [];
//     for (let i = 0; i < rty.length; i++){
//       let rte = [];
//       rte [0] = rty [i];
//       rte [1] = rtg[i];
//       rui [i] = rte.join(" ");
//       if (i >= rty.length - 1){
//         return rui;
//         }
//       }
//     }
//   }
  
// console.log(addLength("you will win"));

// function addLength(str){
//   return str.split(" ").map(s => `${s} ${s.length}`)
// }
// console.log(addLength("you will win"));
// _________________________________________________________________________
// function findAverage(array) {
//   if (array.length == 0){
//     return 0;
//   } else{
//     let sum = 0;
//     array.map((item) => sum += item);
//     return sum / array.length;
//   }
// }
// console.log(findAverage([]));
// function strengred (str){
//     return str.split(" ");
//  }
//  console.log(strengred('Проверка превращения строки в массив'));
 
// let str = ('Проверка превращения строки в массив');
// const numbers = Array.from(str);
// console.log(numbers);

// const result = [...'Проверка превращения строки в массив'];
// result.forEach((item) => console.log(item));

function strengred (mas){
    let rty = mas.splice(Math.round(mas.length / 2),1);//floor()
    return mas;
 }
 console.log(strengred([1,2,3,4,5,6,7,8,9,10,11]));