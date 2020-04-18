let memory = {};
export function createLogger() {
  //   let memory = [{}];
  function warn(str) {
    {
      memory.message = str;
      memory.dateTime = new Date();
      memory.type = "warn";
    }
  }
  function error(str) {
    {
      memory.message = str;
      memory.dateTime = new Date();
      memory.type = "error";
    }
  }
  function log(str) {
    {
      memory.message = str;
      memory.dateTime = new Date();
      memory.type = "log";
    }
  }
  function getRecords(string) {
    if (memory.type === string) {
      return memory.type;
    } else if (string === "undefined") {
      return memory.sort((a, b) => a.dateTime - b.dateTime);
    } else if (typeof memory.type === "string") {
      return [];
    }
  }

  return [
    {
      warn,
      error,
      log,
      getRecords,
    },
  ];
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
