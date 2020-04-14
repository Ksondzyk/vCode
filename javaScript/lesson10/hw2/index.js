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


const getRandomNumbers = (len, a, b) => {
  if (a > b) return null;
  a = Math.ceil(a);
  b = Math.floor(b);
  let rand = Math.floor(Math.random() * (b - a + 1) + a);
  if (rand > b) return null;
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(Math.floor(Math.random() * (b - a + 1) + a));
  }
  return arr;
};