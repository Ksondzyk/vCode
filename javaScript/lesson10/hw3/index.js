const superRound = (arg1, arg2) => {
  return [
    +Math.floor(arg1).toFixed(arg2),
    +Math.round(arg1).toFixed(arg2),
    +Math.ceil(arg1).toFixed(arg2),
    +Math.trunc(arg1).toFixed(arg2),
    Number(arg1.toFixed(arg2)),
  ];
};

const result = superRound(12.17244444, 3);
console.log(result);
