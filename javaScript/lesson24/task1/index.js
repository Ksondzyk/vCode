//input date, days
//output string

// узнать какой день по порядку в дате
// новой дате прибавил старое колисчество дней + новое
// const weekDay = ["Sun", "Mon", "Tue", "Wed", "Fri", "Set"];

export const dayOfWeek = (date, days) => {
  const weekDay = ["Sun", "Mon", "Tue", "Wed", "Fri", "Set"];
  const day = new Date(date).getDate();
  const dateInFuture = new Date(date).setDate(day + days);
  return weekDay[new Date(dateInFuture).getDay()];
};
// const result = dayOfWeek(new Date(2020, 0, 1), 14);

// console.log(result);
