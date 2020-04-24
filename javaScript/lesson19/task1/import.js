import { vehicle, ship } from "./index";

Object.setPrototypeOf(ship, vehicle);

ship.move();
