import fs from "fs/promises";

await fs.writeFile("message.txt", "Hello Node.js");
await fs.appendFile("message.txt", "\nLearning Core Modules");
const data = await fs.readFile("message.txt", "utf-8");
console.log(data);

await fs.unlink("message.txt");
