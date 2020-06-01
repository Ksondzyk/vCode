// fetch("https://example.com");

// const successRequest = Promise.resolve({ name: "Tom" });

// successRequest
//   .then((data) => {
//     console.log(data);
//     throw new Error("Expected error");
//   })
//   .catch((error) => {
//     console.warn(error.message);
//   });

// const falliedRequest = Promise.reject(new Error("Fail"));

// falliedRequest
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.warn(err);
//     throw err;
//   })
//   .then((data) => {
//     console.log(data);
//   });

// window.addEventListener("unhandledrejection", function (e) {
//   console.log(e.reason.message);
// });

const successRequest = Promise.resolve({ name: "Tom" });

successRequest
  .then(function onSuccess1(data) {
    throw new Error("Error with data");
  })
  .catch(function onError1(error) {
    console.error("onError1", error.message);
  });

const failRequest = Promise.reject(new Error("Something went wrong"));

failRequest
  .catch(function onError2(error) {
    console.error("onError2", error.message);
    throw new Error("Server error");
  })
  .then(function onSuccess2(data) {
    console.log("onSuccess2", data);
  })
  .catch(function onError3(error) {
    console.error("onError3", error.message);
  });
