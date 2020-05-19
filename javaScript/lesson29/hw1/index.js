let random = parseInt(Math.random() * (+3000 - +1000) + +1000);

export function requestUserData(userId, callback) {
  if (userId == "broken") {
    callback(null, "Failed to load user data");
    return;
  }
  const obj = { userId: `${userId}`, email: `${userId}@example.com` };
  setInterval(() => callback(obj), random);
}
requestUserData("broken", random);
