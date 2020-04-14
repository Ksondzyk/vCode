const multiRound = (num, num2) => {
  return [
    Math.round(num, num2),
    Math.floor(num, num2),
    Math.ceil(num, num2),
    Math.trunc(num, num2),
    Number(num.toFixed(2)),
  ];
};
console.log(multiRound(17.3433, -17.3433));
