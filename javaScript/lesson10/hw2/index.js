// const getRandomNumbers = (number, arg1, arg2) => {
//   if (arg1 > arg2 || (arg1 < 0 && arg2 < 0)) {
//     return null;
//   }

//   const min = Math.ceil(arg1);
//   const max = Math.round(arg2);

//   const newArr = [];
//   for (let i = 0; i < number; i++) {
//     newArr.push(Math.trunc(Math.random() * (max - min + 1)) + min);
//   }
//   return newArr;
// };
// getRandomNumbers(100, -0.1, 0.1);

// 1Создаем функцию
// 2делаем проверку если первый агргумент больше второго то возврашаем нуль
// 3если нет целых чисел возвращаем нуль 
// 4создаем новый масивв корорый будем пушить рузультат
// 5проходим циклом по длинне результирующего масива
// 6пушим в циклев масив раномное максимальное и минимальное число
 

// const getRandomNumbers = (number, to, from) => {
//   if (to > from || (to < 0 && from < 0)) {
//     return null;
//   }
//   return Array(number)
//     .fill()
//     .map(() => from + (to - from) * Math.random())
//     .map((num) => (num < 0 ? Math.ceil(num) : Math.floor(num)));
// };
// const result = getRandomNumbers(100, -0.1, 0.1);
// console.log(result);
const getRandomNumbers = (length, from, to) => {
  const isWrongRange = to < from;
  const noNumbersBetween = to - from < 1 && Math.ceil(to) === Math.ceil(from);
  if (isWrongRange || noNumbersBetween) {
    return null;
  }
  return new Array(length)
    .fill()
    .map(() => from + (to - from) * Math.random())
    .map((num) => (num < 0 ? Math.ceil(num) : Math.floor(num)));
};
const result = getRandomNumbers(100, -0.1, 0.1);