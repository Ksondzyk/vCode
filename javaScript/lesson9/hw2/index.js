const rooms = {
  room1: [
    { name: "room1 name1" },
    { name: "room1 name2" },
    { name: "room1 name3" },
    { name: "room1 name4" },
  ],
  room2: [{ name: "room2 name1" }],
  room3: [
    { name: "room3 name1" },
    { name: "room3 name2" },
    { name: "room3 name3" },
  ],
};
const getPeople = (obj) => {
  const values = Object.values(obj);
  if (obj === undefined) return {};
  values.reduce((acc, elem) => (acc = elem));
  const arrObj = values.flat();
  return arrObj.map((value) => value.name);
};

const result = getPeople(rooms);
console.log(result);
