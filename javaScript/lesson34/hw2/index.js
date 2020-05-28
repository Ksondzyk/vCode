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

const buttonElem = document.querySelector(".submit-button");

const handleform = () => {
  const inputField = document.querySelectorAll(".form-input");
  const valueInputField = Array.from(inputField).map((el) => el.value);
  const [emailValue, nameValue, passwordValue] = valueInputField;

  const formData = new FormData();
  formData.append("email", emailValue);
  formData.append("UserName", nameValue);
  formData.append("password", passwordValue);

  const request = new XMLHttpRequest();
  request.open("POST", baseUrl);
  request.send(formData);

  request.open("GET", baseUrl);
  request.send();

  request.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(JSON.parse(this.responseText));
    }
  };

  //   const formInformation = JSON.stringify({
  //     email: emailValue,
  //     name: nameValue,
  //     password: passwordValue,
  //   });
  //   return formInformation;
};
const formInformationObj = handleform();

// const createTask = (taskData) => {
//   return fetch(baseUrl, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json;charset=utf-8",
//     },
//     body: JSON.stringify(taskData),
//   }).then((data) => console.log(data));
// .then((response) => response.json())
// };
// createTask(formInformationObj);

buttonElem.addEventListener("click", handleform);
