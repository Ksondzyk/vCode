"use strict";
import { sendMessage } from "./index.js";
export function setMessage(text) {
  message = text;
}
sendMessage("Ann");
setMessage("Good job!");
