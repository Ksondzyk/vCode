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
  age: 12,
  stopMachine() {
    console.log(`${this.name} lifting anchor down`);
    this.stop();
  },
};
Object.setPrototypeOf(ship, vehicle);

// console.log(typeof ship.stopMachine());
// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

export function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    if (obj[prop] instanceof Function) {
      continue;
    }
    if (ship.hasOwnProperty(prop)) {
      arr.push(prop);
    }
  }
  return arr;
}
console.log(getOwnProps(ship));

// function getOwnProps(obj) {
//   const arr = [];
//   for (let prop in obj) {
//     if (ship.hasOwnProperty(obj[prop])) {
//       arr.push(prop);
//     }
//   }
//   return arr;
// }
// console.log(getOwnProps(ship));
