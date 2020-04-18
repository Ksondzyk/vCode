import { createCalculator } from "./index";

const calculate1 = createCalculator();
calculate1.add(8);
const calculate2 = createCalculator();
calculate2.decrease(4);
const calculate3 = createCalculator();
calculate3.reset();
const calculate4 = createCalculator();
calculate4.getMemo();
