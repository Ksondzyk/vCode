const min = 1000;
const max = 3000;
let random = parseInt(Math.random() * (+max - +min) + +min);

export function requestUserData(userId, callback) {
  if (userId == "broken") {
    callback(null, "Failed to load user data");
    return;
  }
  setInterval(() => {
    const obj = { userId: `${userId}`, email: `${userId}@example.com` };
  }, callback);
}
// requestUserData("broken", random);
