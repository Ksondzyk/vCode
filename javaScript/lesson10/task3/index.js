const multiRound = (num) => {
  return [
    Math.round(num),
    Math.floor(num),
    Math.ceil(num),
    Math.trunc(num),
    num.toFixed(1),
  ];
};
console.log(multiRound(17.34));
