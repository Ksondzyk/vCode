export function getSection(num) {
  const element = document.querySelector(`span[data-number="${num}"]`);
  return element.closest(".box");
}
getSection(6);
