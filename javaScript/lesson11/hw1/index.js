const splitString = (text, len) => {
  if (typeof text !== "string") {
    return null;
  }
  const dot = ".";
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
      //   res = chunk.substr(chunk);
      for (let i = 0; i < cycle; i++) {
        res += dot;
        console.log(res);
      }
    }
    strArr.push(chunk[0].toUpperCase() + chunk.slice(1) + res.substr());
    startPosition += len;
  }
  return strArr;
};
const result = splitString("abcdefghasdfdsafsd", 4);
console.log(result);
