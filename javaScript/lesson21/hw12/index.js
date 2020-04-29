export function getSection(num) {
  const parent = document.querySelectorAll(".box");
  const element = document.querySelectorAll(`span[data-number="${num}"]`);
  let res = "";
  for (let i = 0; i < parent.length; i++) {
    const element = parent[i].querySelectorAll(`span[data-number="${num}"]`);
    if (element) {
      res = parent[i].dataset.section;
      break;
    }
  }
  return res;
}
// getSection(2);
