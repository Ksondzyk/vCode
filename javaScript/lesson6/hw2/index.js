const arr = [1, 2, 3, 4];

function squareArray(arr) {
  let value = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let newSquare of arr) {
    value.push(newSquare * newSquare);
  }
  return value;
}

const result = squareArray(arr);
console.log(result);
