const getRandomNumbers = (number, ...args) => {
  if (args[0] > args[1] || (args[0] < 0 && args[1] < 0)) {
    return null;
  }
  const newArr = [];
  for (let i = 0; i < number; i++) {
    const res = Math.random() * (args[1] - args[0] - 1) + args[0] - 1;
    const el = Math.round(res);

    newArr.push(el);
  }
  return newArr;
};
