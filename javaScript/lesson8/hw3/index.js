const user = {
  name: "Tom",
  age: 17,
};
const getKeys = (obj) => {
  const objKeys = Object.keys(obj);
  objKeys.forEach((keys) => {
    console.log(keys);
  });
};
getKeys(user);
