import { sendMessage } from "./sendMessage";

export let message = "Just learn it!";

sendMessage("Ann");

function setMessage(text) {
  message = text;
}

setMessage("Good job!");
sendMessage("Ann");
