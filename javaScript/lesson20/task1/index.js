"use Strict";
// export class User {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   sayHi() {
//     console.log(`Hi, I am ${this.name}`);
//   }
//   requestNewPhoto() {
//     console.log(`New photo request was sent for ${this.name}`);
//   }
//   setAge(value) {
//     if (value < 0) {
//       return false;
//     }
//     this.age = value;
//     if (age >= 25) {
//       this.requestNewPhoto();
//     }
//     return value;
//   }
// }

// const user1 = new User("Tom", 25);
// user1.setAge(25);
// console.log(user1);

class User {
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
  setAge(age) {
    this.age = age;
    if (age < 0) {
      return false;
    } else if (age >= 25) {
      this.requestNewPhoto();
      return age;
    } else if (age >= 0) {
      return age;
    }
  }

  static createEmpty() {
    // console.log(new User("", null));
    return new User("", null);
  }
}
const user1 = new User("John", 25);
user1.setAge(25);
User.createEmpty();
