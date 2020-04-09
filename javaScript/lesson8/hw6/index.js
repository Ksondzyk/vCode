const object = { name: "Tom", age: 17 };
const obj2 = { name: "Bob", student: false };

const mergeObjectsV1 = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const result = mergeObjectsV1(object, obj2);
console.log(result);

const mergeObjectsV2 = (obj1, obj2) => {
  return {
    ...obj2,
    ...obj1,
  };
};

const result1 = mergeObjectsV2(object, obj2);
console.log(result1);

const mergeObjectsV3 = (obj1, obj2) => {
  return { ...obj1, ...obj2 };
};

const result3 = mergeObjectsV3(object, obj2);
console.log(result3);

const mergeObjectsV4 = (obj1, obj2) => {
  return {
    ...obj2,
    ...obj1,
  };
};

const result4 = mergeObjectsV4(object, obj2);
console.log(result4);
