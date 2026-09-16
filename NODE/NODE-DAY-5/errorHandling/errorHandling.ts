function add(num1?: number, num2?: number): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (num1 !== undefined && num2 !== undefined) {
        resolve(num1 + num2);
      } else {
        reject(new Error("Something went wrong.."));
      }
    }, 1000);
  });
}

async function main(): Promise<void> {
  try {
    const result = await add(2, 4);
    console.log(result);
  } catch (error) {
    console.log("Error", error);
  }
}
main();
