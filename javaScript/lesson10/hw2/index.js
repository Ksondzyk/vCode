const getRandomNumbers = (number, arg1, arg2) => {
  // if (arg1 > arg2 || (arg1 < 0 && arg2 < 0)) {
  //   return null;
  // }
  const newArr = [];
  for (let i = 0; i < number; i++) {
    const res = Math.random() * (arg2 - arg1) + arg1;
    const el = Math.round(res);

    newArr.push(el);
  }
  return newArr;
};
const result = getRandomNumbers(5, 12, 24);
console.log(result);
