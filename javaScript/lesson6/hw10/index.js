const arr = [1, 2, 3, 4, 5];

// function getSubArray(array, number) {
//   let firstNumbers = [];
//   for (let elem of array) {
//     if (elem <= number) {
//       firstNumbers.push(elem);
//     }
//   }
//   return firstNumbers;
// }

// const result = getSubArray(arr, 4);
// console.log(result);

function getSubArray(array, number) {
  let firstNumbers = [];
  array.forEach(function (item, index) {
    if (index < number) {
      firstNumbers.push(item);
    }
  });
  return firstNumbers;
}
const result = getSubArray(arr, 4);
console.log(result);
