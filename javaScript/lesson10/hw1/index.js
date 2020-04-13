const arr = [11.555, 14.888, 12.345, 156.545];
const getTotalPrice = (arr) => {
  const res = arr.reduce((acc, prevNumber) => {
    return acc + prevNumber;
  }, 0);
  const result = `$${res.toFixed(3)}`;
  return result;
};

const result = getTotalPrice(arr);
console.log(result);