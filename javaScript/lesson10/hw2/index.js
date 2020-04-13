const getRandomNumbers = (number, ...args) => {
  if (args[1] > args[2] || (args[1] < 0 && args[2] < 0)) {
    return null;
  }

  const res = args.map((elem) => number && Math.round(elem));
  return res;
};
const result = getRandomNumbers(
  2,
  Math.random(4.12),
  Math.random() * (12.4 - 4.12) + 4.12
);
console.log(result);
