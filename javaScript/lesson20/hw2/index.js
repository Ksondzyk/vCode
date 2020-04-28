export class User {
  _id = "";
  _name = "";
  _sessionId = "";
  constructor(id, name, sessionId) {
    this._id = id;
    this._name = name;
    this._sessionId = sessionId;
  }
  get id() {
    return this._id;
  }
  get name() {
    return this._name;
  }
  get sessionId() {
    return this._sessionId;
  }
}

export class UserRepository {
  constructor(users) {
    this._users = users;
    for (let i = 0; i < users; i++) {
      Object.freeze(users[i]);
    }
  }
  // get users() {
  //   return this._users;
  // }
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
// const user1 = new User(12, "roman", 12);

// const user2 = new UserRepository(user1);
// console.log(user2._users);
