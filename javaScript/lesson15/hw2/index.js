// let arr = [];
export function createLogger() {
  let arr = [];
  function warn(str) {
    let memory = {};
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "warn";
    arr.push(memory);
  }
  function error(str) {
    let memory = {};
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "error";
    arr.push(memory);
  }
  function log(str) {
    let memory = {};
    memory.message = str;
    memory.dateTime = new Date();
    memory.type = "log";
    arr.push(memory);
  }
  function getRecords(type) {
    if (arr.length === 0) {
      return [];
    }
    if (type === "warn" || type === "error" || type === "log") {
      // let arrSort = arr.slice().sort((a, b) => {
      //   return a.dateTime - b.dateTime;
      // });
      let arrSort = arr.slice().sort((a, b) => {
        if (a.dateTime > b.dateTime) {
          return -1;
        }
        if (a.dateTime < b.dateTime) {
          return 1;
        }
      });
      return arrSort;
    } else if (type === undefined) {
      let arrSort = arr.sort((a, b) => {
        if (a.dateTime > b.dateTime) {
          return -1;
        }
        if (a.dateTime < b.dateTime) {
          return 1;
        }
      });

      return arrSort;
    }
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
}

const logger1 = createLogger();
logger1.warn("Warn");

const logger2 = createLogger();
logger2.error("Erro");

const logger3 = createLogger();
logger3.log("Logg");

const logger4 = createLogger();
logger4.getRecords("warn");

// const logger5 = createLogger();
// logger5.getRecords("warn");

// const logger6 = createLogger();
// logger6.getRecords("1213");
