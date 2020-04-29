export function createButton(buttonText) {
  const body = document.querySelector("body");
  const createElem = document.createElement("button");
  createElem.textContent = buttonText;
  body.append(createElem);
}
createButton("sund Email");
