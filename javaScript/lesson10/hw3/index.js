const superRound = (arg1, arg2) => {
  return [
    Math.floor(arg1 * 10000) / 10000,
    Math.round(arg1 * 10000) / 10000,
    Math.ceil(arg1 * 10000) / 10000,
    Math.trunc(arg1 * 10000) / 10000,
    Number(arg1.toFixed(arg2)),
  ];
};

const result = superRound(12.17244444, 4);
console.log(result);
