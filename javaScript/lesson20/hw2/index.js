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
  arrUser = [];
  constructor(users) {
    this.users = users;
    for (let i = 0; i < users.length; i++) {
      Object.freeze(users[i]);
    }
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
