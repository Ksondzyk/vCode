import { addImage } from "./index.js";

export const addImageV2 = (imageSrc) => {
  const elemPage = document.querySelector(".page");
  elemPage.setAttribute("src", imageSrc);
  return new Promise((resolve, reject) => {
    return addImage(imageSrc, function (error, src) {
      if (error) return reject(error);
      if (src) return resolve(src);
    });
  });
};

const imgSrc =
  "https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/task2/sprites.png";

addImageV2(imgSrc).then((size) => console.log(size));
