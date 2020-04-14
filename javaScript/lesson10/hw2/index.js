const getRandomNumbers = (length, from, to) => {
  const isWrongRange = to < from;
  const noNumbersBetween = to - from < 1 && Math.ceil(to) === Math.ceil(from);
  if (isWrongRange || noNumbersBetween) {
    return null;
  }
  return new Array(length)
    .fill()
    .map(() => from + (to - from) * Math.random())
    .map((num) => (num < 0 ? Math.ceil(num) : Math.floor(num)));
};
const result = getRandomNumbers(100, -0.1, 0.1);
