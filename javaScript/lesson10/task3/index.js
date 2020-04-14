const multiRound = (num, num2) => {
  return [
    Math.round(num * 100) / 100,
    Math.floor(num * 100) / 100,
    Math.ceil(num * 100) / 100,
    Math.trunc(num * 100) / 100,
    Number(num.toFixed(2)),
  ];
};
console.log(multiRound(17.3433, -17.3433));
