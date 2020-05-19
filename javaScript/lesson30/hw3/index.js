/*
 * failedPromise должен зареджектить ошибку new Error('Oops, error!');
 * Ответьте себе на вопрос, какой тип данных имеет переменная userDataPromise
 */

const failedPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("Oops, error!"));
  }, 2000);
  /* ...code here */
});

/*
 * выведите в консоль ошибку в ф-ции onError
 */

failedPromise.catch(function onError(error) {
  /* ...code here */
  return console.log(error);
});
