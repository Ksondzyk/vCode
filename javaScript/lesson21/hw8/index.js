export function finishList() {
  const listElem = document.querySelector(".list");
  const listElemLi = document.querySelector(".special");
  const createElem = document.createElement("li");
  createElem.textContent = "8";
  listElem.append(createElem);
  const createPrenend = document.createElement("li");
  createPrenend.textContent = 1;
  listElem.prepend(createPrenend);
  const createBefore = document.createElement("li");
  createBefore.textContent = 4;
  listElemLi.before(createBefore);
  const createAfter = document.createElement("li");
  createAfter.textContent = 6;
  listElemLi.after(createAfter);
}
// finishList();
