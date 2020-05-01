const btn1 = document.querySelectorAll(".btn");

function handleClick(event) {
  console.log(event.target.textContent);
}
btn1[0].addEventListener("click", (event) => this.handleClick(event));
btn1[1].addEventListener("click", (event) => this.handleClick(event));
