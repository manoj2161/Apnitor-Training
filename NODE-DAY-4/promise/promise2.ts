function getUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Manu");
    }, 1000);
  });
}

function getOrders(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

function getPayment(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

getUser()
  .then((user) => {
    console.log("User:", user);
    return getOrders();
  })
  .then((orders) => {
    console.log("Orders:", orders);
    return getPayment();
  })
  .then((payment) => {
    console.log("Payment:", payment);
  })
  .catch((error) => {
    console.log("Error:", error);
  });
