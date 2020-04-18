export function createLogger() {
  let memory = [{ message: "", dateTime: "", type: "" }];
  function warn(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "warn";
  }
  function error(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "error";
  }
  function log(str) {
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "log";
  }
  return [
    {
      warn,
      error,
      log,
    },
  ];
}

// const logger1 = createLogger();
// logger1.warn("hello Warn");

// const logger2 = createLogger();
// logger2.error("hello Error");

// const logger3 = createLogger();
// logger3.log("hello Log");
