// // 1

// function checkAge(age){
//     const promise = new Promise((resolve,reject)=>{
//         if(age>=18){
//             resolve("Access granted");
//         }
//         else{
//             reject("Access denied");
//         }
//     })
//     return promise;
// };
// checkAge(18)
// .then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.log(error);
// })
// checkAge(15)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// // 2
// function processOrder(orderName) {
//   const promise = new Promise((resolve, reject) => {
//     let status = true;
//     setTimeout(() => {
//     if (status) {
//         resolve(`${orderName} is shipped`);
//       }
//     else {
//       reject(`${orderName} is out of stock`);
//     }
// },2000);
//   });
// return promise;
// }
// processOrder("PS5")
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// 3
function getUser(id) {
  return new Promise((resolve, reject) => {
    if (id) {
      resolve({id,name:"User"+1});
    } else {
      reject(`Invalid id`);
    }
  });
}
function getOrders(userId) {
  return new Promise((resolve, reject) => {
    if (userId) {
      resolve(["Order1","Order2"]);
    } else {
      reject("No Orders yet");
    }
  });
}
function getOrderDetais(order) {
  return new Promise((resolve, reject) => {
    if (order) {
      resolve(`${order} details`);
    }else{
        reject("No details available");
    }
  });
}
getUser(1).then((user)=>{
    console.log(user);
    return getOrders(user.id);
}).then((orders)=>{
    console.log(orders);
return getOrderDetais(orders[0]);    
}).then((details)=>{
    console.log(details);
}).catch((error)=>{
    console.log("Error",error);
});