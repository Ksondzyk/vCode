export function createCalculator() {
  let memory = 0;
  function add(plus) {
    memory += plus;
  }
  function decrease(minus) {
    memory -= minus;
  }
  function reset() {
    memory = 0;
  }
  function getMemo() {
    return memory;
  }
  return {
    add,
    decrease,
    reset,
    getMemo,
  };
}

// const calculate1 = createCalculator();
// calculate1.add(8);
// const calculate2 = createCalculator();
// calculate2.decrease(4);
// const calculate3 = createCalculator();
// calculate3.reset();
// const calculate4 = createCalculator();
// calculate4.getMemo();
