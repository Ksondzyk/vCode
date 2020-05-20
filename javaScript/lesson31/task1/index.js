const requestUserData = (userId) => {
  const request = new Promise((resolve, reject) => {
    if (userId === "broken") {
      setTimeout(() => {
        reject(new Error("User not found"));
      }, 500);
    } else {
      setTimeout(() => {
        resolve({
          name: "John",
          age: 17,
          userId: `${userid777}`,
          email: `${userid777}@example.com`,
        });
      }, 1000);
    }
  });

  return request;
};
requestUserData("broken")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
