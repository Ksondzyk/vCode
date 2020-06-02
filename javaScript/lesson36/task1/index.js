// async function func() {
//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(17);
//     }, 1000);
//   });
//   const result = await promise;
//   console.log(result);
//   console.log("hello");
//   return 1;
// }
// const result = func();
// console.log(result);
// console.log("hi");

export const getUser = async (userId) => {
  try {
    const responce = await fetch(`https://api.github.com/users/${userId}`);
    if (!responce.ok) {
      return null;
    }
    const userData = await responce.json();
    return userData;
  } catch (err) {
    throw new Error("Falied to fetch user");
  }
};

getUser("facebook")
  .then((userData) => console.log(userData))
  .catch((err) => alert(err.message));
