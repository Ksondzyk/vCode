const arr = [1, 5, 6, 8, 9];
function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let reverse = [...numbers];
  let value = reverse.reverse();
  return value;
}
const result = reverseArray(arr);
console.log(arr);
console.log(result);
