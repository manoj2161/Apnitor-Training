import http from "node:http";

const server = http.createServer((req, res) => {
  console.log(req.method);
  console.log(req.url);
  res.end("Hello backend");
});

server.listen(3000, () => {
  console.log("server is running on port 3000");
});
