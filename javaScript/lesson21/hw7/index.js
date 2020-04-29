export function createButton(buttonText) {
  const body = document.querySelector("body");
  const createElem = (document.createElement("button").innerText = buttonText);
  return body.append(createElem);
}
// createButton("sund Email");
