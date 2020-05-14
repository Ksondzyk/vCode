const add3 = (value) => value + 3;
const mult2 = (value) => value * 2;
const div4 = (value) => value / 4;
export const compose = (...funcs) => (value) => {
  return funcs.reduce((acc, func) => func(acc), value);
};
const doEveryThing = compose(add3, mult2, div4);

console.log(doEveryThing(3));
