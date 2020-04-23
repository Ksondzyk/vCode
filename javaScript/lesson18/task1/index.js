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
    { name: "Tom", age: 17, email: "a@gmail.com" },
    { name: "John", age: 18, email: "a@gmail.com" },
  ],
  message: "Welcome to the party!",
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        message: `Dear ${name}! ${this.message}`,
        email,
      }));
  },
};

console.log(event.getInvitations());
