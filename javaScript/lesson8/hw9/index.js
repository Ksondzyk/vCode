const obj = { a: "a", "17.1": 17.1, "John Doe": "John Doe" };

// const pickProps = (arg1, arg2) => {
//   const obj1 = { ...arg1 };
//   console.log(obj1);
//   const arr2 = Object.keys(obj1);

//   const res = arg2.reduce((acc, prevValue, nextValue) => {
//     if (!(prevValue === arr2[nextValue])) {
//       return {};
//     }
//     return { ...acc, [prevValue]: arr2[nextValue] };
//   }, {});
//   return res;
// };

// const result = pickProps(obj, ["a", 17.1, "John Doe"]);
// console.log(result);
const pickProps = (arg1, arg2) => {
  const arr2 = Object.keys(arg1);
  const res = arg2.reduce((acc, prevValue, nextValue) => {
    return { ...acc, [prevValue]: arr2[nextValue] };
  }, {});
  return res;
};

const result = pickProps({ a: "a", "17.1": 17.1, "John Doe": "John Doe" }, [
  "a",
  17.1,
  "John Doe",
]);
console.log(result);
