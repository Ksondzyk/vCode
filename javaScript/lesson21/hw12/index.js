function getSection(num) {
  const parent = document.querySelectorAll(".box");
  const element = document.querySelectorAll(`span[data-number="${num}"]`);
  for (let i = 0; i < parent.length; i++) {
    const element = parent[i].querySelectorAll(`span[data-number="${num}"]`);
    if (element) {
      return parent[i].dataset.section;
    }
  }
}
getSection(2);
