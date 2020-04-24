// "use strict";
const vehicle = {
  isMoving: false,
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};
// vehicle.move();

// console.log(vehicle.move());

const ship = {
  name: "Argo",
  hasWheels: false,
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};
Object.setPrototypeOf(ship, vehicle);

// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

export function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    if (ship.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
}

console.log(getOwnProps(ship));
// console.log(Object.keys(ship));
