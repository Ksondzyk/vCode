function increaser(a, index) {
  if (a > index) {
    return a * index;
  } else if (a <= index) {
    return a;
  }
}
const result = increaser(12, 7);
console.log(result);
