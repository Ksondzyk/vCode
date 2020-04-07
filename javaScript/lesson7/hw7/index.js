const filterNames = (arr, text) => {
  const result = arr.filter((str) => {
    return str.length > 5 && str.includes(text);
  });
  return result;
};
console.log(
  filterNames(
    ["John", "Olivya", "Oleksandr", "Emanuel", "Vanya", "Nastya"],
    "ya"
  )
);
