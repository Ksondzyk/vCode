"use strict";
export class Order {
  id = "";
  price = 0;
  dateCreated = new Date();
  isConfirmed;
  dateConfirmed = "";
  city = "";
  type = "";
  constructor(price, city, type) {
    this.isConfirmed = false;
    this.price = price;
    this.city = city.toString();
    this.type = type.toString();
  }
  checkPrice() {
    if (this.price >= 1000) {
      return true;
    }
    return false;
  }
  confirmOrder() {
    if (this.isConfirmed === false) {
      this.isConfirmed === true;
      this.dateConfirmed = new Date();
      this.id = Math.random().toString();
    }
  }
  isValidType() {
    if (this.type === "Buy" || this.type === "Sell") {
      return true;
    }
    return false;
  }
}

const order1 = new Order(1100, "Pekin", "Buy");
// console.log(order1.checkPrice());
order1.checkPrice();
order1.confirmOrder();
// console.log(order1._dateConfirmed);
// console.log(order1._isConfirmed);
order1.isValidType();
// console.log(order1.isValidType());
