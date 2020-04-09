const obj1 = {
  name: "Tom",
  age: 17,
};
const obj2 = {
  name: "Bob",
  age: 17,
};
const obj3 = {
  name: "Bob",
  age: 17,
  student: false,
};
const obj4 = {
  name: "Tom",
  age: 17,
};
const compareObjects = (obj1, obj2) => {
  return obj1 === obj2;
};
const result = compareObjects(obj1, obj2);
console.log(result);

const compareObjects1 = (obj2, obj3) => {
  return obj2 === obj3;
};
const result1 = compareObjects1(obj2, obj3);
console.log(result1);
// @Roman Ksondzyk попробуй по этому алгоритму
// 1. Создать ф-цию compareObjects
// 2. Сравнить к-во ключей в объектах
// 3. Если к-во ключей разное, то объекты разные, вернуть false
// 4. Если к-во ключей одинаковое, то пройтись по всем ключам первого объекта и сравнить значение свойств двух объектов по каждому ключу
// 5. Если для всех ключей значения свойств равны, то и объекты равны

const compareObjects3 = (obj1, obj4) => {
  const arr1 = Object.keys(obj1);
  for (const key of arr1) {
    if (obj1[key] !== obj4[key]) {
      return false;
    }
    return true;
  }
  return false;
};

const result4 = compareObjects3(obj1, obj4);
console.log(result4);
