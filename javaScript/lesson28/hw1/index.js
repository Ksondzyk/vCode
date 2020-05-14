//input
//output obj in metods

export const shmoment = (objDate) => {
  let result = new Date(objDate);
  const calculate = {
    add(data, value) {
      switch (data) {
        case "years":
          result.setFullYear(value + result.getFullYear());
          break;
        case "months":
          result.setMonth(value + result.getMonth());
          break;
        case "days":
          result.setDate(value + result.getDate());
          break;
        case "hours":
          result.setHours(value + result.getHours());
          break;
        case "minutes":
          result.setMinutes(value + result.getMinutes());
          break;
        case "seconds":
          result.setSeconds(value + result.getSeconds());
          break;
        case "miliseconds":
          result.setTime(value + result.getTime());
          break;
      }
      return this;
    },
    subtract(data, value) {
      switch (data) {
        case "years":
          result.setFullYear(result.getFullYear() - value);
          break;
        case "months":
          result = new Date(result.setMinutes(result.getMonth() - value));
          break;
        case "days":
          result.setDate(result.getDate() - value);
          break;
        case "hours":
          result.setHours(result.getHours() - value);
          break;
        case "minutes":
          result.setMinutes(result.getMinutes() - value);
          break;
        case "seconds":
          result.setSeconds(result.getSeconds() - value);
          break;
        case "miliseconds":
          result.setTime(result.getTime() - value);
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
const result = shmoment(new Date(2020, 0, 7, 17, 17, 17, 12))
  .add("minutes", 2)
  .add("days", 8)
  .add("miliseconds", 12)
  .subtract("years", 1)
  .result(); // ... Jan 15 2019 17:19:17 ...

console.log(result);
