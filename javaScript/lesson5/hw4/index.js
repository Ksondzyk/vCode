
function sum(a, b) {
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}

function compateSums(a, b, c, d) {
  let from = sum(a, b);
  let to = sum(c, d);
  return from > to ? true : false;
}

console.log(compateSums(5, 8, 9, 12));
