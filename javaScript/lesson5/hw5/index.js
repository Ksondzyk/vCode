function findDivCount(a, b, n) {
  let sum;
  for (let i = a; i <= b; i++) {
    sum = i;
    if (sum % n === 0) {
      alert(sum);
    } else {
      return 0;
    }
  }
}

findDivCount(12, 120, 16);
