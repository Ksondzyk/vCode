let sum = 0;

for (let i = 0; i < 1000; i++) {
  sum += i;
}

let res2 = sum % 1234;
let res1 = sum / 1234;
console.log(res1 > res2);
