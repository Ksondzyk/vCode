const obj1 = { "John Doe": 19, Tom: 17, Bob: 18 };
const getAdults = (obj) => {
  const usersArr = Object.entries(obj);

  const filterUsersArr = usersArr.filter((user) => user[1] >= 18);
  const usersNames = filterUsersArr.map((user) => user[0]);
  return usersNames;
};
const result = getAdults(obj1);
console.log(result);
