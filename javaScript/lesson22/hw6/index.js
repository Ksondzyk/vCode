const btn1 = document.querySelectorAll(".btn");

// function handleClick(event) {
//   console.log(event.target.textContent);
// }
btn1[0].addEventListener("click", function handleClick(event) {
  console.log(event.target.textContent);
});
btn1[1].addEventListener("click", function handleClick(event) {
  console.log(event.target.textContent);
});
