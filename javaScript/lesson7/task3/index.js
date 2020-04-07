const arr = [1, [2, 3, 4], 5, [6]];

const flatArray = (arr) => arr.flat();
//   arr.reduce((acc, elem) => {
//     return acc.concat(elem);
//   }, []);

console.log(flatArray(arr));
// [1, 2, 3, 4].reduce(function (acc, prevNum) {
//   return acc + prevNum;
// }, 0);
