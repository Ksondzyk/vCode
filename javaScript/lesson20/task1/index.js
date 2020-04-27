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
  static createEmpty(name, age) {
    this.age = age;
    this.name = name;
    const user1 = new User(this.name, this.age);
    return user1;
  }
}
const user1 = new User("Tom", 25);
user1.setAge("", "");
