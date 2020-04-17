import createMessenger from "./index";

const massager1 = createMessenger();

massager1.sendMessage("Bob");

const massager2 = createMessenger();
massager2.setMessage("Good job!");

// const massager1 = createMessenger();

// massager1.sendMessage("Bob");

// const massager2 = createMessenger();
// massager2.setMessage("Good job!");

// const massager3 = createMessenger();
// massager3.setSender("Gromcode");
// massager3.setMessage("Good job!");
// massager3.sendMessage("Bob");
