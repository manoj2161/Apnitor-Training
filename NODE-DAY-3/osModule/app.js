import os from "os";
console.log("Operating System:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
const totalMemory = os.totalmem() / 1024 ** 3;
console.log("Total Memory:", totalMemory.toFixed(2), "GB");
const freeMemory = os.freemem() / 1024 ** 3;
console.log("Free Memory:", freeMemory.toFixed(2), "GB");
console.log(
  "Free Memory Percentage:",
  Math.floor((freeMemory / totalMemory) * 100),
  "%",
);
console.log("Home Directory:", os.homedir());
console.log("Hostname:", os.hostname());
