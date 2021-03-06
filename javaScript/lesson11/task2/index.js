const contacts = [
  { name: "Tom", phoneNumber: "666-66-66" },
  { name: "John", phoneNumber: "555-55-55" },
  { name: "Ann", phoneNumber: "333-33-33" },
  { name: "Stephan", phoneNumber: "444-44-44" },
  { name: "Suzy", phoneNumber: "222-22-22" },
  { name: "Adel", phoneNumber: "111-11-11" },
];
const sortContacts = (contacts, isAsc) => {
  if (!Array.isArray(contacts)) {
    return null;
  }
  let result;
  result = contacts.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });
  if (isAsc === true) {
    result = contacts.sort((a, b) => {
      return a.name.localeCompare(b.name);
    });
    return result;
  }
  if (isAsc === false) {
    result = contacts.sort((a, b) => {
      return b.name.localeCompare(a.name);
    });
    return result;
  }
  return result;
};
console.log(sortContacts(contacts, true));
