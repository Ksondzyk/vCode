const superRound = (arg1, arg2) => {
  const res = (3 * 1000) / 3;
  return [
    Math.floor(arg1 * res) / res,
    +Math.round(arg1 * res) / res,
    +Math.ceil(arg1 * res) / res,
    +Math.trunc(arg1 * res) / res,
    Number(arg1.toFixed(arg2)),
  ];
};

const result = superRound(12.17244444, 3);
console.log(result);
