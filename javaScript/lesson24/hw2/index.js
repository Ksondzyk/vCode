// input arr[obj]
// output {obj}

// 1 узнаь месяц рождения студента и имя
//  детстуртурировать масив обьенктов длостать имя и год родения
//  год рождения привести в строку
// 2 вернуть месяц  и имя студета

// export const studentsBirthDays = (students) => {
//   const month = [
//     "Jan",
//     "Feb",
//     "Mar",
//     "Apr",
//     "May",
//     "Jun",
//     "Jul",
//     "Aug",
//     "Sep",
//     "Oct",
//     "Nov",
//     "Dec",
//   ];

//   const studentsBirthDays = students.map(({ name, birthDate }) => ({
//     name,
//     birthDate: new Date(birthDate).getMonth(),
//   }));
//   const sortStudentsBirthDays = studentsBirthDays.slice().sort((a, b) => {
//     return a.birthDate - b.birthDate;
//   });
//   const groupStudentsBirthDays = sortStudentsBirthDays.reduce(
//     (r, { name, birthDate }) => {
//       r[month[new Date(birthDate).getMonth()]] = [
//         ...(r[birthDate] || []),
//         name,
//       ];
//       return r;
//     },
//     {}
//   );
//   return groupStudentsBirthDays;
// };

// console.log(
//   studentsBirthDays([
//     { name: "Tom", birthDate: "01/15/2010" },
//     { name: "Ben", birthDate: "02/17/2008" },
//     { name: "Vasil", birthDate: "12/15/2010" },
//     { name: "Roman", birthDate: "08/15/2010" },
//   ])
// );

export const studentsBirthDays = (students) => {
  const month = {
    0: "Jan",
    1: "Feb",
    2: "Mar",
    3: "Apr",
    4: "May",
    5: "Jun",
    6: "Jul",
    7: "Aug",
    8: "Sep",
    9: "Oct",
    10: "Nov",
    11: "Dec",
  };

  const studentsNumberOfDay = students.map(({ name, birthDate }) => ({
    name,
    birthDate: new Date(birthDate).getMonth(),
  }));
  const sortedStudents = studentsNumberOfDay.sort((a, b) => {
    return a.birthDate - b.birthDate;
  });
  for (let i = 0; i < sortedStudents.length; i++) {
    sortedStudents[i].birthDate = month[sortedStudents[i].birthDate];
  }
  return sortedStudents.reduce((r, { name, birthDate }) => {
    r[birthDate] = [...(r[birthDate] || []), name];
    return r;
  }, {});
};

console.log(
  studentsBirthDays([
    { name: "Tom", birthDate: "01/15/2010" },
    { name: "Ben", birthDate: "02/17/2008" },
    { name: "Ocsana", birthDate: "02/17/2008" },
    { name: "Vasil", birthDate: "12/15/2010" },
    { name: "Roman", birthDate: "08/15/2010" },
  ])
);
