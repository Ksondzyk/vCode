let message = "Just learn it!";

export const sendMessage = (name) => {
  const sender = "Gromcode";
  console.log(`${name}, ${message} Your ${sender}`);
};
sendMessage("Ann");
