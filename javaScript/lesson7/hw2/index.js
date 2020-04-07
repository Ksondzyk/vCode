const arr = [1, 2, 3, 4];

const reverseArray = (arr) => {
  const copyArr = [...arr].reverse();
  return copyArr;
};
console.log(reverseArray(arr));
