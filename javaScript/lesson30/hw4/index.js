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
