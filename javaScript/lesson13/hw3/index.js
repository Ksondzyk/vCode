export const squareArray = (arr) => {
  const value = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (const newSquare of arr) {
    value.push(newSquare * newSquare);
  }
  return value;
};

// lesson 6 hw3

const arr = [1, 4, 44, 67];

export function checkSum(arr) {
  let sum = 0;
  if (!Array.isArray(arr)) {
    return null;
  }
  for (const elem of arr) {
    sum += elem;
  }
  if (sum > 100) {
    return true;
  }
  return false;
}

// lesson 6 hw4
export function increaseEvenEl(arr, delta) {
  const evenNumbers = [];
  if (!Array.isArray(arr)) {
    return null;
  }
  for (const number of arr) {
    if (number % 2 === 0) {
      evenNumbers.push(number + delta);
    } else if (number % 2 == 1) {
      evenNumbers.push(number);
    }
  }
  return evenNumbers;
}

// lesson 6 hw5

export function reverseArray(numbers) {
  if (!Array.isArray(numbers)) {
    return null;
  }
  const reverse = [...numbers];
  const value = reverse.reverse();
  return value;
}
