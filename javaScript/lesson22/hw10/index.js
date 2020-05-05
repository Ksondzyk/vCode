// const tasks = [
//   { text: "Buy milk", done: false },
//   { text: "Pick up Tom from airport", done: false },
//   { text: "Visit party", done: false },
//   { text: "Visit doctor", done: true },
//   { text: "Buy meat", done: true },
// ];

// const renderListItem = (listItems) => {
//   const listElem = document.querySelector(".list");

//   const listItemsElems = listItems
//     .sort((a, b) => a.done - b.done)
//     .map(({ text, done }) => {
//       const listElementElem = document.createElement("li");
//       listElementElem.classList.add("list__item");
//       if (done) {
//         listElementElem.classList.add("list__item_done");
//       }
//       const checkboxElem = document.createElement("input");
//       checkboxElem.setAttribute("type", "checkbox");
//       checkboxElem.checked = done;

//       checkboxElem.classList.add("list__item-checkbox");
//       listElementElem.append(checkboxElem, text);

//       const listElem = document.querySelector(".list__item");
//       // const checkBoxes = document.querySelectorAll(".list__item-checkbox");

//       return listElementElem;
//     });
//   listElem.innerHTML = "";
//   listElem.append(...listItemsElems);
// };

// renderListItem(tasks);

// const btnCreate = document
//   .querySelector(".create-task-btn")
//   .addEventListener("click", createTask);

// function createTask() {
//   const input = document.querySelector(".task-input");
//   if (input.value.length === 0) {
//     return;
//   }
//   tasks.push({ text: input.value, done: false });

//   const listElem = document.querySelector(".list__item");
//   function updateCheck() {
//     const checkBoxes = document.querySelectorAll(".list__item");
//     for (let i = 0; i < checkBoxes.length; i++) {
//       checkBoxes[i].addEventListener("click", function () {
//         console.log("sdcsdc");
//         if (checkBoxes[i].querySelector("[type=checkbox]").checked === true) {
//           checkBoxes[i].classList.add("list__item_done");
//         } else {
//           checkBoxes[i].classList.remove("list__item_done");
//         }
//       });
//     }
//   }
//   updateCheck();

//   tasks.sort((a, b) => b.done - a.done);
// }

const tasks = [
  {
    text: "Buy milk",
    done: false,
    createDate: "2019-11-24T15:51:32.222Z",
    id: "1",
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    createDate: "2019-11-25T15:51:32.222Z",
    id: "2",
  },
  {
    text: "Visit party",
    done: false,
    createDate: "2019-11-26T15:51:32.222Z",
    id: "3",
  },
  {
    text: "Visit doctor",
    done: true,
    createDate: "2019-11-27T15:51:32.222Z",
    id: "4",
  },
  {
    text: "Buy meat",
    done: true,
    createDate: "2019-11-28T15:51:32.222Z",
    id: "5",
  },
];
const renderTasks = (tasksList) => {
  listElem.innerHTML = "";
  const tasksElems = tasksList
    .slice()
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement("li");
      listItemElem.classList.add("list__item");
      const checkbox = document.createElement("input");
      checkbox.setAttribute("type", "checkbox");
      checkbox.setAttribute("data-id", id);
      checkbox.checked = done;
      checkbox.classList.add("list__item-checkbox");
      if (done) {
        listItemElem.classList.add("list__item_done");
      }
      listItemElem.append(checkbox, text);
      return listItemElem;
    });
  listElem.append(...tasksElems);
};
renderTasks(tasks);
const onToggleTask = (e) => {
  const isCheckbox = e.target.classList.contains("list__item-checkbox");
  if (!isCheckbox) {
    return;
  }
  const taskData = tasks.find((task) => task.id === e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  renderTasks(tasks);
};
