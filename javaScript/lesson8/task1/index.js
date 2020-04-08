// const prop = "my";
// const obj = {
//   name: "Tom",
//   age: 17,
//   inderest: "football",
//   "my name": "Bob",
//   [`${prop}name`]: "value",
// };

// obj.age = 18;
// console.log(obj.age);
// console.log(obj["my name"]);
// console.log(obj[`${prop}name`]);

const transformToObject = (arr) => {
  if (!Array.isArray(arr)) {
    return {};
  }
  const obj = {};

  arr.forEach((element) => {
    obj[element] = element;
  });
  return obj;
};

const arr = ["a", 17.1, "John Doe"];
const result = transformToObject(arr);
console.log(result);
