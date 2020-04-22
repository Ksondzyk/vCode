export const user = { firstName: "John", lastName: "Doe" };

user.getFullName = function () {
  console.log(`${this.firstName} ${this.lastName}`);
};
user.getFullName();
