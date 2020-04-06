function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  let reverse = numbers.reverse();
  return reverse;
}
const result = reverseArray([1, 5, 6, 8, 9]);
console.log(result);
