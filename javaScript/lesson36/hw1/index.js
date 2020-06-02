// input string
//output promice
export const getUsersBlogs = async (usersId) => {
  let requests = usersId.map((url) =>
    fetch(`https://api.github.com/users/${url}`)
      .then((response) => response.json())
      .then((user) => user.blog)
  );
  return Promise.all(requests).then((responses) =>
    responses.forEach((response) => response)
  );
};
const result = getUsersBlogs(["google", "facebook", "gaearon"]);

console.log(result);
