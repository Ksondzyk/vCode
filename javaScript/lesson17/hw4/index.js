export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  setFullName(fullName) {
    fullName: fullName;
    console.log(fullName);
  },
};

user.setFullName("John Doe");
