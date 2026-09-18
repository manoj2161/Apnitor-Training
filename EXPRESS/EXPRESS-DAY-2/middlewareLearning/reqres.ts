import express from "express";
const app = express();
app.use(express.json());
const addUser = (req, res, next) => {
  req.user = {
    id: 1,
    name: "manu",
    role: "Developer",
  };
  next();
};
app.get("/", (req, res) => {
  res.send("Home Page");
});
app.get("/user", addUser, (req, res) => {
  res.json(req.user);
});

app.listen(3000, () => {
  console.log("server is running at port 3000");
});
