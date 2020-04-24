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

// console.log(typeof ship.stopMachine());
// for (let prop in ship) {
//   if (ship.hasOwnProperty(prop)) {
//     console.log(prop);
//   }
// }

export function getOwnProps(obj) {
  const arr = [];
  for (let prop in obj) {
    if (ship instanceof !Function) {
      arr.push(rop);
    }
  }
  return arr;
}

console.log(getOwnProps(ship));
// console.log(Object.keys(ship));
