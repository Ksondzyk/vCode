const superRound = (arg1, arg2) => {
  const res = (3 * 1000) / 3;
  return [
    Math.floor(arg1 * 1000) / 1000,
    Math.round(arg1, 1000) / 1000,
    Math.ceil(arg1 * 1000) / 1000,
    Math.trunc(arg1 * 1000) / 1000,
    Number(arg1.toFixed(arg2)),
  ];
};

const result = superRound(12.17244444, 3);
console.log(result);
