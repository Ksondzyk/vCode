const multiRound = (num) => [
  Math.round(num),
  Math.floor(num),
  Math.ceil(num),
  Math.trunc(num),
];

console.log(multiRound(17.1));
