"use strict";

class Vehicle {
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

class Ship extends Vehicle {
  constructor(name, speed) {
    super(name, false);
    this.speed = speed;
  }
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  }

  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  }
}

const ship1 = new Ship("Aurora", 17);
stopMachine.startMachine();
console.log(ship1);
