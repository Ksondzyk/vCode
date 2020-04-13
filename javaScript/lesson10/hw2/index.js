const getRandomNumbers = (number, ...args) => {
  if (args[1] > args[2] || (args[1] < 0 && args[2] < 0)) {
    return null;
  }
  const newArr = [];
  for (let i = 0; i < number; i++) {
    const res = Math.random() * (args[1] - args[0]) + args[0];
    const el = Math.round(res);
    debugger;
    newArr.push(el);
  }
  return newArr;
};
const result = getRandomNumbers(
  5,
  Math.floor(Math.random() * Math.floor(12)),
  Math.random() * (24 - 13) + 13
);
console.log(result);
