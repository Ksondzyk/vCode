export function sumOfSquares() {
  return [...arguments].map((elem) => elem * elem);
}

console.log(sumOfSquares(1, 2, 3, 4));
