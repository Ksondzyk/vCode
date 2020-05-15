// const { getUser, getPosts, getComments } = require("./db");

// getUser(1, (error, user) => {
//   if (error) return console.error(error);
//   getPosts(user.id, (error, posts) => {
//     if (error) return console.error(error);
//     getComments(posts[0].id, (error, comments) => {
//       if (error) return console.error(error);

//       console.log(comments);
//     });
//   });
// });

// getUser(1)
//   .then((user) => getPosts(user.id))
//   .then((posts) => getComments(posts[0].id))
//   .then((comments) => console.log(comments))
//   .catch((error) => console.error(error));

// async function getUser(id) {
//   return { id: 1 };
// }
// let user = await getUser();
// console.log(user);

// getUser(1).cath((error) => console.log(error));

export const addImage = (imgSrc, callback) => {
  const imgElem = document.createElement("img");
  imgElem.setAttribute("alt", "My photo");
  imgElem.src = imgSrc;

  const containerElement = document.querySelector(".page");

  containerElement.append(imgElem);

  const onImageLoaded = () => {
    const { width, height } = imgElem;
    callback(null, { width, height });
  };

  imgElem.addEventListener("load", onImageLoaded);
  imgElem.addEventListener("error", () => callback("Image load failed"));
};

const imgSrc =
  "https://gromcode.s3.eu-central-1.amazonaws.com/front-end/html-css/lesson+13/task2/sprites.png";

const onImageLoaded = (error, data) => {
  if (error) {
    console.log(error);
    return;
  }
  const { width, height } = data;
  const sizeElem = document.querySelector(".image-size");
  sizeElem.textContent = `${width} x ${height}`;
};
addImage(imgSrc, onImageLoaded);
