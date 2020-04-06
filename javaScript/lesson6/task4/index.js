const numbers = [11, 22, 33, 55, 66];

// const a = numbers[0];
// const b = numbers[1];

const [a, b, ...rest] = numbers;

console.log(a, b, [1, 2, 3, ...rest]);

function swap(arr) {
  const [start, ...rest] = arr;
  return [...rest, start];
}

console.log(swap(numbers));
