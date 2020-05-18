const min = 1000;
const max = 3000;
let random = parseInt(Math.random() * (+max - +min) + +min);

const callback = setInterval((random) => {
  const obj = { userId: "userid777", email: "userid777@example.com" };
}, random);

setInterval(random);

export function requestUserData(userId, callback) {
  if (userId === "broken") {
  }
}
requestUserData("broken", callback);
