import { message } from "./index";

export const sendMessage = (name) => {
  const sender = "Gromcode";
  console.log(`${name}, ${message} Your ${sender}`);
};
sendMessage("Ann");
