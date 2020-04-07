const arr = [1, 2, 3, 4];

const reverseArray = (arr) => {
  if (!Array.isArray(arr)) {
    return null;
  }
  const copyArr = [...arr].reverse();
  return copyArr;
};
console.log(reverseArray(arr));
