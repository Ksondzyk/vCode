const people = ["Tom", "Ann", "Bob"];

// people.unshift("Jack", "John"); // add to start
// people.shift("Jack", "John"); // delete to start
// people.push("Jack", "John"); // add to end
// people.pop("Jack", "John"); // delete to end
// const first = people.shift(); // delete to end
// console.log(first);

// console.log(people);
// console.log(people.length);

//from , to =>[% 3===0]

function getSpecialNumbers(n, m) {
  let specialNumbers = [];
  for (let i = n; i <= m; i++) {
    if (i % 3 === 0) {
      specialNumbers.push(i);
    }
  }
  return specialNumbers;
}

const specialNumbers = getSpecialNumbers(10, 30);

console.log(specialNumbers);
