function calculator(num1, operation, num2) {
  if (operation === "+") {
    return num1 + num2;
  } else if (operation === "-") {
    return num1 - num2;
  } else if (operation === "*") {
    return num1 * num2;
  } else if (operation === "/") {
    return num1 / num2;
  } else {
    return "wrong operator";
  }
}

console.log(
  calculator(Number(process.argv[2]), process.argv[3], Number(process.argv[4])),
);
