"use strict";
import { message, sendMessage } from "./index.js";
export function setMessage(text) {
  message = text;
}
sendMessage("Ann");
setMessage("Good job!");
