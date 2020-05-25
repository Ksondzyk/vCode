const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

// const result = getTasksList(baseUrl);
// console.log(result);

export const getTaskById = (taskId) => {
  const objPromice = fetch(
    `https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks`
  )
    .then((response) => response.json({ id: `${taskId}` }))
    .then((result) => result.filter(({ id }) => id === taskId))
    .then((result) => result.reduce((acc, el) => (acc = el)), {});
  return objPromice;
};
getTaskById("1").then((result) => console.log(result));

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => response.json());
};
// getTasksList().then((result) => console.log(result));
//
