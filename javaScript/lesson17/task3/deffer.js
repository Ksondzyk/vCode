import { defer } from "./index";

// const defferedSayHi = defer(sum, 1000);

// defferedSayHi(1, 4);

const defferedHi = defer(user.sayHi, 1000);

defferedHi.call({ name: "Bob" });
