export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName() {},
};

user.setFullName("John Doe");
