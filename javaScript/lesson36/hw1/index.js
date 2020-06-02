// input string
//output promice
export const getUsersBlogs = async (usersId) => {
  console.log(usersId);
  return usersId.forEach((userId) => {
    const googleBlogs = fetch(`https://api.github.com/users/${userId}`)
      .then((response) => response.json())
      .then((users) => users.blog)
      .then((response) => console.log(response))
      .catch((err) => new Error(err));
  });
  // const googleBlogs = fetch(`https://api.github.com/users/${google}`)
  //   .then((response) => response.json())
  //   .then((users) => users.blog);

  // const facebookBlogs = fetch(`https://api.github.com/users/${facebook}`)
  //   .then((response) => response.json())
  //   .then((users) => users.blog);

  // const gaearonBlogs = fetch(`https://api.github.com/users/${gaearon}`)
  //   .then((response) => response.json())
  //   .then((users) => users.blog);

  // const promiseArr = await [googleBlogs, facebookBlogs, gaearonBlogs];
  // return promiseArr.map((user) => user.json());
};
const result = getUsersBlogs(["google", "facebook", "gaearon"]);

// console.log(result);
