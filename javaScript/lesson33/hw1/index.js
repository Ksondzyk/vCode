const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

// const result = getTasksList(baseUrl);
// console.log(result);

export const getTaskById = (taskId) => {
  const objPromice = fetch(baseUrl)
    .then((response) => response.json())
    .then((result) => result.filter(({ id }) => id === taskId))
    .then((result) => result.reduce((acc, el) => (acc = el)), {});
  return objPromice;
};

export const getTasksList = (baseUrl) => {
  return fetch(baseUrl).then((response) => response.json());
};
// console.log(getTaskById("2"));
