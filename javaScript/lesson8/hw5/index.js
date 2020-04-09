const transaction = { value: 170 };
const addPropertyV1 = (obj, key, value) => {
  obj[key] = value;
  return obj;
};

const result = addPropertyV1(transaction, "currency", "USD");
console.log(result);

const addPropertyV2 = (obj, key, value) => {
  return Object.assign(obj, { [key]: value });
};
const result1 = addPropertyV2(transaction, "currency", "USD");
console.log(result1);

const addPropertyV3 = (obj, key, value) => {
  const newObj = { ...obj, [key]: value };
  return newObj;
};
const result3 = addPropertyV3(transaction, "currency", "USD");
console.log(result3);

const addPropertyV4 = (obj, key, value) => {
  const newObj = { ...obj, [key]: value };
  return newObj;
};
const result4 = addPropertyV4(transaction, "currency", "USD");
console.log(result4);
