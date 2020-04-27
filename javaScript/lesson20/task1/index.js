export class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }
  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }
  setAge(value) {
    if (value < 0) {
      return false;
    }
    this.age = value;
    if (age >= 25) {
      this.requestNewPhoto();
    }
    return value;
  }
}

// const user1 = new User("Tom", 25);
// user1.setAge(25);
// console.log(user1);

// user1.sayHi();
// user2.requestNewPhoto();
// user3.setAge(12);
// user4.setAge(25);
