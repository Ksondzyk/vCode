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

export const compareObjects = (obj1, obj4) => {
  const arr1 = Object.keys(obj1);
  for (const key of arr1) {
    if (obj1[key] !== obj4[key]) {
      return false;
    }
    return true;
  }
  return false;
};
