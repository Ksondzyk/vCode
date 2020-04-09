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
const compareObjects = (obj1, obj2) => {
  return obj1 === obj2;
};
const result = compareObjects(obj1, obj2);
console.log(result);

const compareObjects1 = (obj2, obj3) => {
  return obj2 === obj3;
};
const result1 = compareObjects1(obj2, obj3);
console.log(result1);

const compareObjects2 = (obj1, obj4) => {
  return obj1 === obj4;
};
const result2 = compareObjects2(obj1, obj4);
console.log(result2);
