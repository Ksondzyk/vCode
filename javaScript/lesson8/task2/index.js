// const a = {};
// const b = a;

// console.log(a === b);

// const name = "Tom";

// const user = { name };

// const user = { name: "Tom", key: 17 };

// for (const key in user) {
//   console.log(user[key]);
// }

const obj = { name: "John Doe", age: 17, interest: "football" };

const concatProps = (obj) => {
  if (Object === undefined) {
    return [];
  }
  const arr = [];

  for (const key in obj) {
    arr.push(obj[key]);
  }
  return arr;
};

const result = concatProps(obj);
console.log(result);
