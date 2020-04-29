export function manageClasses() {
  const oneLi = document.querySelector(".one");
  oneLi.classList.add("selected");
  const twoLi = document.querySelector(".two");
  twoLi.classList.remove("selected");
  const threeLi = document.querySelector(".three");
  threeLi.classList.toggle("three_done");
  const fourLi = document.querySelector(".four");
  if (fourLi.classList.contains("some-class") === true) {
    fourLi.classList.add("another-class");
  }
}
// manageClasses();
