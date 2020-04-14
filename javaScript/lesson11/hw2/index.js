const countOccurrences = (str, str1) => {
  if (str === undefined) {
    return null;
  }
  return str.split(str1).length - 1;
};
const result = countOccurrences("Roman lorem roman", "Roman");
console.log(result);
