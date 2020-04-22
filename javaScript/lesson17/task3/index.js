export function defer(func, ms) {
  return function () {
    setTimeout(func, ms);
  };
}

const sayHi = () => {
  console.log("Hi");
};

// sayHi();

const defferedSayHi = defer(sayHi, 1000);

defferedSayHi();
