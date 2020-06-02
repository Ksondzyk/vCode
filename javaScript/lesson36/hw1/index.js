// input string
//output promice
const getUsersBlogs = async (userId) => {
  const [google, facebook, gaearon] = userId;
  const googleBlogs = fetch(`https://api.github.com/users/${google}`)
    .then((response) => response.json())
    .then((users) => users.blog);
  console.log(googleBlogs);
  const facebookBlogs = fetch(`https://api.github.com/users/${facebook}`)
    .then((response) => response.json())
    .then((users) => users.blog);
  console.log(facebookBlogs);
  const gaearonBlogs = fetch(`https://api.github.com/users/${gaearon}`)
    .then((response) => response.json())
    .then((users) => users.blog);
  console.log(gaearonBlogs);
  const result = await Promise.all([googleBlogs, facebookBlogs, gaearonBlogs]);
  console.log(result);
};
const result = getUsersBlogs(["google", "facebook", "gaearon"]);
