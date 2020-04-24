export function User(name, age) {
  this.name = name;
  this.age = age;
}
User.prototype.sayHi = function () {
  console.log(`Hi, I am  ${this.name}`);
};
User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};
User.prototype.setAge = function () {
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  } else if (this.age < 0) {
    return false;
  } else if (this.age > 0) {
    return this.age;
  }
};

// // const user1 = new User("John", 25);
// // const user2 = new User("John", 18);
// // const user3 = new User("John", 25);
// const user4 = new User("John", -1);

// // user1.sayHi();
// // user2.requestNewPhoto();
// console.log(user4.setAge());
