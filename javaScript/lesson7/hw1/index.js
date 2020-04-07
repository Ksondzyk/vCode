const squareArray = (arr) => {
  const squareArray = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  arr.map((elem) => squareArray.push(elem * elem));
  return squareArray;
};
const array = [12, 4, 5, 67];
console.log(squareArray(array));
console.log(array);
