const baseUrl = "https://5e5cf5eb97d2ea0014796f01.mockapi.io/api/v1/tasks";

export const getTasksList = (baseUrl) =>
  fetch(`${baseUrl}`).then((response) => response.json());

const result = getTasksList(baseUrl);
console.log(result);
