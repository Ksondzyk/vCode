const array = [2, 5, 6, 8, 11, 9, 4];

const increaseEvenEl = (arr, delta) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.map((number) =>
    number % 2 === 0 ? number + delta : number
  );
  return result;
};
console.log(increaseEvenEl(array, 20));
