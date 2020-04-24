export default {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
    return `${this.firstName} ${this.lastName}`;
  },
};
// user.fullName = "John Doe";
// console.log(user.fullName);
