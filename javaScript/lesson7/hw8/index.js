const arrAverage = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const result = arr.reduce((acc, prevValue, nextValue) => acc + prevValue);
  return result / arr.length;
};
console.log(arrAverage([2, 5, 6, 3]));
