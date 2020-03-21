function findDivCount(a, b, n) {
  let sum = 0;
  for (let i = a; i <= b; i++) {
    // sum = i;
    if (i % n === 0) {
      console.log(i);
    }
  }
}

findDivCount(12, 120, 16);
