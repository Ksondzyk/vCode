const min = 1000;
const max = 3000;
let random = parseInt(Math.random() * (+max - +min) + +min);

export function requestUserData(userId, callback) {
  if (userId === "broken") {
  }
  setInterval(() => {
    const obj = { userId: `${userId}`, email: `${userId}@example.com` };
    // console.log(obj);
  }, callback);
}
requestUserData("userid777", random);
