export const addImageV2 = (src) => {
  return new Promise((resolve, reject) => {
    return addImage;
  });
};

export const addImage = (url, callback) => {
  const img = document.createElement("img");
  img.setAttribute("alt", "User avatar");
  img.src = url;

  const pageElem = document.querySelector(".page");
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback(null, { width, height });
    return img;
  };

  const onImageLoadError = () => callback("Image load failed");

  img.addEventListener("load", onImageLoaded);

  img.addEventListener("error", onImageLoadError);
};
const imgSrc =
  "https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/task2/sprites.png";

const res = addImageV2(imgSrc);

// res.then((onImageLoaded) => {
//   console.log(onImageLoaded);
// });
