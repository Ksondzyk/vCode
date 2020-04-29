function squaredNumbers() {
  const element = document.querySelectorAll("[data-number]");
  for (let i = 0; i < element.length; i++) {
    let number = element[i].dataset.number * element[i].dataset.number;
    element[i].setAttribute("data-squared-number", number);
  }
}
squaredNumbers();
