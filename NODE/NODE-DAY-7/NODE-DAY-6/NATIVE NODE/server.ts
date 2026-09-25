import http from "node:http";
const users = [
  {
    id: 1,
    name: "Manoj",
  },
  {
    id: 2,
    name: "Karan",
  },
];
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.statusCode = 200;
    res.end("Home Page");
  } else if (req.method === "GET" && req.url === "/about") {
    res.statusCode = 200;
    res.end("About Page");
  } else if (req.method === "GET" && req.url === "/users") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/JSON");
    res.end(JSON.stringify(users));
  } else if (req.method === "POST" && req.url === "/users") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      console.log(JSON.parse(body));
    });
    req.on("end", () => {
      const newUser = JSON.parse(body);
      users.push(newUser);
      res.statusCode = 201;
      res.end("User saved successfully");
    });
  } else if (req.method === "GET" && req.url?.startsWith("/users/")) {
    const parts = req.url.split("/");
    const id = Number(parts[parts.length - 1]);
    const existUser = users.find((user) => user.id === id);
    if (existUser) {
      res.statusCode = 200;

      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(existUser));
    } else {
      res.statusCode = 404;
      res.end("User not found");
    }
  } else {
    res.statusCode = 404;
    res.end("Page not found");
  }
});
server.listen(3000, () => {
  console.log("server is running at port 3000");
});
