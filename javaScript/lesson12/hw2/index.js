const cleanTransactionsList = (arr) => {
  const numbers = arr.map((el) => Number.parseFloat(el));
  const filterNumbers = numbers.filter((number, index) => number > 1);
  const str = filterNumbers.join(" ");
  const newArr = str.split(" ");
  const result = [];
  const string = newArr.forEach((number) => {
    let concatDollar = "$".concat(number);
    if (concatDollar.length <= 3) {
      concatDollar += ".";
      const num = 6 - concatDollar.length;
      for (let i = 0; i < num; i++) {
        concatDollar += +"0";
      }
      result.push(concatDollar);
    }
    if (concatDollar.length <= 5) {
      const num = 5 - concatDollar.length;
      concatDollar += +"0".repeat(num);
      result.push(concatDollar);
    }
  });
  return result;
};

const result = cleanTransactionsList(["  1.9 ", "16.4", 17, " 1 dollar "]);
console.log(result);
