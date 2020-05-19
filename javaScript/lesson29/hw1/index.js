const min = 1000;
const max = 3000;
let random = parseInt(Math.random() * (+max - +min) + +min);

export function requestUserData(userId, callback) {
  if (userId === "broken") {
    () => {
      return "Failed to load user data";
    };
  }
  setInterval(() => {
    const obj = { userId: `${userId}`, email: `${userId}@example.com` };
  }, callback);
}
requestUserData("broken", random);
