const min = 1000;
const max = 3000;
let random = parseInt(Math.random() * (+max - +min) + +min);

function requestUserData(userId, callback) {
  if (userId === "broken") {
    const emty = () => {
      return "Failed to load user data";
    };
    emty();
  }
  setInterval(() => {
    const obj = { userId: `${userId}`, email: `${userId}@example.com` };
  }, callback);
}
requestUserData("broken", random);
