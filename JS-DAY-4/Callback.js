// 1
// function processOrder(orderName, callback) {
//   console.log("Processing", orderName);
//   setTimeout(() => {
//    callback(`${orderName} is ready`);
//   }, 2000);
// }
// processOrder("Mouse", (message) => {
//   console.log(message);
// });

// 2
function loadStep1(callback) {
  setTimeout(() => {
    callback("Step 1 done");
  }, 1000);
}
function loadStep2(callback) {
  setTimeout(() => {
    callback("Step 2 done");
  }, 5000);
}
function loadStep3(callback) {
  setTimeout(() => {
    callback("Step 3 done");
  }, 1000);
}
loadStep1((message) => {
  console.log(message);
  loadStep2((message) => {
    console.log(message);
    loadStep3((message) => {
      console.log(message);
    });
  });
});
