import path from "path";

// console.log(path.resolve());
// console.log(path.join("/path", "server", "local.pdf"));
// console.log(path.extname("server.js"));
const file = "server.js";
const extname = path.extname(file);
if (extname === ".js") {
  console.log("ok");
} else {
  console.log("file not supported");
}
