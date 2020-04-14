const superRound = (arg1, arg2) => {
  return [
    Math.floor(arg1 * 100) / 100,
    Math.round(arg1 * 100) / 100,
    Math.ceil(arg1 * 100) / 100,
    Math.trunc(arg1 * 100) / 100,
    Number(arg1.toFixed(arg2)),
  ];
};

const result = superRound(12.17244444, 2);
console.log(result);
