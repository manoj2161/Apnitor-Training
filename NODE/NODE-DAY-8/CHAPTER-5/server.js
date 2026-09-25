import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("<h1>This is a home page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>This is a about page</h1>");
  } else if (req.url === "/contact") {
    res.end("<h1>This is a contact page</h1>");
  } else {
    res.end("<h1>404 <br> Page not found</h1>");
  }
});
const port = 3000;
server.listen(port, () => {
  console.log("server is running at port ", port);
});
