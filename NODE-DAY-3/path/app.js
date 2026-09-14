import path from "path";
const filePath = path.join("path", "data", "user.json");
const filePath1 = path.resolve("path", "data", "user.json");
const filePath2 = path.basename("/path/data/users.json");
const filePath3 = path.dirname("/path/data/users.json");
const filePath4 = path.extname("user.json");

console.log(filePath);
console.log(filePath1);
console.log(filePath2);
console.log(filePath3);
console.log(filePath4);
