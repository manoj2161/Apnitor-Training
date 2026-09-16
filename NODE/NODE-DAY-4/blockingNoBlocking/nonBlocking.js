import fs, { readFile } from "fs";
console.log("START");
fs.readFile("file.txt", "utf-8", (err, data) => {
  console.log(data);
});

console.log("end");
