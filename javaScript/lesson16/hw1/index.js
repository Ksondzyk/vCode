//input  number
//return arr [functions ]
export function createArrayOfFunctions(number) {
  //   if (typeof number !== typeof Number) {
  //     return null;
  //   }
  if (number === undefined) {
    return [];
  }
  let arr = [];
  for (let i = 0; i < number.length; i++) {
    arr.push(
      (arr[i] = function () {
        return i;
      })
    );
  }
  return arr;
}

const result = createArrayOfFunctions(12);
console.log(result);
