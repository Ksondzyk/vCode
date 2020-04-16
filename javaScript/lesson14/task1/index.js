"use strict";
let message = "Just learn it!";
const sendMessage = (name) => {
  const sender = "Gromcode";
  console.log(`${name}, ${message} Your ${sender}`);
};
sendMessage("Ann");

function setMessage(text) {
  message = text;
}
setMessage("Good job!");
sendMessage("Ann");
