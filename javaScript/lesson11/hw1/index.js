const splitString = (text, len) => {
  if (typeof text !== "string") {
    return null;
  }

  let startPosition = 0;
  const strArr = [];
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
