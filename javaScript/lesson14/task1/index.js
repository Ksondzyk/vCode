"use strict";
let message = "Just learn it";
export const sendMessage = (name) => {
  const sender = "Gromcode";
  console.log(`${name}, ${message}! Your ${sender}`);
};
sendMessage("Ann");
export function setMessage(text) {
  message = text;
}

setMessage("Good job");
sendMessage("Ann");
