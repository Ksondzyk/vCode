export function sumOfSquares() {
  return [...arguments]
    .map((elem) => elem * elem)
    .reduce((acc, elem) => (acc += elem));
}

console.log(sumOfSquares(1, 2, 3, 4));
