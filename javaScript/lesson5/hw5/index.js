const result = compareSums(5, 8, 9, 12);
console.log(result);

function compateSums(a, b, c, d) {
  function sum(a, b) {
    let result = 0;
    for (let i = a; i < b; i++) {
      result += i;
    }
    return result;
  }
  let from = sum(a, b);
  let to = sum(c, d);
  return from < to;
}

const result = compareSums(5, 8, 9, 12);
console.log(result);
