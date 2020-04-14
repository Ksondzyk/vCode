const splitString = (text, len) => {
  if (typeof text !== "string") {
    return null;
  }
  if (len === undefined) {
    const strArr = [];
    let startPosition = 0;
    let res = "";
    while (true) {
      const chunk = text.substr(startPosition, 10);
      if (chunk.length === 0) {
        break;
      }
      if (chunk.length < 10) {
        const cycle = 10 - chunk.length;
        res += ".".repeat(cycle);
      }
      strArr.push(chunk + res.substr());
      startPosition += 10;
    }
    return strArr;
  }
  const strArr = [];
  let startPosition = 0;
  let res = "";
  while (true) {
    const chunk = text.substr(startPosition, len);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < len) {
      const cycle = len - chunk.length;
      res += ".".repeat(cycle);
    }
    strArr.push(chunk + res.substr());
    startPosition += len;
  }
  return strArr;
};
console.log(splitString("abcdefgh", 4));
