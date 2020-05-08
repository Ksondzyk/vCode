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
    createDate: "2021-11-24T15:51:32.222Z",
    id: "1",
  },
  {
    text: "Pick up Tom from airport",
    done: false,
    createDate: "2021-11-25T15:51:32.222Z",
    id: "2",
  },
  {
    text: "Visit party",
    done: false,
    createDate: "2021-11-26T15:51:32.222Z",
    id: "3",
  },
  {
    text: "Visit doctor",
    done: true,
    createDate: "2021-11-27T15:51:32.222Z",
    id: "4",
  },
  {
    text: "Buy meat",
    done: true,
    createDate: "2021-11-28T15:51:32.222Z",
    id: "5",
  },
];
const renderTasks = (tasksList) => {
  const listElem = document.querySelector(".list");
  listElem.innerHTML = "";
  const tasksElems = tasksList.map(({ text, done, id }) => {
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
  const checkBoxes = document.querySelectorAll(".list__item");

  checkBoxes.forEach((el) => {
    el.addEventListener("click", (e) => {
      onToggleTask(e, tasks);
      console.log("click");
    });
  });
};
renderTasks(tasks);
function onToggleTask(e, tasks) {
  console.log("onToggleTask");
  const isCheckbox = e.target.classList.contains("list__item-checkbox");
  if (!isCheckbox) {
    return;
  }

  const taskData = tasks.find((task) => task.id == e.target.dataset.id);
  Object.assign(taskData, { done: e.target.checked });
  tasks.sort((a, b) => a.done - b.done);
  console.log(tasks);
  renderTasks(tasks);
}

const btnCreate = document
  .querySelector(".create-task-btn")
  .addEventListener("click", createTask);

function createTask() {
  const input = document.querySelector(".task-input");
  if (input.value.length === 0) {
    return;
  }
  const count = tasks.length + 1;

  tasks.push({
    text: input.value,
    done: false,
    createDate: new Date().toISOString(),
    id: count.toString(),
  });
  tasks.sort((a, b) =>
    a.createDate < b.createDate ? -1 : a.createDate > b.createDate ? 1 : 0
  );
  console.log(tasks);

  tasks.sort((a, b) => a.done - b.done);
  console.log(tasks);
  renderTasks(tasks);
  document.querySelector(".task-input").value = "";
}
createTask();
