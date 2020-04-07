const arr = [3, 1, 2, 88, 15, 12];
const sortDesc = (numbers) => numbers.slice().sort((a, b) => b - a);

console.log(sortDesc(arr));
