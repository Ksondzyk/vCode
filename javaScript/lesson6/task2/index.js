// const numbers = [11, 22, 33, 55, 66];
// let sumOfNumbers = 0;

// for (let i = 0; i < numbers.length; i++) {
//   console.log(numbers[i]);
//   sumOfNumbers += numbers[i];
// }
// console.log("Result: " + sumOfNumbers);

const numbers = [11, 22, 33, 55, 66];

function getSum(numbers) {
  let sumOfNumbers = 0;
  if (!Array.isArray(numbers)) {
    return null;
  }
  for (let i = 0; i < numbers.length; i++) {
    sumOfNumbers += numbers[i];
  }
  return sumOfNumbers;
}
getSum(numbers);

const sumOfElements = getSum(numbers);

console.log("Result: " + sumOfElements);
