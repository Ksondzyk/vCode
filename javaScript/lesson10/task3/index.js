const multiRound = (num) => [
  Math.round(num),
  Math.floor(num),
  Math.ceil(num),
  Number(num.toFixed(3)),
];
console.log(multiRound(17.3433));
console.log(multiRound(-17.3433));
