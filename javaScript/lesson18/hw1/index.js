export const saveCalls = (...arg) => {
  let calls = [];
  function change(...arg) {
    this.calls.push(...arg);
  }
  return {
    withMemory: function (...arg) {
      change(...arg);
    },
    calls: function () {
      return this.calls;
    },
  };
};

const testWithMemory = saveCalls;
testWithMemory(4, 2);
testWithMemory(9, 1);

testWithMemory.calls; // [ [4, 2], [9, 1] ]

/* Поддержка функций с контекстом */

const user = {
  name: "John",
  sayHi() {
    return this.name;
  },
};

const methodWithMemory = saveCalls(user.sayHi);

methodWithMemory.apply({ name: "Tom" }); // 'Tom'

methodWithMemory.calls; // [ [] ]
// function saveCalls() {

// }

// function test(a, b) {
//   return Math.sqrt(a * a + b * b);
// }

// const testWithMemory = saveCalls(test);
// testWithMemory(4, 2);
// testWithMemory(9, 1);

// testWithMemory.calls; // [ [4, 2], [9, 1] ]

// /* Поддержка функций с контекстом */

// const user = {
//   name: "John",
//   sayHi() {
//     return this.name;
//   },
// };

// const methodWithMemory = saveCalls(user.sayHi);

// methodWithMemory.apply({ name: "Tom" }); // 'Tom'

// methodWithMemory.calls; // [ [] ]
