// input string
//output promice
export const getUsersBlogs = async (usersId) => {
  let requests = usersId.map((url) =>
    fetch(`https://api.github.com/users/${url}`).then((response) =>
      response.json()
    )
  );
  const result = Promise.all(requests);
  return result.map((user) => user.blog);
};
const result = getUsersBlogs(["google", "facebook", "gaearon"]);

// console.log(result);
