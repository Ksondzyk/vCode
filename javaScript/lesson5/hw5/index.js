function findDivCount(a, b, n) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    if (i % n === 0) {
      sum += 1;
    }
  }
  return sum;
}

const result = findDivCount(12, 120, 16);
console.log(result);
