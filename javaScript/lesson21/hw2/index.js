export function getItemsList() {
  const elementsList = document.querySelectorAll(".technology");
  console.dir(elementsList);
  return elementsList;
}
getItemsList();

export function getItemsArray() {
  const ItemsArray = document.querySelectorAll(".tool");
  const elementsArray = Array.from(ItemsArray);
  console.dir(elementsArray);
  return elementsArray;
}
getItemsArray();
