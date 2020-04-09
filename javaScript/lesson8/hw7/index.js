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

function compareObjects(obj1, obj4) {
  const arr1 = Object.keys(obj1);
  for (const key of arr1) {
    if (obj1[key] !== obj4[key]) {
      return false;
    }
    return true;
  }
  return false;
}
const result = compareObjects(obj1, obj2);
console.log(result);
const result1 = compareObjects(obj2, obj3);
console.log(result1);
const result2 = compareObjects(obj2, obj4);
console.log(result2);
