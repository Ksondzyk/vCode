let arrNumbers = [1, 5, 7, 9, 12];
function cloneArr(arr) {
  const arrClone = [...arr];
  return arrClone;
}

const result = cloneArr(arrNumbers);
console.log(result);
