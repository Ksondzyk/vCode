export default user = {
  firstName: "John",
  lastName: "Doe",
  get Getter() {
    return `${this.firstName} ${this.lastName}`;
  },
  set Setter(value) {
    const [firstName, lastName] = value.split(" ");
    this.Setter = firstName;
    this.Setter = lastName;
    return `${this.firstName} ${this.lastName}`;
  },
};
user.fullName = "John Doe";
console.log(user.fullName);
