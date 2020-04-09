const obj = { "John Doe": 19, Tom: 17, Bob: 18 };

const getAdults = (arrObj) => {
  if (getAdults === undefined) {
    return {};
  }
  return Object.keys(arrObj).reduce((acc, el) => {
    if (arrObj[el] >= 18) {
      acc[el] = arrObj[el];
    }
    return acc;
  }, {});
};
const result = getAdults(obj);
console.log(result);
