const loginSuccessful: boolean = true;
const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (loginSuccessful === true) {
      resolve("Login successful");
    } else {
      reject("Login failed");
    }
  }, 2000);
});

promise
  .then((data: string) => {
    console.log(data);
  })
  .catch((error: string) => {
    console.log(error);
  });
