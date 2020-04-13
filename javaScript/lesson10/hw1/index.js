const arr = [11.555, 14.888, 12.345, 156.545];
const getTotalPrice = (arr) => {
  const res = arr.reduce((acc, prevNumber) => {
    return acc + prevNumber;
  }, 0);
  return `$${Math.floor(res * 100) / 100}`;
};

const result = getTotalPrice(arr);
console.log(result);
