"use strict";

export class Vehicle {
  constructor(name, hasWheels) {
    (this.hasWheels = hasWheels), (this.name = name);
  }
  move() {
    console.log(`${this.name} is moving`);
  }
  stop() {
    console.log(`${this.name} stopped`);
  }
}

export class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }
  move() {
    console.log(`${this.name} lifting anchor up`);
    super.move();
  }

  stop() {
    console.log(`${this.name} lifting anchor down`);
    super.stop();
  }
}

const ship1 = new Ship("Aurora", 17);
ship1.stop();
// console.log(ship1);
