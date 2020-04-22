export const user = {
  firstName: "John",
  lastName: "Doe",
  getFullName: function () {
    console.log(`${this.firstName} ${this.lastName}`);
  },
};

user.getFullName();
