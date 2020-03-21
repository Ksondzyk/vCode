function getPrimes(n) {
  let sum = 0;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    sum = i;
    if (sum % 2 === 1) {
      console.log(sum);
    }
  }
}

const result = getPrimes(18);
console.log(result);
