"use strict";

// const user = {
//   name: "Tom",
//   sayHi() {
//     console.log(this);
//   },
// };

// // user.sayHi();

// setTimeout(() => user.sayHi(), 100);

export const event = {
  guests: [
    { name: "Tom", email: "a@gmail.com", age: 17 },
    { name: "Bob", email: "a@gmail.com", age: 18 },
  ],
  message: "Welcome to the party!",
  getInvintations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        text: `Hi ${name}.${this.message}`,
        email,
      }));
  },
};

console.log(event.getInvintations());
