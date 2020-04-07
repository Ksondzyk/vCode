// ["Ann", "Tom", "Bob", "Kate"];
// ["Tom", "Bob"] => ["Good job, Ann","Good job, Kate"]

const getMessagesForBestStudents = (allStudents, faliedStudents) =>
  allStudents
    .filter((name) => !faliedStudents.includes(name))
    .map((name) => "Good job, " + name);

const allStudents = ["Ann", "Tom", "Bob", "Kate"];
const faliedStudents = ["Tom", "Bob"];

console.log(getMessagesForBestStudents(allStudents, faliedStudents));
