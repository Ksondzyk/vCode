function increaser(a, index) {
  if (a < index) {
    return a * index;
  } else {
    return a;
  }
}
const result = increaser(12, 7);
console.log(result);
