import express from "express";
const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Manu",
  },
];

const logger = (req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const duration = Date.now() - start;
    console.log(`${req.method} | ${req.url} | ${res.statusCode} | ${duration}ms`);
  });
  next();
};
app.use(logger);
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.get("/users", (req, res) => {
  res.json(users);
});
app.post("/users", (req, res) => {
  const data = req.body;
  users.push(data);
  res.status(201).json(users);
});
app.listen(3000, () => {
  console.log("server is running at port 3000");
});
