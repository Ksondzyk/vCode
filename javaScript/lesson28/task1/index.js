export const calc = (initialValue) => {
  let result = initialValue;
  const calculator = {
    add(value) {
      result += value;
      return this;
    },
    mult(value) {
      result *= value;
      return this;
    },
    div(value) {
      result /= value;
      return this;
    },
    sabstract(value) {
      result -= value;
      return this;
    },
    result() {
      return value;
    },
  };

  return calculator;
};

const result = calc(3).add(2).mult(4).div(10).sabstract(5).result();

console.log(result);
