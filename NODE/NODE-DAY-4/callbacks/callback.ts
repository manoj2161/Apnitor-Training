function calculate(num1: number, num2: number, callback:(sum:number)=>void): void {
  const sum: number = num1 + num2;
  callback(sum);
}

calculate(1, 2, (sum: number): void => {
  return console.log("Result - ", sum);
});
