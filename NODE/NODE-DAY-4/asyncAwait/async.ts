async function getUser(): Promise<string> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Manu");
    }, 1000);
  });
}

async function getOrders(): Promise<number> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
}

async function getPayment(): Promise<boolean> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });
}

async function main(): Promise<void> {
  const user: string = await getUser();
  const orders: number = await getOrders();
  const payment: boolean = await getPayment();

  console.log("User:", user);
  console.log("Orders:", orders);
  console.log("Payment:", payment);
}

main();