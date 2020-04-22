import { defer } from "./index";

const defferedSayHi = defer(sum, 1000);

defferedSayHi(1, 4);
