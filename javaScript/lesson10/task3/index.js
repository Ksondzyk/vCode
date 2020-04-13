const multiRound = (num) => {
  return [
    Math.round(num),
    Math.floor(num),
    Math.ceil(num),
    Math.trunc(num),
    Math.Number(num.toFixed()),
  ];
};
multiRound(17.3433);
