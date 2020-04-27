export class Order {
  _id = "";
  _price = 0;
  _dateCreated = new Date();
  _isConfirmed;
  _dateConfirmed = "";
  _city = "";
  _type = "";
  constructor(price, city, type) {
    this._isConfirmed = false;
    this._price = price;
    this._city = city.toString();
    this._type = type.toString();
    this._id = Math.random().toString();
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
order1.isValidType();
console.log(order1.isValidType());
