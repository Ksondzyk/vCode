const multiRound = (num, num2) => {
  return [
    Math.round(num * 1000) / 1000,
    Math.floor(num * 1000) / 1000,
    Math.ceil(num * 1000) / 1000,
    Math.trunc(num * 1000) / 1000,
    Number(num.toFixed(3)),
  ];
};
console.log(multiRound(17.3433, -17.3433));
