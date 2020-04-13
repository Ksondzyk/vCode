const arr = ["12px", "44em", "100%", "1.5rem", "12.4em", "12.12.11rem"];
const getParsedIntegers = (arr) => {
  const res = arr.map((number) => Number.parseInt(number));
  return res;
};
const result = getParsedIntegers(arr);
console.log(result);

const getParsedIntegersV2 = (arr) => {
  const res = arr.map((number) => parseInt(number));
  return res;
};
const result1 = getParsedIntegersV2(arr);
console.log(result1);

const getParsedFloats = (arr) => {
  const res = arr.map((number) => Number.parseFloat(number));
  return res;
};
const result2 = getParsedFloats(arr);
console.log(result2);

const getParsedFloatsV2 = (arr) => {
  const res = arr.map((number) => parseFloat(number));
  return res;
};
const result3 = getParsedFloatsV2(arr);
console.log(result3);
