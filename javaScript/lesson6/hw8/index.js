const arr = [2, 9, 8, 12, 77, 42];
const arr1 = [2, 9, 8, 12, 77, 42];

function sortAsc(array) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sortIncreasing = array.sort((a, b) => a - b);
  return sortIncreasing;
}

const result = sortAsc(arr);
console.log(result);

function sortDesc(array) {
  if (!Array.isArray(arr)) {
    return null;
  }
  const sortDecrease = array.sort((a, b) => b - a);
  return sortDecrease;
}
const result1 = sortDesc(arr1);
console.log(result1);
