import { createLogger } from "./index";

const logger1 = createLogger();
logger1.warn("Warn");

const logger2 = createLogger();
logger2.error("Erro");

const logger3 = createLogger();
logger3.log("Logg");

const logger4 = createLogger();
logger4.getRecords("warn");

const logger5 = createLogger();
logger5.getRecords();

const logger6 = createLogger();
logger6.getRecords("red");
