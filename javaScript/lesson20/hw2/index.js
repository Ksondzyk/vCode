export class User {
  id = "";
  name = "";
  sessionId = "";
  constructor(id, name, sessionId) {
    this.id = id;
    this.name = name;
    this.sessionId = sessionId;
  }
  get id() {
    return this.id;
  }
  get name() {
    return this.name;
  }
  get sessionId() {
    return this.sessionId;
  }
}

export class UserRepository {
  users = [{}];
  constructor(users) {
    this.users = users;
    for (let i = 0; i < users.length; i++) {
      Object.freeze(users[i]);
    }
  }
  get users() {
    return this.users;
  }
  getUserNames() {
    return this.users.map((user) => user.name);
  }
  getUserIds() {
    return this.users.map((user) => user.id);
  }
  getUserNameById(id) {
    return this.users.find((user) => id === user.id).name;
  }
}
const user1 = new User(12, "roman", 12);
user1.id = 30;
// console.log(user1.id);
