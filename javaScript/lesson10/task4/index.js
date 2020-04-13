const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  let max = -Infinity;
  arr.forEach((num) => {
    if (Math.abs(num) > max) {
      max = Math.abs(num);
    }
  });
  return max;
};
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
