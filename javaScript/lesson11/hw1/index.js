const splitString = (text, len) => {
  if (typeof text !== "string") {
    return null;
  }
  if (len === undefined) {
    const strArr = [];
    let startPosition = 0;
    while (true) {
      const chunk = text.substr(startPosition, 10);
      if (chunk.length === 0) {
        break;
      }
      strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
      startPosition += 10;
    }
    return strArr.join("\n");
  }
  const strArr = [];
  let startPosition = 0;
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1));
    startPosition += len;
  }
  return strArr;
};
const result = splitString("abcdefghasdfdsafsdf", 4);
console.log(result);
