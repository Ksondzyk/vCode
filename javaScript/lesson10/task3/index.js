function multiRound(num) {
  return [
    Math.round(num),
    Math.floor(num),
    Math.ceil(num),
    Math.trunc(num),
    Math.Number(num.toFixed()),
  ];
}
const result = multiRound(17.3433);
console.log(result);
