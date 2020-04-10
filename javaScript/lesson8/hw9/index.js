// const obj = { a: "a", "17.1": 17.1, "John Doe": "John Doe" };

const pickProps = (arg1, arg2) => {
  const res = Object.keys(arg1).reduce((acc, value) => {
    if (arg2.includes(value)) {
      console.log(arg1[value]);
      acc[value] = arg1[value];
    }
    return acc;
  }, {});
  return res;
};

const result = pickProps(
  { b: 12, a: "a", "17.1": 17.1, "John Doe": "John Doe" },
  ["a", 17.1, "John Doe"]
);
console.log(result);

// const obj = { a: "a", "17.1": 17.1, "John Doe": "John Doe" };

// const pickProps = (arg1, arg2) => {
//   const res = [{ ...arg1 }];
//   res.reduce(())

// };
// const result = pickProps(
//   { b: 12, a: "a", "17.1": 17.1, "John Doe": "John Doe" },
//   ["a", 17.1, "John Doe"]
// );
// console.log(result);
