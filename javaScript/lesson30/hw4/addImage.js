export const addImageV2 = (imageSrc) => {
  const elemPage = document.querySelector(".page");
  elemPage.setAttribute("src", imageSrc);
  return new Promise((resolve, reject) => {
    return addImage(imageSrc, function (error, src) {
      if (error) return reject(error);
      if (src) return resolve(src);
    });
  });

  // // .then((onImageLoaded) => onImageLoaded.onImageLoaded())
  // .then((img) => console.log(img))
};
function func(obj) {
  console.log(obj);
}
export const addImage = (url, callback) => {
  const img = document.createElement("img");
  img.setAttribute("alt", "User avatar");
  img.src = url;

  const pageElem = document.querySelector(".page");
  pageElem.append(img);

  const onImageLoaded = () => {
    const { width, height } = img;
    callback(null, { width, height });
    // return img;
  };

  const onImageLoadError = () => callback("Image load failed");

  img.addEventListener("load", onImageLoaded);

  img.addEventListener("error", onImageLoadError);
};
const imgSrc =
  "https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/task2/sprites.png";

addImageV2(imgSrc).then((size) => console.log(size));
