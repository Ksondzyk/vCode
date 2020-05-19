export const addImage = (imgSrc) => {
  const p = new Promise((resolve, reject) => {
    const imgElem = document.createElement("img");
    imgElem.setAttribute("alt", "My photo");
    imgElem.src = imgSrc;
    const containerElement = document.querySelector(".page");
    containerElement.append(imgElem);

    const onImageLoaded = () => {
      const { width, height } = imgElem;
      resolve({ width, height });
    };

    imgElem.addEventListener("load", onImageLoaded);
    imgElem.addEventListener("error", () =>
      reject(new Error("Image load failed"))
    );
  });
  return p;
};
const imgSrc =
  "https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/task2/sprites.png";

const result = addImage(imgSrc);
console.log(result);

// export const addImage = (imgSrc, callback) => {
//   const imgElem = document.createElement("img");
//   imgElem.setAttribute("alt", "My photo");
//   imgElem.src = imgSrc;
//   const containerElement = document.querySelector(".page");
//   containerElement.append(imgElem);

//   const onImageLoaded = () => {
//     const { width, height } = imgElem;
//     callback(null, { width, height });
//   };

//   imgElem.addEventListener("load", onImageLoaded);
//   imgElem.addEventListener("error", () => callback("Image load failed"));
// };

// const imgSrc =
//   "https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/task2/sprites.png";

// const onImageLoaded = (error, data) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = data;
//   const sizeElem = document.querySelector(".image-size");
//   sizeElem.textContent = `${width} x ${height}`;
// };
// addImage(imgSrc, onImageLoaded);
