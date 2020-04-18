// let arr = [];
export function createLogger() {
  let arr = [];
  let memory = {};
  function warn(str) {
    memory.message = str;
    memory.dateTime = new Date(2012, 10, 22, 23, 0, 1);
    memory.type = "warn";
    arr.push(memory);
  }
  function error(str) {
    memory.message = str;
    memory.dateTime = new Date(2012, 10, 22, 23, 0, 3);
    memory.type = "error";
    arr.push(memory);
  }
  function log(str) {
    memory.message = str;
    memory.dateTime = new Date(2012, 10, 22, 23, 0, 4);
    memory.type = "log";
    arr.push(memory);
  }
  function getRecords(string) {
    if (string === "warn" || string === "error" || string === "log") {
      arr.filter((el) => el === string);
    } else if (string === undefined) {
      //   let arrSort = arr.sort((a, b) => {
      //     if (a.dateTime > b.dateTime) {
      //       return 1;
      //     }
      //     if (a.dateTime < b.dateTime) {
      //       return -1;
      //     }
      //   });
      //   console.log(arrSort);
      return arrSort.map((el) => el.message);
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

// const logger1 = createLogger();
// logger1.warn("Warn");

// const logger2 = createLogger();
// logger2.error("Erro");

// const logger3 = createLogger();
// logger3.log("Logg");

// const logger4 = createLogger();
// logger4.getRecords();

// // const logger5 = createLogger();
// // logger5.getRecords("warn");
// const logger6 = createLogger();
// logger6.getRecords("1213");
