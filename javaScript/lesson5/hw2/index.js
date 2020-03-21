function getPrimes(n) {
  for (let i = 2; i <= n; i++) {
    for (let m = 2; m < i; m++) {
      if (i % m === 0) {
        continue;
      }
    }
    console.log(i);
  }
}
getPrimes(18);

