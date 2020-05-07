// const formater = new Intl.DateTimeFormat("en", {
//   timeZone: "UTC",
//   hour: "2-digit",
//   minute: "2-digit",
//   hour12: false,
// });

// const getGreenwichTime = (date) => formater.format(date);

// console.log(getGreenwichTime(new Date()));

// Date.UTC(2019, 0, 1, 13, 30);

//input dataOne ,dataOne
//output  string
// 1 передать две даты
// 2 перевести даты в милисекунды
// 3 отнять 2 дату от 1 и получить разницу в милисекундах
// 4 перевести милисекунды в дни минуты секунды

// export const getDiff = (startDate, endDate) => {
//   const dateStart = new Date(startDate).getTime();
//   const dateAnd = new Date(endDate).getTime();
//   console.log(dateStart, dateAnd);
//   const times = dateStart - dateAnd;
//   console.log(dateStart, dateAnd, times);
//   return (
//     new Date(times).getDay(times) +
//     "d " +
//     new Date(times).getHours() +
//     "h " +
//     new Date(times).getMinutes() +
//     "m " +
//     new Date(times).getSeconds() +
//     "s"
//   );
//   const oneDay = 24 * 60 * 60 * 1000;
//   const days = Math.round(Math.abs((dateStart - dateAnd) / oneDay));
//   const hours = Math.floor(times / (1000 * 60 * 60));
//   const minutes = Math.floor(times / (1000 * 60 * 60 * 60));

//   const seconds = Math.floor(Math.abs((dateStart - dateAnd) / oneDay));
//   console.log(days, hours, minutes);
//   console.log(res);
// };
// const result = getDiff(
//   new Date(2019, 5, 13, 3, 24, 0),
//   new Date(2019, 11, 17, 12, 12, 0)
// );
// console.log(result);
// //

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
export const getDiff = (startDate, finishDate) => {
  const difference = Math.abs(finishDate - startDate);
  const daysLeft = Math.floor(difference / DAY);
  const hoursLeft = Math.floor((difference % DAY) / HOUR);
  const minutesLeft = Math.floor((difference % HOUR) / MINUTE);
  const secondsLeft = Math.floor((difference % MINUTE) / SECOND);
  return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
};

const result = getDiff(
  new Date(2019, 5, 13, 3, 24, 0),
  new Date(2019, 11, 17, 12, 12, 0)
);
console.log(result);
