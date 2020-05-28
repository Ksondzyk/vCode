const baseUrl = "https://5ece5f5561c8480016701459.mockapi.io/api/v1/users";

export const getTasksList = () => {
  return fetch(baseUrl).then((response) => response.json());
};
// getTasksList();

export const getUserById = (userId) => {
  return fetch(`${baseUrl}/${userId}`).then((response) => response.json());
};
// getUserById("12");

export const createUser = (createUser) => {
  return fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(createUser),
  }).then((response) => response.json());
};
// createUser({
//   id: "1",
//   email: "cool@email.com",
//   firstName: "Iron",
//   lastName: "Man",
//   age: 42,
// });

export const updateUser = (userId, userObject) => {
  return fetch(`${baseUrl}/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(userObject),
  }).then((response) => response.json());
};
// updateUser("1", {
//   id: "1",
//   email: "roman@email.com",
//   firstName: "Roman",
//   lastName: "Kson",
//   age: 26,
// });

export const deleteUser = (userId) => {
  fetch(`${baseUrl}/${userId}`, { method: "DELETE" }).then((response) =>
    response.json()
  );
};
// deleteUser("1");
// создать правильный URl c пользователями
//  2 сделать запрос вернуть json c users
//  3 вернуть  json с юзером
//  4 создать пользователя на сервере
//  5 изменить данные о пользователе
// 6 удалить пользователя
