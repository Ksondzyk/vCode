// const customers = {
//   "customer-id-1": {
//     name: "William",
//     age: 54,
//   },
//   "customer-id-2": {
//     name: "Tom",
//     age: 17,
//   },
// };

// const getCustomersList = (obj) => {
//   const arrUsers = Object.keys(obj);
//   const values = Object.values(obj);
//   const newArr = [];
//   values.reduce((acc, elm, index) => {
//     return (acc = elm.id = arrUsers[index]);
//   }, {});
//   values.sort((a, b) => a.age - b.age);
//   return values;
// };

// const result = getCustomersList(customers);
// console.log(result);

const customers = {
  "customer-id-1": {
    name: "William",
    age: 54,
  },
  "customer-id-2": {
    name: "Tom",
    age: 17,
  },
};

const getCustomersList = (obj) => {
  const newObj = JSON.parse(JSON.stringify(obj));
  const arrUsers = Object.keys(newObj);
  const values = Object.values(newObj);
  values.reduce((acc, elm, index) => {
    return (acc = elm.id = arrUsers[index]);
  }, {});
  values.sort((a, b) => a.age - b.age);
  return values;
};

const result = getCustomersList(customers);
console.log(result);
