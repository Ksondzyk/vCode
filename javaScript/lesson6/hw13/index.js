const arr = [1, 4, 1, 8, 3, 4, 8, 8];

function uniqueCount(array) {
  let res = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let number of array) {
    if (!res.includes(number)) {
      res.push(number);
    }
  }

  return res.length;
}
const result = uniqueCount(arr);
console.log(result);
