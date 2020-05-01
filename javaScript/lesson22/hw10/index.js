const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const renderListItem = (listItems) => {
  listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
      textCrete(text, done);
    });
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
    item.addEventListener("change", (event) => {
      tasks.find(
        ({ text }) => text === item.innerText
      ).done = item.querySelector(".list__item-checkbox").checked;
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
