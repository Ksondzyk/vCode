export default (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const res = arr.map((num) => num * num);
  const minNumber = Math.min(...res);
  return minNumber;
};

