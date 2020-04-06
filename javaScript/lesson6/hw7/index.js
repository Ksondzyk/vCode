const arrNumbers = [22, 66, 77, 44];

function checker(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  let arrMin = Math.min(...arr);
  let arrMax = Math.max(...arr);
  let result = Number(arrMin) + Number(arrMax);
  if (result > 100) {
    return true;
  }else{
      return false
  }
}

const result = checker(arrNumbers);
console.log(result);
