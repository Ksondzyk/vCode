const successPromise = new Promise((resolve) => {
  resolve(32);
})
  .then((number) => {
    const halfNumber = number / 2;
    return halfNumber;
  })
  .then((number) => {
    /* fix this handler */
    const squaredNumber = number * number;
    console.log(squaredNumber);
    return squaredNumber;
  })
  .then((result) => {
    console.log(result);
    return result; // 256
  })
  .then((number) => {
    return number;
  })
  .then((result) => {
    console.log(result); // 320
  });

console.log(
  "!!! Обратите внимание, что этот текст вывелся самым первым. Ведь это синхронный код, а промисы - асинхронны !!!"
);
