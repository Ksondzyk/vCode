const getRandomNumbers = (...args) => {
  args.map((elem) => Number.parseInt(elem));
  return args;
};
const result = getRandomNumbers(
  Math.floor(Math.random() * Math.floor(12)),
  Math.random(8.24),
  Math.random() * (12.4 - 4.12) + 4.12
);
console.log(result);
