// const p = new Promise((resolve, reject) => {});
// console.log(p);

// const resolvedPromice = Promise.resolve(17);
// const resolvedPromice2 = new Promise((resolve) => resolve(17));

// const rejectedPromice = Promise.reject(new Error("Error"));
// const rejectedPromice2 = new Promise((resolve, reject) =>
//   reject(new Error("Error"))
// );

export const asyncSum = (value, delay) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve(value);
    }, delay);
  });

const asyncNumber1 = asyncSum(56, 1000);
const asyncNumber2 = asyncSum(4, 2000);
const asyncNumber3 = asyncSum(10, 2000);

const getSum = (numbers) => numbers.reduce((acc, num) => acc + num, 0);
const asyncSumNumber = (...asyncNumbers) =>
  Promise.all(asyncNumbers).then((numbers) => getSum(numbers));

asyncSumNumber(asyncNumber1, asyncNumber2, asyncNumber3).then((result) =>
  console.log(result)
);
