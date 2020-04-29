export function getTitl() {
  const element = document.querySelector(".title");
  const textElement = element.textContent;
  return textElement;
}
getTitl();

export function getDescription() {
  const element = document.querySelector(".about");
  const textContent = element.innerText;
  return textContent;
}
getDescription();

export function getPlans() {
  const element = document.querySelector(".plans");
  const textContent = element.innerHTML;
  return textContent;
}
getPlans();

export function getGoal() {
  const element = document.querySelector(".goal");
  const textContent = element.outerHTML;
  return textContent;
}
getGoal();
