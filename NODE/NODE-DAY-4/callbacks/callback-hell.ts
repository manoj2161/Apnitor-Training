function getUser(user: string, callback: (orders: number) => void): void {
  setTimeout(() => {
    console.log("Hello", user);
    const orders: number = 1;
    callback(orders);
  }, 2000);
}
function getOrders(
  orders: number,
  callback: (payments: boolean) => void,
): void {
  setTimeout(() => {
    console.log("orders : ", orders);
    const payments = true;
    callback(payments);
  }, 2000);
}

function getPayment(payments: boolean): void {
  setTimeout(() => {
    console.log("Payment Done", payments);
  }, 2000);
}

getUser("Manu", (orders: number) => {
  getOrders(orders, (payments: boolean) => {
    getPayment(payments);
  });
});
