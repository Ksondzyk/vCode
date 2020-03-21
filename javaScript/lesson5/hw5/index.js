function findDivCount(a, b, n) {
  let sum;
  for (let i = a; i <= b; i++) {
    sum = i;
    if (sum % n === 0) {
      console.log(sum);
    } else if (a > 12 && b < 120) {
      return 0;
    }
  }
  return 0;
}

findDivCount(12, 120, 16);
