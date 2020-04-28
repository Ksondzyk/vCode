export class User {
  _id = "";
  _name = "";
  _sessionId = "";
  constructor(id, name, sessionId) {
    this_id = id;
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
  _users = [{}];
  constructor(users) {
    this.users = users;
    for (let i = 0; i < users.length; i++) {
      Object.freeze(users[i]);
    }
  }
  get users() {
    return this._users;
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
// const user1 = new User(12, "roman", 12);
