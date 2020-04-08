const user = {
  name: "Tom",
  id: "1234567",
};

const addPropertyV1 = (userData, userId) => {
  return (userData.id = userId);
};
const result = addPropertyV1(user, "12345678");
console.log(result);
const addPropertyV2 = (userData, userId) => {
  return Object.assign(userData, userId);
};
const result2 = addPropertyV2(user, "1234567");
console.log(result2);

const addPropertyV3 = (userData, userId) => {
  const user2 = Object.assign(userData, userId);
  return user2;
};
const result3 = addPropertyV3(user, "1234567");
console.log(result3);
const addPropertyV4 = (userData, userId) => {
  const user3 = { ...userData, ...userId };
  return user3;
};
const result4 = addPropertyV4(user, "1234567");
console.log(result);
