const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

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

      const listElem = document.querySelector(".list__item");
      // const checkBoxes = document.querySelectorAll(".list__item-checkbox");

      const btnCreate = document
        .querySelector(".create-task-btn")
        .addEventListener("click", createTask);

      function createTask() {
        const input = document.querySelector(".task-input");
        if (input.value.length === 0) {
          return;
        }
        tasks.push({ text: input.value, done: false });

        const listElem = document.querySelector(".list__item");
        function updateCheck() {
          const checkBoxes = document.querySelectorAll(".list__item");
          for (let i = 0; i < checkBoxes.length; i++) {
            checkBoxes[i].addEventListener("click", function () {
              console.log("sdcsdc");
              if (
                checkBoxes[i].querySelector("[type=checkbox]").checked === true
              ) {
                checkBoxes[i].classList.add("list__item_done");
              } else {
                checkBoxes[i].classList.remove("list__item_done");
              }
            });
          }
        }

        updateCheck();

        tasks.sort((a, b) => b.done - a.done);

        renderListItem(tasks);
        input.value = "";
      }
      return listElementElem;
    });
  listElem.innerHTML = "";
  listElem.append(...listItemsElems);
};

renderListItem(tasks);
