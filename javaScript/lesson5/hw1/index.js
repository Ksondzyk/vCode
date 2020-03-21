function getSum(arg1, arg2) {
  let result = 0;
  let sum = 0;
  for (let i = arg1; i <= arg2; i++) {
    sum = i;
    console.log(result);
    if (sum % 2 === 0) {
      result += sum;
    }
  }
  console.log(sum);
  return result;
}
getSum(4, 15);
