// const numbers = [11, 22, 33, 55, 66];

// const numberofElements = numbers.length;
// console.log(numberofElements);

// console.log("Element #1:" + numbers[1]);
// console.log("Element last:" + numbers[numbers.length - 1]);

// [11, 22, 33, 55, 66]=>[length, first elem , last elem]

const numbers = [11, 22, 33, 55, 66];
function getArrayBounds(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return [arr.length, arr[0], arr[arr.length - 1]];
}
const arrayBound = getArrayBounds(numbers);
console.log(arrayBound);
