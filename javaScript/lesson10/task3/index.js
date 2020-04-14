const multiRound = (num) => {
  return [
    Math.round(num),
    Math.floor(num),
    Math.ceil(num),
    Math.trunc(num),
    Number(num.toFixed()),
  ];
};
console.log(multiRound(17.3433));
