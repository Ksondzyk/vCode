const btn1 = document.querySelectorAll(".pagination__page");

function handleClick(event) {
  console.log(event.target.dataset.pageNumber);
}
btn1[0].addEventListener("click", handleClick);
btn1[1].addEventListener("click", handleClick);
btn1[2].addEventListener("click", handleClick);
