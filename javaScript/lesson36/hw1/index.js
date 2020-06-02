// input string
//output promice
export const getUsersBlogs = async (usersId) => {
  // usersId.forEach((userId) => {
  //   const googleBlogs = fetch(`https://api.github.com/users/${userId}`)
  //     .then((response) => response.json())
  //     .then((users) => users.blog)
  //     .then((url) => fetch(url))
  //     .then((response) => console.log(response));
  // });

  let requests = usersId.map((url) =>
    fetch(`https://api.github.com/users/${url}`)
      .then((response) => response.json())
      .then((users) => user.blog)
  );

  // Promise.all будет ожидать выполнения всех промисов
  return Promise.all(requests).then((responses) =>
    responses.forEach((response) => response)
  );

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
const result = getUsersBlogs(["google", "facebook", "gaearon"])
  // .then((response) => response.json())
  // .then((users) => user.blog);

console.log(result);
