function compareSums(a, b, c, d) {
  let from = 0;
  let to = 0;
  for (let i = a; i <= b; i++) {
    from += i;
  }
  for (let i = c; i <= d; i++) {
    to += i;
  }
  return function sum(from, to) {
    return from < to ? true : false;
  };
}

const result = compareSums(5, 8, 9, 12);
console.log(result);
