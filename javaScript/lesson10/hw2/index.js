const getRandomNumbers = (num1, num2, num3) => {
  const res = [num1, num2, num3];
  res.map((elem) => elem >= 0);
  return res;
};
const result = getRandomNumbers(
  Math.floor(Math.random() * Math.floor(12)),
  Math.random(8.24),
  Math.random() * (12.4 - 4.12) + 4.12
);
console.log(result);
