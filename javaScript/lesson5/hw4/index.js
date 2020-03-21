function increaser(a, index) {
  for (var i = 0; i < a; i++) {
  //   console.log(a[i]);
  // }
  if (a + index) {
    return a * index;
  } else {
    return a;
  }
}

const result = increaser(12, 7);
console.log(result);
