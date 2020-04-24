export const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.fullName = firstName;
    this.fullName = lastName;
    return `${this.firstName} ${this.lastName}`;
  },
};
// user.fullName = "John Doe";
// console.log(user.fullName);
