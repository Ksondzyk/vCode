const statusElem = document.querySelector(".task-status");
const checkboxElem = document.querySelector("[type=checkbox]");
statusElem.addEventListener("click", () => {
  if (checkboxElem.checked === true) {
    console.log(true);
  } else if (checkboxElem.checked === false) {
    console.log(false);
  }
});
