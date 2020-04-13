const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  const getMaxAbsoluteNumber = arr.map((num) => Math.abs(num));
  const max = Math.max(...getMaxAbsoluteNumber);
  return max;
};
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
