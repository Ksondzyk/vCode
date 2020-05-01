const buttons = document.querySelectorAll(".btn");

buttons.forEach((el) => {
  el.addEventListener("click", function handleClick(event) {
    console.log(event.srcElement.innerHTML);
    return event.textContent;
  });
});
