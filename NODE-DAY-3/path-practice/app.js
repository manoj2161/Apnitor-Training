import path from "path";
import fs from "fs/promises";
const filePath = path.join("data", "user.json");
await fs.writeFile(`${filePath}`, JSON.stringify({ name: "manu" }, null, 2));
const data = await fs.readFile(filePath, "utf-8");
const names = JSON.parse(data);
console.log(names);
