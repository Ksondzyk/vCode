import { createLogger } from "./index";

const logger1 = createLogger();
logger1.warn("hello Warn");

const logger2 = createLogger();
logger2.error("hello Error");

const logger3 = createLogger();
logger3.log("hello Log");

const logger4 = createLogger();
logger4.getRecords("warn");
