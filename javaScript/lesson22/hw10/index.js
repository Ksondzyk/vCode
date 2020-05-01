const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItem = (listItems) => {
  // const listElem = document.querySelector(".list");

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      // const listElementElem = document.createElement("li");
      // listElementElem.classList.add("list__item");
      // if (done) {
      //   listElementElem.classList.add("list__item_done");
      // }
      // const checkboxElem = document.createElement("input");
      // checkboxElem.setAttribute("type", "checkbox");
      // checkboxElem.checked = done;

      // checkboxElem.classList.add("list__item-checkbox");
      // listElementElem.append(checkboxElem, text);

      // return listElementElem;
      textCrete(text, done);
    });
  // listElem.append(...listItemsElems);
};
renderListItem(tasks);

function textCrete(text, done) {
  if (text.length === 0) {
    return;
  }
  tasks.push({ text: text, done: done });

  const listElementElem = document.createElement("li");
  listElementElem.classList.add("list__item");

  if (done) {
    listElementElem.classList.add("list__item_done");
  }
  const checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.checked = done;

  checkboxElem.classList.add("list__item-checkbox");
  listElementElem.append(checkboxElem, text);
  const listElem = document.querySelector(".list");
  listElem.append(listElementElem);

  const listCheckbox = document.querySelectorAll(".list__item");
  listCheckbox.forEach((item) => {
    console.log(item.querySelector(".list__item-checkbox"));
    item.addEventListener("change", (event) => {
      if (item.querySelector(".list__item-checkbox").checked === true) {
        item.classList.add("list__item_done");
      } else {
        item.classList.remove("list__item_done");
      }
    });
  });
}
document
  .querySelector(".create-task-btn")
  .addEventListener("click", (event) => {
    const input = document.querySelector(".task-input");
    textCrete(input.value, false);
  });

// const listCheckbox = document.querySelectorAll(".list__item");
// listCheckbox.forEach((item) => {
//   console.log(item.querySelector(".list__item-checkbox"));
//   item.addEventListener("change", (event) => {
//     if (item.querySelector(".list__item-checkbox").checked === true) {
//       item.classList.add("list__item_done");
//     } else {
//       item.classList.remove("list__item_done");
//     }
//   });
// });
