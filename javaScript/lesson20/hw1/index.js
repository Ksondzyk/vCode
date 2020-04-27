export class Order {
  _id = Math.random();
  _price = 0;
  _dateCreated = new Date();
  _isConfirmed = false;
  _dateConfirmed = new Date();
  _city = "";
  _type = "";
  constructor(price, city, type) {
    this._price = price;
    this._city = city.toString();
    this._type = type.toString();
  }
  checkPrice() {
    if (this._price >= 1000) {
      return true;
    }
    return false;
  }
  confirmOrder() {
    if (this._isConfirmed === false) {
      this._isConfirmed === true;
      this._dateConfirmed = new Date();
    }
  }
  isValidType() {
    if (this._type === "Buy" || this._type === "Sell") {
      return true;
    }
    return false;
  }
}

const order1 = new Order(1100, "Pekin", "Buy");
console.log(order1.checkPrice());
order1.confirmOrder();
console.log(order1._dateConfirmed);
console.log(order1._isConfirmed);

console.log(order1.isValidType());
