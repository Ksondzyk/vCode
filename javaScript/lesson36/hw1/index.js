// input string
//output promice
export const getUsersBlogs = async (userId) => {
  const [google, facebook, gaearon] = userId;
  const googleBlogs = fetch(`https://api.github.com/users/${google}`)
    .then((response) => response.json())
    .then((users) => users.blog);

  const facebookBlogs = fetch(`https://api.github.com/users/${facebook}`)
    .then((response) => response.json())
    .then((users) => users.blog);

  const gaearonBlogs = fetch(`https://api.github.com/users/${gaearon}`)
    .then((response) => response.json())
    .then((users) => users.blog);

  const promiseArr = Promise.all([googleBlogs, facebookBlogs, gaearonBlogs]);
  return promiseArr;
};
const result = getUsersBlogs(["google", "facebook", "gaearon"]);
console.log(result);
