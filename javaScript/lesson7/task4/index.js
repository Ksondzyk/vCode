// ["Ann", "Tom", "Bob", "Kate"];
// ["Tom", "Bob"] => ["Good job, Ann","Good job, Kate"]

const getMessagesForBestStudents = (allStudents, faliedStudents) => {
  const passedStudents = allStudents.filter(
    (name) => !faliedStudents.includes(name)
  );
  const massages = passedStudents.map((name) => "Good job, " + name);
  return massages;
};

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const faliedStudents = ["Tom", "Bob"];

console.log(getMessagesForBestStudents(allStudents, faliedStudents));
