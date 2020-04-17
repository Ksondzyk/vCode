let message = "Just learn it!";
let sender = "Gromcode";
export default function createMessenger() {
  function sendMessage(name) {
    console.log(`${name}, ${message} Your ${sender}`);
  }

  function setMessage(text) {
    message = text.bold();
    sendMessage("Bob");
  }
  function setSender(text) {
    sender = text.bold();
  }

  var obj = {
    sendMessage: sendMessage,
    setMessage: setMessage,
    setSender: setSender,
  };
  return obj;
}

// const massager1 = createMessenger();

// massager1.sendMessage("Bob");

// const massager2 = createMessenger();
// massager2.setMessage("Good job!");

// const massager3 = createMessenger();
// massager3.setSender("Gromcode");
// massager3.setMessage("Good job!");
// massager3.sendMessage("Bob");
