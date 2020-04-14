const superRound = (arg1, arg2) => {
  let value = "1";
  const zero = "0";
  for (let i = 0; i < arg2; i++) {
    value += zero;
  }
  const numberArg = Number(value);
  return [
    Math.floor(arg1 * numberArg) / numberArg,
    Math.round(arg1 * numberArg) / numberArg,
    Math.ceil(arg1 * numberArg) / numberArg,
    Math.trunc(arg1 * numberArg) / numberArg,
    Number(arg1.toFixed(arg2)),
  ];
};

const result = superRound(12.17244444, 4);
console.log(result);
