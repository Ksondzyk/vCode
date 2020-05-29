const baseUrl = "https://5ece5f5561c8480016701459.mockapi.io/api/v1/users";

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
// 3. собрать всю информацию о форме с помощью объекта FormData
// 4. отправить запрос на сервер с информацией формы и обработать ошибку
// 5. создать функцию-обработчик B, которая будет срабатывать после изменения входов
// 6. используйте reportValidity для проверки формы

const elementForm = document.querySelector(".login-form");
elementForm.addEventListener("submit", runAfterSending);
function runAfterSending(event) {
  event.preventDefault();
  const inputField = document.querySelector(".login-form");
  const formData = [...new FormData(inputField)];
  const objectForm = Object.fromEntries(formData);
  // console.log(objectForm);

  fetch(baseUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(objectForm),
  })
    .then((response) => response.json())
    .then((data) => {
      const result = JSON.stringify(data);
      alert(result);
      if (result.length !== undefined) {
        elementForm.reset();
      }
      return result;
    })
    .catch(() => {
      const errorElem = document.querySelector(".error-text");
      errorElem.textContent = "Failed to create user";
    });
  // inputField.reset();
}
