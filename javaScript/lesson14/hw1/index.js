"use strict";
let memory = 0;

export function add(plus) {
  memory += plus;
}
export function decrease(minus) {
  memory -= minus;
}
export function reset() {
  memory = 0;
}
export function getMemo() {
  return memory;
}
console.log(add(8));
console.log(decrease(4));
console.log(reset());
console.log(memory);
