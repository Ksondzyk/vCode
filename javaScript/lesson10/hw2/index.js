const getRandomNumbers = (number, arg1, arg2) => {
  // if (args[0] > args[1] || (args[0] < 0 && args[1] < 0)) {
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
