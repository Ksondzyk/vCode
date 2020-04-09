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
