function multiRound(num) {
  return [
    Math.round(num),
    Math.floor(num),
    Math.ceil(num),
    Math.trunc(num),
    Math.round(num * 100) / 100,
  ];
}
console.log(multiRound(17.34));
console.log(multiRound(-17.34));
