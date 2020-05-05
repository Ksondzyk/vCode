const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const res = [];
const renderListItem = (listItems) => {
  const listElem = document.querySelector(".list");

  const listItemsElems = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
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

      const btnCreate = document
        .querySelector(".create-task-btn")
        .addEventListener("click", createTask);

      function createTask() {
        const input = document.querySelector(".task-input");
        if (input.value.length === 0) {
          return;
        }
        const newTask = [{}].map((text, done) => ({
          text: input.value,
          done: false,
        }));
        this.res = [...newTask, ...tasks].sort((a, b) => b.done - a.done);

        renderListItem(newTask);
        input.value = "";
      }
      return listElementElem;
    });
  listElem.append(...listItemsElems);
};

console.log(res);
renderListItem(tasks);
