var arr = [];

for (let i = 0; i < 10; i++) {
  arr[i] = function () {
    return i;
  };
  
}

// console.log(arr[5]());
export { arr };
