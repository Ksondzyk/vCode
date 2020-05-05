

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

// const tasks = [
//   { text: "Buy milk", done: false },
//   { text: "Pick up Tom from airport", done: false },
//   { text: "Visit party", done: false },
//   { text: "Visit doctor", done: true },
//   { text: "Buy meat", done: true },
// ];

// const listElem = document.querySelector(".list");
// renderListItem(tasks);
// function addTask(text, checked) {
//   tasks.push({ text: text, done: false });
//   renderListItem(tasks);
// }

// function addNewItem(text, checked) {
//   const el = document.createElement("li");
//   el.classList.add("list__item");
//   if (checked) {
//     el.classList.add("list__item_done");
//   }
//   const checkElem = document.createElement("input");
//   checkElem.setAttribute("type", "checkbox");
//   checkElem.checked = checked;

//   checkElem.classList.add("list__item-checkbox");
//   el.append(checkElem, text);
//   el.addEventListener("click", () => {
//     const checkedValues = el.firstChild;
//     if (checkedValues.checked) {
//       el.classList.add("list__item_done");
//     } else {
//       el.classList.remove("list__item_done");
//     }
//   });
//   listElem.append(el);
// }
// document.querySelector(".create-task-btn").addEventListener("click", () => {
//   let inputValue = document.querySelector(".task-input").value;
//   addTask(inputValue, false);
//   document.querySelector(".task-input").value = "";
// });

// function renderListItem(listItems) {
//   document.querySelector(".list").classList.remove("list-item");
//   listItems = listItems.sort((a, b) => b.done - a.done);
//   listItems.forEach((item) => {
//     addNewItem(item.text, item.done);
//   });
// }
