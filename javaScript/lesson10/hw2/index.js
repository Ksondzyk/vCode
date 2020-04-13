const getRandomNumbers = (...arg) => {
  if (arg[1] > arg[2] || (arg[1] < 0 && arg[2] < 0)) {
    return null;
  }

  const res = arg.map((elem) => Math.round(elem));
  return res;
};
const result = getRandomNumbers(
  Math.floor(Math.random() * Math.floor(12)),
  Math.random(4.12),
  Math.random() * (12.4 - 4.12) + 4.12
);
console.log(result);
