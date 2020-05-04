// // const tasks = [
// //   { text: "Buy milk", done: false },
// //   { text: "Pick up Tom from airport", done: false },
// //   { text: "Visit party", done: false },
// //   { text: "Visit doctor", done: true },
// //   { text: "Buy meat", done: true },
// // ];

// // const renderListItem = (listItems) => {
// //   listItems
// //     .sort((a, b) => a.done - b.done)
// //     .map(({ text, done }) => {
// //       textCrete(text, done);
// //     });
// // };
// // renderListItem(tasks);

// // function textCrete(text, done) {
// //   if (text.length === 0) {
// //     return;
// //   }
// //   tasks.push({ text: text, done: done });

// //   const randomId = Math.floor(Math.random() * 10);
// //   const listElementElem = document.createElement("li");
// //   listElementElem.classList.add("list__item" + randomId);

// //   if (done) {
// //     listElementElem.classList.add("list__item_done");
// //   }
// //   const checkboxElem = document.createElement("input");
// //   checkboxElem.setAttribute("type", "checkbox");
// //   checkboxElem.checked = done;

// //   checkboxElem.classList.add("list__item-checkbox");
// //   listElementElem.append(checkboxElem, text);
// //   const listElem = document.querySelector(".list");
// //   listElem.append(listElementElem);
// //   console.log(document.querySelector(".list__item" + randomId));
// //   document
// //     .querySelector(".list__item" + randomId)
// //     .addEventListener("change", (event) => {
// //       // tasks.find(
// //       //   ({ text }) => text === item.inner
// //       // ).done = item.querySelector(".list__item-checkbox").checked;
// //       if (item.querySelector(".list__item-checkbox").checked === true) {
// //         item.classList.add("list__item_done");
// //       } else {
// //         item.classList.remove("list__item_done");
// //       }
// //     });
// // }
// // document
// //   .querySelector(".create-task-btn")
// //   .addEventListener("click", (event) => {
// //     const input = document.querySelector(".task-input");
// //     textCrete(input.value, false);
// //   });

// const tasks = [
//   { text: "Buy milk", done: false },
//   { text: "Pick up Tom from airport", done: false },
//   { text: "Visit party", done: false },
//   { text: "Visit doctor", done: true },
//   { text: "Buy meat", done: true },
// ];

// const res = [];
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

//       const btnCreate = document
//         .querySelector(".create-task-btn")
//         .addEventListener("click", createTask);

//       function createTask() {
//         const input = document.querySelector(".task-input");
//         if (input.value.length === 0) {
//           return;
//         }
//         const newTask = [{}].map((text, done) => ({
//           text: input.value,
//           done: false,
//         }));
//         this.res = [...newTask, ...tasks].sort((a, b) => b.done - a.done);

//         renderListItem(newTask);
//         input.value = "";
//       }
//       return listElementElem;
//     });
//   listElem.append(...listItemsElems);
// };

// console.log(res);
// renderListItem(tasks);

// const listElem = document.querySelector(".list__item");
// const checkBoxes = document.querySelectorAll("[type=checkbox]");

// checkBoxes.addEventListener("click", updateCheck);
// function updateCheck() {
//   for (let i = 0; i < checkBoxes.length; i++) {
//     if (checkBoxes[i].checked === true) {
//       classList.add("list__item_done");
//     }
//   }
// }
// updateCheck();

const tasks = [
  { text: "Buy milk", done: false },
  { text: "Pick up Tom from airport", done: false },
  { text: "Visit party", done: false },
  { text: "Visit doctor", done: true },
  { text: "Buy meat", done: true },
];

const listElem = document.querySelector(".list");

tasks
  .sort((a, b) => a.done - b.done)
  .map(({ text, done }) => {
    this.addTask(text, done);
  });
function addTask(text, checked) {
  tasks.push({ text: text, done: false });
  addNewItem(text, checked);
}

function addNewItem(text, checked) {
  const el = document.createElement("li");
  el.classList.add("list__item");
  if (checked) {
    el.classList.add("list__item_done");
  }
  const checkElem = document.createElement("input");
  checkElem.setAttribute("type", "checkbox");
  checkElem.checked = checked;

  checkElem.classList.add("list__item-checkbox");
  el.append(checkElem, text);
  el.addEventListener("click", () => {
    const checkedValues = el.firstChild;
    if (checkedValues.checked) {
      el.classList.add("list__item_done");
    } else {
      el.classList.remove("list__item_done");
    }
  });
  listElem.append(el);
}
document.querySelector(".create-task-btn").addEventListener("click", () => {
  let inputValue = document.querySelector(".task-input").value;
  addTask(inputValue, false);
  document.querySelector(".task-input").value = "";
});
