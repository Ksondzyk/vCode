const getMaxAbsoluteNumber = (arr) => {
  if (!Array.isArray(arr) || arr.length === 0) {
    return null;
  }
  return Math.abs(...arr);
};
console.log(getMaxAbsoluteNumber([-777, 3, -1, 45, -20]));
