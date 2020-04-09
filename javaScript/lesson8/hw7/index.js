const obj1 = {
  name: "Tom",
  age: 17,
};
const obj2 = {
  name: "Bob",
  age: 17,
};
const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};
const obj4 = {
  name: "Tom",
  age: 17,
};

function compareObjects(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) {
    return false;
  }
  const isEqual = keys1.reduce((acc, key) => {
    return obj1[key] === obj2[key];
  }, true);
  return isEqual;
}
const result = compareObjects(obj1, obj2);
console.log(result);
const result1 = compareObjects(obj2, obj3);
console.log(result1);
const result2 = compareObjects(obj1, obj4);
console.log(result2);
