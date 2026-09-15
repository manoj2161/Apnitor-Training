// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("Data received");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Something went wrong");
  }, 2000);
});

promise
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });