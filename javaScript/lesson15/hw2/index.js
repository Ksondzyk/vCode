// let arr = [];
export function createLogger() {
  let arr = [];
  let memory = {};
  function warn(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "warn";
    arr.push(memory);
  }
  function error(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "error";
    arr.push(memory);
  }
  function log(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "log";
    arr.push(memory);
  }
  function getRecords(string) {
    if (string === "warn" || string === "error" || string === "log") {
      console.log(arr.filter((el) => el.type === string));
      arr.filter((el) => el === string);
    } else if (string === undefined) {
      const arrSort = arr.sort((a, b) => b.dateTime - a.dateTime);
      console.log(arrSort);
    } else if (typeof string == "string") {
      return [];
    }
    return arr;
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();
logger1.warn("hello Warn");

const logger2 = createLogger();
logger2.error("hello Error");
const logger3 = createLogger();
logger3.log("hello Log");

// const logger3 = createLogger();
// logger3.log("hello Log");

// const logger4 = createLogger();
// logger4.getRecords("warn");

// const logger5 = createLogger();
// logger5.getRecords("warn");
const logger6 = createLogger();
logger6.getRecords("1213");
