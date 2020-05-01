const btn1 = document.querySelectorAll(".btn");

function handleClick(event) {
  console.log(event.target.textContent);
}
btn1[0].addEventListener("click", handleClick);
btn1[1].addEventListener("click", handleClick);
