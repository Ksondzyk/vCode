const baseUrl = "https://5ece5f5561c8480016701459.mockapi.io/api/v1/users";

// const createUser = (createUser) => {
//   return fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(createUser),
//   }).then((response) => response.json());
// };
// createUser({
//   id: "1",
//   email: "cool@email.com",
//   firstName: "Iron",
//   lastName: "Man",
//   age: 42,
// });

// 1. получить элементы из DOM
// 2. создать функцию-обработчик, которая будет запущена после отправки
// 3. собрать всю информацию о форме с помощью объекта FormData
// 4. отправить запрос на сервер с информацией формы и обработать ошибку
// 5. создать функцию-обработчик B, которая будет срабатывать после изменения входов
// 6. используйте reportValidity для проверки формы

// const inputField = document.querySelectorAll(".form-input");
// const valueInputField = Array.from(inputField).map((el) => el.value);
// const allElementsPlaceholder = valueInputField.every((el) => el.length > 0);

// const form = document.querySelector(".login-form").reportValidity();

// (function () {
//   const form = document.querySelector(".login-form").reportValidity();
//   if (form === true) {
//     const btnElem = document.querySelector(".submit-button");
//     btnElem.disabled = false;
//   }
//   return true;
// })();

// const btnElem = document.querySelector(".submit-button");

// const buttonElem = document.querySelector(".submit-button");

// 1. получить элементы из DOM
// 2. создать функцию-обработчик, которая будет запущена после отправки
// 3. собрать всю информацию о форме с помощью объекта деструкрурилазции и забиси в обьект
// 3.1 после клика по кнопке  вытягиваю значения с  инпутов и возвращаю новый масив
// 3.2 делаю дестуктуризацию масива и записываю все значения в json обьенкт
// 4. отправить запрос на сервер с информацией формы и обработать ошибку
// 4.1 значенияпередаю значения из предыдущей ф-ции и отправляю на сервер
// 4.2 вывожу в консоль
// 5. создать функцию-обработчик B, которая будет срабатывать после изменения входов
// 6. используйте reportValidity для проверки формы

const elementForm = document.querySelector("#myForm");
function runAfterSending(event) {
  console.log(event);
  event.preventDefault();
  const inputField = document.querySelectorAll(".form-input");
  const valueInputField = Array.from(inputField).map((el) => el.value);
  const [emailValue, nameValue, passwordValue] = valueInputField;
  const obj = {
    Email: emailValue,
    UserName: nameValue,
    Password: passwordValue,
  };

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(obj),
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
elementForm.addEventListener("submit", runAfterSending);
