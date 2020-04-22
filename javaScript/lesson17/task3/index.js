export function defer(func, ms) {
  return function () {
    setTimeout(() => func(...arguments), ms);
  };
}

const sum = (a, b) => {
  console.log(a + b);
};

// const user

const defferedSayHi = defer(sum, 1000);

defferedSayHi(1, 4);
