//input
//output obj in metods

const shmoment = (objDate) => {
  let result = new Date(objDate);
  const calculate = {
    add(data, value) {
      switch (data) {
        case "months":
          result.setMinutes(value + result.getMonth());
          break;
        case "days":
          result.setMinutes(value + result.getDay());
          break;
        case "hours":
          result.setMinutes(value + result.getHours());
          break;
        case "minutes":
          result.setMinutes(value + result.getMinutes());
          break;
        case "seconds":
          result.setMinutes(value + result.getSeconds());
          break;
        case "miliseconds":
          result.setMinutes(value + result.getMilliseconds());
          break;
      }
      return this;
    },
    subtract(data, value) {
      switch (data) {
        case "months":
          result.setMinutes(result.getMonth() - value);
          break;
        case "days":
          result.setMinutes(result.getDay() - value);
          break;
        case "hours":
          result.setMinutes(result.getHours() - value);
          break;
        case "minutes":
          result.setMinutes(result.getMinutes() - value);
          break;
        case "seconds":
          result.setMinutes(result.getSeconds() - value);
          break;
        case "miliseconds":
          result.setMinutes(result.getMilliseconds() - value);
          break;
      }
      return this;
    },
    result() {
      return result;
    },
  };
  return calculate;
};
const result = shmoment(new Date(2020, 0, 7, 17, 17, 17))
  .add("minutes", 2)
  .add("days", 8)
  .subtract("years", 1)
  .result(); // ... Jan 15 2019 17:19:17 ...

console.log(result);
