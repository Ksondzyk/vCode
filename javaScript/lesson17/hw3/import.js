import { sayName, greeting, getPopulation, transaction } from "./index";

const sayStudentName = sayName.bind(student);
sayStudentName();
const sayBruceName = sayName.bind({ name: "Bruce" });
sayBruceName();

const specialGreeting = greeting.bind(company, "Bob", "Marley");
specialGreeting();

const getUkrainePopulation = getPopulation.bind(country, 43000);
getUkrainePopulation();

const printSpecialTransaction = transaction.printTransaction.bind(
  anotherTransaction
);
printSpecialTransaction();
