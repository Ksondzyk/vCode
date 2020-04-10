const users = { Tom: 17, Bob: 100 };

const players = { "John Doe": 19, Bob: 18 };

const res = { ...players, ...users };

console.log(players);
console.log(res);

// const copyObj = (obj) => ({ ...obj });

// console.log(copyObj(users ));
