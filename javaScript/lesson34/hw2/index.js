const baseUrl = "https://5ece5f5561c8480016701459.mockapi.io/api/v1/users";

// 1. получить элементы из DOM
// 2. создать функцию-обработчик, которая будет запущена после отправки
// 3. собрать всю информацию о форме с помощью объекта FormData
// 4. отправить запрос на сервер с информацией формы и обработать ошибку
// 5. создать функцию-обработчик B, которая будет срабатывать после изменения входов
// 6. используйте reportValidity для проверки формы




// 1. получить элементы из DOM
// 2. создать функцию-обработчик, которая будет запущена после отправки
// 3. собрать всю информацию о форме с помощью объекта FormData
// 4. отправить запрос на сервер с информацией формы и обработать ошибку
// 5. создать функцию-обработчик B, которая будет срабатывать после изменения входов
// 6. используйте reportValidity для проверки формы

const elementForm = document.querySelector(".login-form");
const emailInput = document.querySelector(".form-input[type=email]");
emailInput.value;
const passwordInput = document.querySelector(".form-input[type=password]");
passwordInput.value;

const nameInput = document.querySelector(".form-input[type=text]");
nameInput.value;

const submitBtnElem = document.querySelector(".submit-button");
const errorElem = document.querySelector(".error-text");

const onInputChange = () => {
  const isValidForm = elementForm.reportValidity();
  if (isValidForm) {
    submitBtnElem.removeAttribute("disabled");
    errorElem.textContent = "";
  } else {
    submitBtnElem.setAttribute("disabled", true);
    errorElem.textContent = "";
  }
};

emailInput.addEventListener("input", onInputChange);
passwordInput.addEventListener("input", onInputChange);
nameInput.addEventListener("input", onInputChange);

elementForm.addEventListener("submit", runAfterSending);
function runAfterSending(event) {
  event.preventDefault();
  const inputField = document.querySelector(".login-form");
  const formData = [...new FormData(inputField)];
  const objectForm = Object.fromEntries(formData);
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
}
