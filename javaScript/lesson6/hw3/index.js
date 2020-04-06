const arr = [1, 4, 44, 67];

function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (let elem of arr) {
    sum += elem;
  }
  if (sum > 100) {
    return true;
  } else {
    return false;
  }
}
const result = checkSum(arr);
console.log(result);
