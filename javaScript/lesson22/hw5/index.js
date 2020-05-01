const btn = document.querySelector(".single-use-btn");

let fistCall = false;

btn.addEventListener("click", () => {
  if (fistCall !== true) {
    fistCall = true;
    console.log((btn.value = "clicked"));
  }
});
