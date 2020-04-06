const arr = [12, 11, 12, 6, 7, 8, 7, 6, 7, 12];

function removeDuplicates(array) {
  let res = [];
  if (!Array.isArray(array)) {
    return null;
  }
  for (let number of array) {
    if (!res.includes(number)) {
      res.push(number);
    }
  }
  return res;
}
const result = removeDuplicates(arr);
console.log(result);
