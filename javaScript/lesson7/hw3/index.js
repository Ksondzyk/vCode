const array = [2, 5, 6, 8, 11, 9, 4];

const increaseEvenEl = (arr, delta) => {
  const increaseEvenNumbers = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  arr.map((number) => {
    number % 2 === 0
      ? increaseEvenNumbers.push(number + delta)
      : increaseEvenNumbers.push(number);
  });
  return increaseEvenNumbers;
};
console.log(increaseEvenEl(array, 20));
