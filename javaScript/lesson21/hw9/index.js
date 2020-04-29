export function finishForm() {
  const formElem = document.querySelector(".login-form");
  const input = document.querySelector("input");
  const inputElem = document.createElement("input");
  input.setAttribute("name", "login");
  inputElem.setAttribute("type", "type");
  inputElem.setAttribute("password", "password");
  formElem.append(inputElem);
}
// finishForm();
