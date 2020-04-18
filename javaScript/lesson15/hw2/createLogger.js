import { createLogger } from "./index";

const logger1 = createLogger();
logger1.warn("hello Warn");

const logger2 = createLogger();
logger2.error("hello Error");

const logger3 = createLogger();
logger3.log("hello Log");

// const logger4 = createLogger();
// logger4.getRecords("warn");

// const logger5 = createLogger();
// logger5.getRecords();

const logger6 = createLogger();
logger6.getRecords("red");
