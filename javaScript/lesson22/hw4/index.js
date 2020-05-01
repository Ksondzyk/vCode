const button = document.querySelector(".search__btn");
const inputText = document.querySelector(".search__input");

button.addEventListener("click", () => {
  console.log(inputText.value);
});
