let message = "Just learn it!";

export default function createMessenger() {
  let sender = "Gromcode";
  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
  }

  function setMessage(text) {
    message = text.bold();
    sendMessage("Bob");
  }
  function setSender(text) {
    sender = text.bold();
  }

  return {
    sendMessage: sendMessage,
    setMessage: setMessage,
    setSender: setSender,
  };
}
