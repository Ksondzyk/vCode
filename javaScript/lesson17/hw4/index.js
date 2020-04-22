export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName() {},
};

user.getFullName = user.setFullName("John Doe");
