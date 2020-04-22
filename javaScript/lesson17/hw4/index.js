export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(str) {
    this.firstName = str.split(" ")[0];
    this.lastName = str.split(" ")[1];
  },
};

user.setFullName("John Doe");
