const asyncCalculator = (num) =>
  new Promise((resolve) => {
    setTimeout(() => {
      console.log(`Initial Value: ${num}`);
      resolve(num);
    }, 3000);
  })
    .then(
      (value) =>
        new Promise((resolve) => {
          setTimeout(() => {
            const result = value * value;
            console.log(`square Value: ${result}`);
            resolve(result);
          }, 3000);
        })
    )
    .then((value) => {
      const result = value * 2;
      console.log(`Doubled Value: ${result}`);
      return result;
    });
asyncCalculator(4).then((value) => console.log(value));
