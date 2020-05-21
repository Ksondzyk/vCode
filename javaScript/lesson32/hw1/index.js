/*
 * ф-ция makePromise должна вернуть промис со значением переданным в ф-цию
 */
const makePromise = (number) => new Promise((resolve) => resolve(number));
/* ...code here */

/*
 * пример использования
 */
makePromise(17).then((number) => {
  console.log(number); // 17
});
