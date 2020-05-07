// input arr[obj]
// output {obj}

// 1 узнаь месяц рождения студента и имя
//  детстуртурировать масив обьенктов длостать имя и год родения
//  год рождения привести в строку
// 2 вернуть месяц  и имя студета

export const studentsBirthDays = (students) => {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return students
    .map(({ name, birthDate }) => ({
      name,
      birthDate: month[new Date(birthDate).getMonth()],
    }))
    .reduce((r, { name, birthDate }) => {
      r[birthDate] = [...(r[birthDate] || []), name];
      return r;
    }, {});
};

studentsBirthDays([
  { name: "Tom", birthDate: "01/15/2010" },
  { name: "Ben", birthDate: "01/17/2008" },
  { name: "Sam", birthDate: "03/15/2010" },
]);
