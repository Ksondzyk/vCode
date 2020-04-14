const getRandomNumbers = (number, arg1, arg2) => {
  if (arg1 > arg2 || (arg1 < 0 && arg2 < 0)) {
    return null;
  }

  const min = Math.ceil(arg1);
  const max = Math.round(arg2);

  const newArr = [];
  for (let i = 0; i < number; i++) {
    newArr.push(Math.trunc(Math.random() * (max - min + 1)) + min);
  }
  return newArr;
};
const result = getRandomNumbers(100, -0.1, 0.1);
