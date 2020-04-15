// const cleanTransactionsList = (arr) => {
//   const numbers = arr.map((el) => Number.parseFloat(el));
//   const filterNumbers = numbers.filter((number, index) => number > 1);
//   const str = filterNumbers.join(" ");
//   const newArr = str.split(" ");
//   const result = [];
//   const string = newArr.forEach((number) => {
//     let concatDollar = "$".concat(number);
//     if (concatDollar.length <= 3) {
//       concatDollar += ".";
//       const num = 6 - concatDollar.length;
//       for (let i = 0; i < num; i++) {
//         concatDollar += +"0";
//       }
//       result.push(concatDollar);
//     }
//     if (concatDollar.length <= 5) {
//       const num = 5 - concatDollar.length;
//       concatDollar += +"0".repeat(num);
//       result.push(concatDollar);
//     }
//   });
//   return result;
// };

// const result = cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]);
// console.log(result);

// 1алгоритм вытягиваются числа с масива через мап на выходе масив чисел
// 2прохожусь фильтром и отфильтровываю значения длинна которых меньше 1;
// 3разбиваю масив в строку (так как у меня масив чисел на не строк)
// 4с помошью сплит превращаю строку в масив строк
// 5 перебираю масив с помощью forEach
// 5.1добавляю в начало строки $
// делаю проверку если значение мешьше 3 символов
// 5.2добавляю в клнец строки строки точку
// 5.3проверяю длинну переменной строки и записываю в переменную
// 5.4через цыкл фор добавляю недостающие до 6 символов нули
// 5.5пушу в масив

// 6делаю проверку если значение мешьше 5 символов
// 6.1проверяю длинну переменной строки и записываю в переменную
// 6.2 добавляю в в строку недосьающий 0
// 6.3пушу в масив
const cleanTransactionsList = (arr) => {
  const numbers = arr.filter((el) => Number(el));
  const deleteSpace = numbers.map((item) => Number.parseFloat(item));
  const plusZuro = deleteSpace.map((el) => `${"$".concat(el)}`);
  const res = plusZuro.map((el) => {
    if (el.length <= 3) {
      return `${el}.00`;
    }
    return `${el}0`;
  });
  return res;
};

const result = cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]);
console.log(result);
