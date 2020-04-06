const arr = [1, 4, 1, 8, 3, 4, 8, 8];

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
  const res1 = res.length;
  return res1;
}
const result = removeDuplicates(arr);
console.log(result);
