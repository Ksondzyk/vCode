function increaseEvenEl(arr, delta) {
  let evenNumbers = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number + delta);
    } else if (number % 2 == 1) {
      evenNumbers.push(number);
    }
  }
}
const result = increaseEvenEl([2, 5, 6, 8, 11, 9, 4], 20);
console.log(result);
