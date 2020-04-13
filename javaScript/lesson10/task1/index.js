const arrNumbers = [3, "0", 7, 89, NaN, NaN, 1.16, 3.76];

// принять масив
// перебрать масив
// сравнить елементы масива торорые не ябляются конечными числами (филтр отлично подойдет)
// вернуть масив с конечными числами

const getFiniteNumbers = (arr) => {
  const newArr = arr.filter((number) => Number.isFinite(number));
  return newArr;
};
const result = getFiniteNumbers(arrNumbers);
console.log(result);

const getFiniteNumbersV2 = (arr) => {
  const newArr = arr.filter((number) => isFinite(number));
  return newArr;
};
const result1 = getFiniteNumbersV2(arrNumbers);
console.log(result1);

const getNaN = (arr) => {
  const newArr = arr.filter((number) => Number.isNaN(number));
  return newArr;
};
const result2 = getNaN(arrNumbers);
console.log(result2);

const getNaNV2 = (arr) => {
  const newArr = arr.filter((number) => isNaN(number));
  return newArr;
};
const result3 = getNaNV2(arrNumbers);
console.log(result3);

const getIntegers = (arr) => {
  const newArr = arr.filter((number) => Number.isInteger(number));
  return newArr;
};
const result4 = getIntegers(arrNumbers);
console.log(result4);
