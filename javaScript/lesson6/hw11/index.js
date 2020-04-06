const arr = [1, 4, 8, 3];

function includes(numbers, lastNamber) {
  for (let number of numbers) {
    if (number === lastNamber) {
      return true;
    }
  }
  return false;
}

const result = includes(arr, 3);
console.log(result);
