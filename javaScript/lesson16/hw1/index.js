//input  number
//return arr [functions ]
export function createArrayOfFunctions(arg) {
  if (isNaN(arg) && arg !== undefined) {
    return null;
  }
  if (arg === undefined) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < arg; i++) {
    arr.push(
      (arr[i] = function () {
        return i;
      })
    );
  }
  return arr;
}

const result = createArrayOfFunctions(9);
console.log(result);
