let arr = [];
export function createLogger() {
  let memory = {};
  function warn(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "warning";
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
    if (string === "undefined") {
      return arr.sort((a, b) => a.dateTime - b.dateTime);
    } else if (typeof arr.type === "string") {
      return [];
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

// const logger1 = createLogger();
// logger1.warn("hello Warn");

// const logger2 = createLogger();
// logger2.error("hello Error");

// const logger3 = createLogger();
// logger3.log("hello Log");

// const logger4 = createLogger();
// logger4.getRecords("warn");

// const logger5 = createLogger();
// logger5.getRecords();

// const logger6 = createLogger();
// logger6.getRecords("red");
