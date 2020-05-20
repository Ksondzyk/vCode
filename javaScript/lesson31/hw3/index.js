const delay = (time) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(time);
    }, time);
  });

delay(3000).then(() => console.log("Done"));
