const reverseString = (str) => {
  if (typeof str !== "string") {
    return null;
  }
  const res = str.split("").reverse().join("");
  return res;
};
const result = reverseString("roman");
