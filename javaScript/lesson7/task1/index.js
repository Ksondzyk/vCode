const getSpecialNumbers = (numbers) => {
  let specialNumbers = [];

  const result = numbers.filter((num) => {
    return num % 3 === 0 ? true : false;
  });

  return result;
};

const arr = [1, 2, 3, 4, 5, 6, 18];
console.log(getSpecialNumbers(arr));
