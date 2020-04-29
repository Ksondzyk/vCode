const technology = document.querySelectorAll(".technology");
export function getItemsList(elementsList) {
  console.dir(elementsList);
}
getItemsList(technology);

const ItemsArray = document.querySelectorAll(".tool");
export function getItemsArray(ItemsArray) {
  const elementsArray = Array.from(ItemsArray);
  console.dir(elementsArray);
  return elementsArray;
}
getItemsArray(ItemsArray);
